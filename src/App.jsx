import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTrainee from "./pages/AddTrainee";
import ShowTrainee from "./pages/ShowTrainee";
import FindTrainee from "./pages/FindTrainee";
import Layout from "./components/Layout";
import MSystemLayout from "./components/MSystemLayout";
import ShowDepartments from './pages/ShowDepartments'
import AddDepartment from './pages/AddDepartment'

import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login'
import Signup from "./pages/Signup";


const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/:id" element={<MSystemLayout/>}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="addTrainee" element={<AddTrainee />} />
            <Route path="showTrainee" element={<ShowTrainee />} />
            <Route path="findTrainee" element={<FindTrainee />} />
            <Route path="updateTrainee" element={<AddTrainee update={true}/>}/>
            <Route path="addDepartments" element={<AddDepartment/>}/>
            <Route path="showDepartments" element={<ShowDepartments/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
