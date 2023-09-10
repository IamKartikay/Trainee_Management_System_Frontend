import React, {useContext, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Context from '../context/StateContext';
import './formPages/Form.css'
import BASE_URL from '../components/urlProvider'


const AddDepartment = ({update ,params }) => {

    useEffect(() => {
      if(update){
        setDeptName(params.name)
      }
    }, [])
    

    const navigate = useNavigate();
    const [deptName, setDeptName] = useState('')
    const {
        selectedLab
      } = useContext(Context);

      const postData = async (e) => {
        e.preventDefault();
        if(update)
        {
          //to update department
          try {
            const response = await fetch(`${BASE_URL}/department/update`, {
              method: "PUT",
              body: JSON.stringify({
                id: params._id,
                updatedDepartmentName: deptName,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
            if(response.ok)
            {
              location.reload();
              alert('Updated Successfully')
              navigate(`/${selectedLab}/showDepartments`)
            }else{
              alert("Please Try Again")
            }
          } catch (error) {
            console.log(error);
          }

        }else{
          try {
            const response = await fetch(`${BASE_URL}/addDepartment`, {
              method: "POST",
              body: JSON.stringify({
                selectedLab, 
                deptName,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
            if(response.ok){
              alert('Department Added Successfully')
              navigate(`/${selectedLab}/showDepartments`)
            }
          } catch (error) {
              alert('Error Please Try Again')
            console.log(error);
          }
        }
      };

  return (
    <div className="container"> 
    <h1>Enter Department Details</h1>
    <form onSubmit={postData}>
      <div>
        <label>Department Name</label>
        <input
          type="text"
          value={deptName}
          className="form-control"
          onChange={e => setDeptName(e.target.value)}
        />
      </div>

      <button className="formbutton" type="submit" >
        Add
      </button>
    </form>  
  </div>
  )
}

export default AddDepartment