import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Tooltip } from "@mui/material";
import { GrTrash, GrEdit } from "react-icons/gr";
import AddTrainee from "../pages/AddTrainee";
import Context from "../context/StateContext";

const TableActions = ({ params, traineeAction, departmentAction, setUpdate, setParams }) => {

  const deleteAction = async () => {
    if(traineeAction){
      const result = await fetch(
        `http://localhost:5001/trainee/delete/${params.row._id}`,
        {
          method: "DELETE",
        }
      )
      if(response.ok){
        alert('Trainee Deleted Successfully')
        navigate(`/${selectedLab}/showTrainee`)
      }else{
        alert('Error Please Try Again')
      }
    }

    if(departmentAction){
      try {
        const response = await fetch(`http://localhost:5001/department/delete/${params.row._id}`, {
          method: "DELETE",
        })

        if(response.ok){
          alert('Department Deleted Successfully')
          navigate(`/${selectedLab}/showDepartments`)
        }else{
          alert('Error Please Try Again')
        }
      } catch (error) {
          alert('Error Please Try Again')
        console.log(error);
      }
    };
  }

  return (
    <Box>
    <Tooltip title="Edit this trainee">
      <IconButton onClick={()=>{
        setUpdate(true)
        setParams(params.row)
        }}>
        <GrEdit />
      </IconButton>
    </Tooltip>
    <Tooltip title="Delete this trainee">
      <IconButton onClick={deleteAction}>
        <GrTrash />
      </IconButton>
    </Tooltip>
  </Box>
  );
};

export default TableActions;
