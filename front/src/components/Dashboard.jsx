// Dashboard.js
import React from "react";

import "../pages/style.css";
import WeatherCard from "./WeatherCard";
import Statut from "./Statut";

import Lightning from "./Lightning";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/** 1 er niveau */}
      <div className="flex flex-row justify-between" style={{ flex: 0.5 }}>
        <div
          className="flex flex-col h-full bg-green-400 rounded-3xl"
          style={{ flex: 0.58 }}
        ></div>
        <div
          className="flex flex-col h-full bg-sky-400 rounded-3xl"
          style={{ flex: 0.4 }}
        >
          
        </div>
      </div>

      {/** 2 eme niveau */}
      <div
        className="flex flex-row justify-between  my-3"
        style={{ flex: 0.25 }}
      >
        <div
          className="flex flex-col h-full bg-red-400 rounded-3xl"
          style={{ flex: 0.5 }}
        >
          <Lightning/>
        </div>
        <div
          className="flex flex-col h-full lg:mx-4 bg-zinc-400 rounded-3xl"
          style={{ flex: 0.5 }}
        >
          
        </div>
        <div
          className="flex flex-col h-full  rounded-3xl"
          style={{ flex: 0.5 }}
        >
          <WeatherCard /> 
        </div>
      </div>

      {/** 3 eme niveau */}
      <div className="flex flex-row " style={{ flex: 0.3 }}>
        <div
          className="flex flex-col h-full bg-zinc-400 rounded-3xl"
          style={{ flex: 0.5 }}
        >
          <Statut />
        </div>
        <div
          className="flex flex-col h-full mx-4 bg-indigo-400 rounded-3xl"
          style={{ flex: 0.5 }}
        >
          <Statut />
        </div>
        <div
          className="flex flex-col h-full mr-4 bg-orange-400 rounded-3xl"
          style={{ flex: 0.5 }}
        >
          <Statut />
        </div>
        <div
          className="flex flex-col h-full bg-amber-400 rounded-3xl"
          style={{ flex: 0.5 }}
        >
          <Statut />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
