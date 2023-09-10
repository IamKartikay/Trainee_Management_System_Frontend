import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../context/StateContext";
import "./Form.css";
import BASE_URL from '../../components/urlProvider'


const TrainingDetails = (props) => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState(null);

  const {
    selectedLab,
    firstName,
    lastName,
    contactNo,
    address,
    email,

    tenthSchool,
    tenthMarks,
    twelthMarks,
    twelthSchool,
    btechDetails,
    mtechDetails,

    fieldName,
    mentorName,
    trainingStart,
    trainingEnd,
    trainingPeriod,
    trainingStatus,
    departmentName,

    fieldNameHandler,
    mentorNameHandler,
    trainingStartHandler,
    trainingEndHandler,
    trainingPeriodHandler,
    trainingStatusHandler,
    departmentNameHandler,
  } = useContext(Context);

  useEffect(() => {
    try {
      fetchDepartments();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchDepartments = async () => {
    await fetch(`${BASE_URL}/getDepartments`)
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  };

  const trainingDetails = {
    mentor_name: mentorName,
    training_field: fieldName,
    training_start: trainingStart,
    training_end: trainingEnd,
    training_period: trainingPeriod,
    training_status: trainingStatus,
    departmentName: departmentName,
    selectedLab: selectedLab,
  };

  const basicDetails = {
    first_name: firstName,
    last_name: lastName,
    contact_no: contactNo,
    current_address: address.current,
    permanent_address: address.permanent,
    email: email,
  };

  const academicDetails = {
    tenth_School: tenthSchool,
    tenth_grades: tenthMarks,
    twelth_School: twelthSchool,
    twelth_grades: twelthMarks,

    btech_institute: btechDetails.btech_institute,
    btech_yop: btechDetails.btech_yop,
    btech_sem1_grades: btechDetails.btech_sem1_grades,
    btech_sem2_grades: btechDetails.btech_sem2_grades,
    btech_sem3_grades: btechDetails.btech_sem3_grades,
    btech_sem4_grades: btechDetails.btech_sem4_grades,
    btech_sem5_grades: btechDetails.btech_sem5_grades,
    btech_sem6_grades: btechDetails.btech_sem6_grades,
    btech_sem7_grades: btechDetails.btech_sem7_grades,
    btech_sem8_grades: btechDetails.btech_sem8_grades,

    mtech_institute: mtechDetails.mtech_institute,
    mtech_yop: mtechDetails.mtech_yop,
    mtech_sem1_grades: mtechDetails.mtech_sem1_grades,
    mtech_sem2_grades: mtechDetails.mtech_sem2_grades,
    mtech_sem3_grades: mtechDetails.mtech_sem3_grades,
    mtech_sem4_grades: mtechDetails.mtech_sem4_grades,
  };

  const postData = async (e) => {
    e.preventDefault();
    if(props.update)
    {
      //For Updating Trainee
      try {
        const response = await fetch("http://localhost:5001/trainee/update", {
          method: "PUT",
          body: JSON.stringify({
            id: props.updationId,
            basicDetails,
            academicDetails,
            trainingDetails,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        if(response.ok)
        {
          location.reload();
          alert('Updated Successfully')
          navigate(`/${selectedLab}/showTrainee`)
        }else{
          alert("Please Try Again")
        }
      } catch (error) {
        console.log(error);
      }
    }else{
      //for Adding a Trainee
      try {
        await fetch("http://localhost:5001/details", {
          method: "POST",
          body: JSON.stringify({
            basicDetails,
            academicDetails,
            trainingDetails,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Enter Training Details</h1>
        <form>
          <label>Training Feild</label>
          <input type="text" value={fieldName} onChange={fieldNameHandler} />

          <label>Mentor Name</label>
          <input type="text" value={mentorName} onChange={mentorNameHandler} />

          <label>Training Start Date</label>
          <input
            type="date"
            value={trainingStart}
            onChange={trainingStartHandler}
          />
          <label>Training End Date</label>
          <input
            type="date"
            value={trainingEnd}
            onChange={trainingEndHandler}
          />

          <label>Training Period in months</label>
          <select value={trainingPeriod} onChange={trainingPeriodHandler}>
            <option value="1">1 Month</option>
            <option value="2"> 2 Months</option>
            <option value="3">3 Months</option>
            <option value="6"> 6 Months </option>
          </select>

          <label>Training Status</label>
          <select value={trainingStatus} onChange={trainingStatusHandler}>
            <option value="Ongoing"> Ongoing </option>
            <option value="Completed"> Completed </option>
          </select>

          <label>Department Name</label>
          <select value={departmentName} onChange={departmentNameHandler}>
            {departments &&
              departments.map((dept) => (
                <option value={dept.name} key={dept._id}>
                  {" "}
                  {dept.name}
                </option>
              ))}
          </select>

          <button className="formbutton" onClick={postData}>
            Submit
          </button>

          <button className="formbutton" onClick={props.prevStep}>
            Go back to step {props.step - 1}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrainingDetails;
