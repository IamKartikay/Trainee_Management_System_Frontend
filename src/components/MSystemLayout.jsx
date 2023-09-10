import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MSystemLayout = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <div className="management_section">
      {activeMenu ? (
        <div className="Sidebar">
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </div>
      ):(
        <div className="Closed-Sidebar">
          <button className="icon" onClick={()=>setActiveMenu(true)}>
            <HiOutlineChevronDoubleRight size={36} color="white"/>
          </button>
        </div>
      )}
      <div className="right_sec">
        <Outlet />
      </div>
    </div>
  );
};

export default MSystemLayout;
