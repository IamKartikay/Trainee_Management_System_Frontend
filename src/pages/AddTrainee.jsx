import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicDetails from "./formPages/BasicDetails";
import AcademicDetails from "./formPages/AcademicDetails";
import TrainingDetails from "./formPages/TrainingDetails";
import Context from "../context/StateContext";

const AddTrainee = ({ update, params }) => {
  const { setBasicDetails, setAcademicDetails, setTrainingDetails, selectedLab } =
  useContext(Context);

  useEffect(()=>{
    if(update)
    {
      initialize();
    }
  },[])

  const initialize = async () => {
    const prevDetails = params;
    setTrainingDetails.setFieldName(prevDetails.trainingDetails.training_field);
    setTrainingDetails.setMentorName(prevDetails.trainingDetails.mentor_name);
    setTrainingDetails.setTrainingStart(
      prevDetails.trainingDetails.training_start
    );
    setTrainingDetails.setTrainingEnd(prevDetails.trainingDetails.training_end);
    setTrainingDetails.setTrainingPeriod(
      prevDetails.trainingDetails.training_period
    );
    setTrainingDetails.setTrainingStatus(
      prevDetails.trainingDetails.training_status
    );

    setBasicDetails.setFirstName(prevDetails.basicDetails.first_name);
    setBasicDetails.setLastName(prevDetails.basicDetails.last_name);
    setBasicDetails.setContactNo(prevDetails.basicDetails.contact_no);
    setBasicDetails.setEmail(prevDetails.basicDetails.email);
    setBasicDetails.setAddress({
      current: prevDetails.addressDetails.current_address,
      permanent: prevDetails.addressDetails.permanent_address,
    });

    setAcademicDetails.setTenthSchool(prevDetails.academicDetails.tenth_School);
    setAcademicDetails.setTenthMarks(prevDetails.academicDetails.tenth_grades);
    setAcademicDetails.setTwelthSchool(
      prevDetails.academicDetails.twelth_School
    );
    setAcademicDetails.setTwelthMarks(
      prevDetails.academicDetails.twelth_grades
    );
    setAcademicDetails.setBtechDetails({
      btech_institute: prevDetails.academicDetails.btech_institute,
      btech_yop: prevDetails.academicDetails.btech_yop,
      btech_sem1_grades: prevDetails.academicDetails.btech_sem1_grades,
      btech_sem2_grades: prevDetails.academicDetails.btech_sem2_grades,
      btech_sem3_grades: prevDetails.academicDetails.btech_sem3_grades,
      btech_sem4_grades: prevDetails.academicDetails.btech_sem4_grades,
      btech_sem5_grades: prevDetails.academicDetails.btech_sem5_grades,
      btech_sem6_grades: prevDetails.academicDetails.btech_sem6_grades,
      btech_sem7_grades: prevDetails.academicDetails.btech_sem7_grades,
      btech_sem8_grades: prevDetails.academicDetails.btech_sem8_grades,
    });
    setAcademicDetails.setMtechDetails({
      mtech_institute: prevDetails.academicDetails.mtech_institute,
      mtech_yop: prevDetails.academicDetails.mtech_yop,
      mtech_sem1_grades: prevDetails.academicDetails.mtech_sem1_grades,
      mtech_sem2_grades: prevDetails.academicDetails.mtech_sem2_grades,
      mtech_sem3_grades: prevDetails.academicDetails.mtech_sem3_grades,
      mtech_sem4_grades: prevDetails.academicDetails.mtech_sem4_grades,
    });
  };

  const [step, setStep] = useState(1);
  const nextStep = (e) => {
    e.preventDefault();
    console.log(step);
    setStep((prev) => prev + 1);
  };
  const prevStep = (e) => {
    e.preventDefault();
    setStep((prev) => prev - 1);
  };

  return (
    <>
    {update && <h1 style={{marginTop:'30px', textAlign:'center'}}>Update Trainee</h1>}
      {step === 1 && <BasicDetails step={step} nextStep={nextStep} />}
      {step === 2 && (
        <AcademicDetails step={step} nextStep={nextStep} prevStep={prevStep} />
      )}
      {update && step === 3 && <TrainingDetails step={step} update={update} updationId={params._id}/>}
      {step === 3 && <TrainingDetails step={step}/>}
    </>
  );
};

export default AddTrainee;
