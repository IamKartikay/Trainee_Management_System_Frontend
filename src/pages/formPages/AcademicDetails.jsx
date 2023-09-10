import React from "react";
import { useContext } from "react";
import Context from "../../context/StateContext";
import "./Form.css";

const TrainingDetails = (props) => {
  const {
    tenthSchool,
    tenthMarks,
    twelthMarks,
    twelthSchool,
    tenthSchoolHandler,
    tenthMarksHandler,
    twelthMarksHandler,
    twelthSchoolHandler,

    btechDetails,
    btechDetailsHandler,
    mtechDetails,
    mtechDetailsHandler,
  } = useContext(Context);


  // const printt = (e) => {
  //   e.preventDefault();

  //   const i = {
  //     tenthSchool: tenthSchool,
  //     tenthMarks: tenthMarks,
  //     twelthMarks: twelthMarks,
  //     twelthSchool: twelthSchool,
  //     btechDetails,
  //     mtechDetails
  //   };

  //   console.log(i);
  // };

  return (
    <div>
      <div className="container">
        <h1>Enter Academic Details</h1>
        <form>
          <label>Enter 10th Details</label>
          <input
            type="text"
            value={tenthSchool}
            placeholder="Enter School Name"
            onChange={tenthSchoolHandler}
          />
          <input
            type="number"
            value={tenthMarks}
            placeholder="Enter Marks in %"
            onChange={tenthMarksHandler}
          />

          <label>Enter 12th Details</label>
          <input
            type="text"
            value={twelthSchool}
            placeholder="Enter School Name"
            onChange={twelthSchoolHandler}
          />
          <input
            type="number"
            value={twelthMarks}
            placeholder="Enter Marks in %"
            onChange={twelthMarksHandler}
          />

          <label>BTech</label>
          <input
            type="text"
            name="btech_institute"
            value={btechDetails.btech_institute}
            placeholder="Enter Organization Name"
            onChange={btechDetailsHandler}
          />
          <input
            type="number"
            name="btech_yop"
            value={btechDetails.btech_yop}
            placeholder="Enter Graduation Year"
            onChange={btechDetailsHandler}
          />
          <em>* In case of CGPA or SGPA, calculate Marks in % = (CGPA or SGPA grade)*8.89</em>
          <label>Enter Semester wise Results</label>
          <div className="semGrades">
            <label>I-Year</label>
            <input
              type="number"
              value={btechDetails.btech_sem1_grades}
              name='btech_sem1_grades'
              placeholder="Enter Sem1 in %"
              onChange={btechDetailsHandler}
            />
            <input
              type="number"
              value={btechDetails.btech_sem2_grades}
              name='btech_sem2_grades'
              placeholder="Enter Sem2 in %"
              onChange={btechDetailsHandler}
            />
            <label>II-Year</label>
            <input
              type="number"
              value={btechDetails.btech_sem3_grades}
              name='btech_sem3_grades'
              placeholder="Enter Sem3 in %"
              onChange={btechDetailsHandler}
            />
            <input
              type="number"
              name='btech_sem4_grades'
              value={btechDetails.btech_sem4_grades}
              placeholder="Enter Sem4 in %"
              onChange={btechDetailsHandler}
            />
            <label>III-Year</label>
            <input
              type="number"
              name='btech_sem5_grades'
              value={btechDetails.btech_sem5_grades}
              placeholder="Enter Sem5 in %"
              onChange={btechDetailsHandler}
            />
            <input
              type="number"
              name='btech_sem6_grades'
              value={btechDetails.btech_sem6_grades}
              placeholder="Enter Sem6 in %"
              onChange={btechDetailsHandler}
            />
            <label>IV-Year</label>
            <input
              type="number"
              name='btech_sem7_grades'
              value={btechDetails.btech_sem7_grades}
              placeholder="Enter Sem7 in %"
              onChange={btechDetailsHandler}
            />
            <input
              type="number"
              name='btech_sem8_grades'
              value={btechDetails.btech_sem8_grades}
              placeholder="Enter Sem8 in %"
              onChange={btechDetailsHandler}
            />
          </div>

          <label>MTech</label>
          <input
            type="text"
            name='mtech_institute'
            value={mtechDetails.mtech_institute}
            placeholder="Enter Organization Name"
            onChange={mtechDetailsHandler}
          />
          <input
            type="number"
            name='mtech_yop'
            value={mtechDetails.mtech_yop}
            placeholder="Enter Graduation Year"
            onChange={mtechDetailsHandler}
          />
          <label>Enter Semester wise Results</label>

          <div className="semGrades">
            <label>I-Year</label>
            <input
              type="number"
              name='mtech_sem1_grades'
              value={mtechDetails.mtech_sem1_grades}
              placeholder="Enter Sem1 in %"
              onChange={mtechDetailsHandler}
            />
            <input
              type="number"
              name='mtech_sem2_grades'
              value={mtechDetails.mtech_sem2_grades}
              placeholder="Enter Sem2 in %"
              onChange={mtechDetailsHandler}
            />
            <label>II-Year</label>
            <input
              type="number"
              name='mtech_sem3_grades'
              value={mtechDetails.mtech_sem3_grades}
              placeholder="Enter Sem3 in %"
              onChange={mtechDetailsHandler}
            />
            <input
              type="number"
              name='mtech_sem4_grades'
              value={mtechDetails.mtech_sem4_grades}
              placeholder="Enter Sem4 in %"
              onChange={mtechDetailsHandler}
            />
          </div>

          <button className="formbutton" onClick={props.nextStep}>
            Continue to step {props.step + 1}
          </button>

          <button className="formbutton" onClick={props.prevStep}>
            Go back to step {props.step - 1}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrainingDetails;
