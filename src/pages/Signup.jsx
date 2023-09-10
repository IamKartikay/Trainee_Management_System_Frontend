import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/StateContext";
import BASE_URL from '../components/urlProvider'

const Signup = () => {

  const navigate = useNavigate();
  const {
    adminName,
    adminEmail,
    adminPassword,
    setAdminName,
    setAdminEmail,
    setAdminPassword,
  } = useContext(Context);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/api/admin/signup`, {
      method: "POST",
      body: JSON.stringify({
        name: adminName,
        email: adminEmail,
        password: adminPassword,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    if (response.ok) {
      alert('Signup successful')
      location.reload();
      navigate('/login');
    }
    if (!response.ok) {
      alert(json.error);
    }
  };

  return (
    <div className="container">
      <h1>Admin SignUp</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Admin Name</label>
          <input
            type="text"
            value={adminName}
            className="form-control"
            onChange={e =>  setAdminName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>

        <div>
          <label>Admin Email</label>
          <input
            type="email"
            value={adminEmail}
            className="form-control"
            onChange={e =>  setAdminEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </div>

        <div>
          <label>Admin Password</label>
          <input
            type="password"
            value={adminPassword}
            className="form-control"
            onChange={e => setAdminPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>

        <button className="formbutton" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
