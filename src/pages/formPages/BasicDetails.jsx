import React, { useContext, useEffect } from "react";
import Context from "../../context/StateContext";
import './Form.css'
const BasicDetails = ({step, nextStep}) => {
  const {
    firstName,
    lastName,
    contactNo,
    address,
    email,
    FnameHandler,
    LnameHandler,
    addressHandler,
    contactNHandler,
    emailHandler,
  } = useContext(Context);
  
  return (
    <>
      <div className="container"> 
      <h1>Enter Trainee Basic Details</h1>
      <form onSubmit={nextStep}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            className="form-control"
            onChange={FnameHandler}
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            className="form-control"
            onChange={LnameHandler}
          />
        </div>

        <div>
          <label>Enter Current Address</label>
          <input
            type="text"
            value={address.current}
            name="current"
            className="form-control"
            onChange={addressHandler}
          />
        </div>

        <div>
          <label>Enter Permanent Address</label>
          <input
            type="text"
            value={address.permanent}
            name="permanent"
            className="form-control"
            onChange={addressHandler}
          />
        </div>

        <div>
          <label>Enter Contact Number</label>
          <input
            type="number"
            value={contactNo}
            className="form-control"
            onChange={contactNHandler}
          />
        </div>

        <div>
          <label>Enter Email</label>
          <input
            type="email"
            value={email}
            className="form-control"
            onChange={emailHandler}
          />
        </div>

        <button className="formbutton" type="submit" >
          Continue to step {step+1}
        </button>
      </form>  
    </div>
    </>
  );
};

export default BasicDetails;
