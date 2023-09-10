import React, { useState, useContext, createContext, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {

  useEffect(()=>{
    const admin = JSON.parse(localStorage.getItem('admin'))
    const labname = JSON.parse(localStorage.getItem('labname'))
    if(labname)
    {
      setSelectedLab(labname)
    }
    if(admin)
    {
      setAdminName(admin.name)
      setAdminEmail(admin.email)
      setLoggedIn(true)
    }
  }, [])

  const [loggedIn , setLoggedIn] = useState(false)
  const [adminName , setAdminName] = useState('')
  const [adminEmail , setAdminEmail] = useState('')
  const [adminPassword , setAdminPassword] = useState('')

  const [selectedLab , setSelectedLab] = useState('')

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNo, setContactNo] = useState('');
  const [address, setAddress] = useState({
    current: '',
    permanent: '',
  });
  const [email, setEmail] = useState('');
  const [fieldName, setFieldName] = useState("");
  const [mentorName, setMentorName] = useState("");
  const [trainingStart, setTrainingStart] = useState("");
  const [trainingEnd, setTrainingEnd] = useState("");
  const [trainingPeriod, setTrainingPeriod] = useState("");
  const [trainingStatus, setTrainingStatus] = useState("");
  const [departmentName, setDepartmentName] = useState("");

  const [tenthSchool, setTenthSchool] = useState("");
  const [tenthMarks, setTenthMarks] = useState("");
  const [twelthMarks, setTwelthMarks] = useState("");
  const [twelthSchool, setTwelthSchool] = useState("");
  const [btechDetails, setBtechDetails] = useState({
    btech_institute: '',
    btech_yop: '',
    btech_sem1_grades: '',
    btech_sem2_grades: '',
    btech_sem3_grades: '',
    btech_sem4_grades: '',
    btech_sem5_grades: '',
    btech_sem6_grades: '',
    btech_sem7_grades: '',
    btech_sem8_grades: '',
  })

  const [mtechDetails, setMtechDetails] = useState({
    mtech_institute: '',
    mtech_yop: '',
    mtech_sem1_grades: '',
    mtech_sem2_grades: '',
    mtech_sem3_grades: '',
    mtech_sem4_grades: '',
  })

  const btechDetailsHandler = (e) => {
    console.log(e.target.value);
    const {value, name} = e.target
    setBtechDetails((prev)=>{
      return {
        ...prev,
        [name] : value
      }
    })
  };
  const mtechDetailsHandler = (e) => {
    const {value, name} = e.target
    setMtechDetails((prev)=>{
      return {
        ...prev,
        [name] : value
      }
    })
  };

 
  const LabSelectionHandler = (labname) => {
    setSelectedLab(labname);
  };

  const FnameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const LnameHandler = (e) => {
    setLastName(e.target.value);
  };

  const addressHandler = (e) => {
    const {value, name} = e.target
    setAddress((prev)=>{
      return {
        ...prev,
        [name] : value
      }
    })
  };

  const emailHandler = (e) =>{
    setEmail(e.target.value);
  }

  const contactNHandler = (e) => {
    setContactNo(e.target.value);
  };

  const fieldNameHandler = (e) => {
    setFieldName(e.target.value);
  };
  const mentorNameHandler = (e) => {
    setMentorName(e.target.value);
  };
  const trainingStartHandler = (e) => {
    setTrainingStart(e.target.value);
  };
  const trainingEndHandler = (e) => {
    setTrainingEnd(e.target.value);
  };
  const trainingPeriodHandler =  (e) => {
    setTrainingPeriod(e.target.value);
  };
  const trainingStatusHandler =  (e) => {
    setTrainingStatus(e.target.value);
  };
  const departmentNameHandler = (e) => {
    setDepartmentName(e.target.value);
  };
  const tenthSchoolHandler = (e) => {
    setTenthSchool(e.target.value);
  };
  const tenthMarksHandler = (e) => {
    setTenthMarks(e.target.value);
  };
  const twelthMarksHandler = (e) => {
    setTwelthMarks(e.target.value);
  };
  const twelthSchoolHandler = (e) => {
    setTwelthSchool(e.target.value);
  };
  const Handler = (e) => {
    setContactNo(e.target.value);
  };

  const setBasicDetails = {
    setFirstName,
    setLastName,
    setContactNo,
    setAddress,
    setEmail,
  }

  const setAcademicDetails = {
    setTenthSchool,
    setTenthMarks,
    setTwelthMarks,
    setTwelthSchool,
    setBtechDetails,
    setMtechDetails,
  }

  const setTrainingDetails = {
    setFieldName,
    setMentorName,
    setTrainingStart,
    setTrainingEnd,
    setTrainingPeriod,
    setTrainingStatus,
    setDepartmentName
  }

  return (
    <Context.Provider
      value={{
        loggedIn,
        setLoggedIn,
        adminName,
        adminEmail,
        adminPassword,
        setAdminName,
        setAdminEmail,
        setAdminPassword,

        selectedLab,
        LabSelectionHandler,
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
        tenthSchool,
        tenthMarks,
        twelthMarks,
        twelthSchool,
        btechDetails,
        mtechDetails,
        tenthSchoolHandler,
        tenthMarksHandler,
        twelthMarksHandler,
        twelthSchoolHandler,
        btechDetailsHandler,
        mtechDetailsHandler,
        setBasicDetails,
        setAcademicDetails,
        setTrainingDetails,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
