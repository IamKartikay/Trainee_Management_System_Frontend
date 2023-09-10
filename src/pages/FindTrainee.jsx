import React, { useState, useEffect, useContext } from "react";
// import {  } from "react-router-dom";
import Context from "../context/StateContext";
import "./formPages/Form.css";
import Animations from "../components/Loading";
import ShowTrainee from "./ShowTrainee";
import BASE_URL from '../components/urlProvider'

const FindTrainee = () => {
  const { selectedLab } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [allDepartment, setAllDepartment] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [data, setData] = useState(null);

  const FnameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const LnameHandler = (e) => {
    setLastName(e.target.value);
  };

  useEffect(() => {
    try {
      fetchDepartments();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchDepartments = async () => {
    setLoading(true);
    await fetch(`${BASE_URL}/getDepartments`)
      .then((res) => res.json())
      .then((data) => setAllDepartment(data));

    setLoading(false);
  };

  const fetchData = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/findTrainee`, {
        method: "PUT",
        body: JSON.stringify({
          selectedLab,
          selectedDepartment,
          firstName,
          lastName,
          email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const json = await response.json();
        setData(json);
        setLoading(false);
      } else {
        alert("No Such Trainee");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      {!loading && !data && (
        <div className="container">
          <h1>Enter Trainee Details</h1>
          <form onSubmit={fetchData}>
            <div>
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                className="form-control"
                onChange={FnameHandler}
              />
              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                className="form-control"
                onChange={LnameHandler}
              />
              <label>Trainee Email</label>
              <input
                type="email"
                value={email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Department Name</label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {allDepartment &&
                  allDepartment.map((dept) => (
                    <option value={dept.name} key={dept._id}>
                      {" "}
                      {dept.name}
                    </option>
                  ))}
              </select>

              <button className="formbutton" onClick={fetchData}>
                Find
              </button>
            </div>
          </form>
        </div>
      )}

      {loading && <Animations />}

      {data && <ShowTrainee singleTrainee={data} />}
    </>
  );
};

export default FindTrainee;
