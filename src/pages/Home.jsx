import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import LabCard from "../components/LabCard";
import {Navigate, Link } from 'react-router-dom'
import BASE_URL from '../components/urlProvider'

const text =
  "The DRDO was established in 1958 by combining the Defence Science Organisation and some of the technical development establishments. A separate Department of Defence Research and Development was formed in 1980, which later administered DRDO";

function Home() {

  const [labs, setLabs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch(`${BASE_URL}/labs`)
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        setLabs(data); // Update the state with the received data
      })
      .catch((error) => {
        console.error("Error fetching labs:", error);
      });
  };

  return (
    <>
      <div className="labCards">
          {
            labs.map((lab) => (
              <LabCard labName={lab} about={text} img={logo} />
            ))
          }     
      </div>
    </>
  );
}

export default Home;
