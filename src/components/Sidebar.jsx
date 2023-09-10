import React, {useContext} from "react";
import {
  HiMenu,
  HiX,
  HiUserGroup,
  HiUserAdd,
  HiUser,
  HiOutlineViewBoards,
  HiPlusSm
} from "react-icons/hi";
import { HiComputerDesktop } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import Context from "../context/StateContext";

const Sidebar = ({ activeMenu, setActiveMenu }) => {

  const {selectedLab} = useContext(Context);
  return (
    <>
      {activeMenu && (
          <div className="SidebarList">
            <div className="header" style={{ borderBottom: "2px solid white" }}>
              <div
              className="header-title"
                style={{
                  marginLeft: "50px",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                {selectedLab}
              </div>
              <button className="close-sidebar" onClick={()=>setActiveMenu(false)}>
                <HiX size={30} color="white"/>
              </button>
            </div>
            <div className="option">
              <div className="icon">
                <HiOutlineViewBoards />
              </div>
              <Link className="title" to={`/${selectedLab}/dashboard`}>
                Dashboard
              </Link>
            </div>
            <div className="option">
              <div className="icon">
                <HiUserAdd />
              </div>
              <Link className="title" to={`/${selectedLab}/addTrainee`}>
                Add Trainee
              </Link>
            </div>
            <div className="option">
              <div className="icon">
                <HiUserGroup />
              </div>
              <Link className="title" to={`/${selectedLab}/showTrainee`}>
                Show Trainees
              </Link>
            </div>
            <div className="option">
              <div className="icon">
                <HiUser />
              </div>
              <Link className="title" to={`/${selectedLab}/findTrainee`}>
                Find Trainee
              </Link>
            </div>
            <div className="option">
              <div className="icon">
                <HiPlusSm size={45}/>
              </div>
              <Link className="title" to={`/${selectedLab}/addDepartments`}>
                Add Department
              </Link>
            </div>
            <div className="option">
              <div className="icon">
                <HiComputerDesktop />
              </div>
              <Link className="title" to={`/${selectedLab}/showDepartments`}>
                Show Departments
              </Link>
            </div>
          </div>
      )}
    </>
  );
};

export default Sidebar;
