import React, {useContext} from "react";
import {useNavigate, Link } from 'react-router-dom'
import Context from "../context/StateContext";

const LabCard = ({labName, about, img}) => {
  const {LabSelectionHandler , loggedIn} = useContext(Context)
  const navigate = useNavigate();

  const handleClick = async() => {
    localStorage.setItem("labname" , JSON.stringify(labName))
    await LabSelectionHandler(labName);
    if(loggedIn){
      navigate(`/${labName}/dashboard`)
    }else{
      alert('Please Login')
      navigate('/login')
    }
  }

  return (
    <div>
      <div className="card" style={{width: '18rem'}}>
        <img src={img} alt={labName} className="card-img-top" />
        <div className="card-body" style={{textAlign: "center"}}>
          <h5 className="card-title">{labName}</h5>
          <p className="card-text">
            {about}
          </p>
          <button className="btn btn-primary" onClick={handleClick} >
            {labName} Management System
          </button>

        </div>
      </div>
    </div>
  );
};

export default LabCard;
