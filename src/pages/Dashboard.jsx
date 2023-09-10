import React, { useState, useEffect } from "react";
import BASE_URL from '../components/urlProvider'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  BsFillBarChartFill,
  BsFillPersonLinesFill,
  BsFillPeopleFill,
  BsFillClipboardFill
} from "react-icons/bs";
import "./Dashboard.css";

const data1 = [
  {
    _id: "64e26cb4358bc3f5fd680c8c",
    name: "Artificial Intelligence",
    Ongoingcount: 1,
    Completedcount: 0,
  },
  {
    _id: "64e29db1d8279e2afc4e3e9f",
    name: "Robotics",
    Ongoingcount: 1,
    Completedcount: 0,
  },
  {
    _id: "64e29dd5d8279e2afc4e3ea0",
    name: "Machine Learning",
    Ongoingcount: 2,
    Completedcount: 1,
  },
];

const Dashboard = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState([]);
  const [OngoingTrainees, setOngoingTrainees] = useState(0);
  const [AllTimeTrainees, setAllTimeTrainees] = useState(0);
  const [departmentNames , setDepartmentNames] = useState([]);
  const [trainingFields , setTraineeFields] = useState([]);

  const fetchData = async (e) => {
    await fetch(`${BASE_URL}/dashboard`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.departmentsWithCount);
        setAllTimeTrainees(data.traineeCounts.AllTime);
        setOngoingTrainees(data.traineeCounts.Ongoing);
        setDepartmentNames(data.departments);
        setTraineeFields(data.trainingFields);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };




  return (
    <div className="dashboard">

      <div className="box box1">
        <div className="heading-container"> 
          <div className="heading-icon">
            <BsFillPersonLinesFill size={25}/> 
          </div>
          <p className="heading">Active Trainees</p>
        </div>
        <p className="discription">Total number of active trainees from all the <br/>departments</p>
        <hr/>
        <h2>
          {OngoingTrainees}
        </h2>
      </div>

      <div className="box box2">
        <div className="heading-container">
          <div className="heading-icon">
            <BsFillPeopleFill size={25}/>
          </div>
          <p className="heading">All Time Trainees</p>
        </div>
        <p className="discription">Total number of active and completed trainees from all the <br/>departments</p>
        <hr/>
       <h2>
          {AllTimeTrainees}
        </h2>
      </div>

      <div className="box box3">
        <div className="heading-container">
          <div className="heading-icon">
            <BsFillClipboardFill size={25}/>
          </div>
          <p className="heading">List of Departments</p>
        </div>
        <p className="discription">List of all the departments</p>
        <hr/>

          <ol>
            {
              departmentNames.map((e) => {
                return(<li key={e._id}>{e.name}</li>)
              })
            }
          </ol>
        
      </div>


      <div className="box box4">
          <div style={{"height": "auto"}}>
            <div className="heading-container">
              <div className="heading-icon">
                <BsFillBarChartFill size={25}/>
              </div>
              <p className="heading">Number of Trainees In Various Departments</p>
          </div>
          </div>
          <div style={{"height" : "85%" , "marginBottom" : "10px"}}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Ongoingcount" fill="#8884d8" />
                <Bar dataKey="Completedcount" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
      </div>

      <div className="box box5">
      <div className="heading-container">
          <div className="heading-icon">
            <BsFillClipboardFill size={25}/>
          </div>
          <p className="heading">List of Training Fields</p>
        </div>
        <p className="discription">List of training field available from all the departments</p>
        <hr/>

        <ol>
          {
            trainingFields.map( e => (<li>{e}</li>))
          }
        </ol>
      </div>

    </div>
  );
};

export default Dashboard;
