// Dashboard.js
import React from "react";

import "../pages/style.css";

const Dashboard = () => {
  return (
    <div className="dashboard all-board">
      {/** 1 er niveau */}
      <div className="flex flex-row justify-between aaa aaa1" style={{ flex: 0.5 }}>
        <div
          className="flex flex-col h-full bg-green-400 rounded-3xl aaa1-1"
          style={{ flex: 0.58 }}
        ></div>
        <div
          className="flex flex-col h-full bg-sky-400 rounded-3xl aaa1-1"
          style={{ flex: 0.4 }}
        ></div>
      </div>

      {/** 2 eme niveau */}
      <div
        className="flex flex-row justify-between  my-3 aaa aaa2"
        style={{ flex: 0.25 }}
      >
        <div
          className="flex flex-col h-full bg-red-400 rounded-3xl aaa2-1"
          style={{ flex: 0.5 }}
        ></div>
        <div
          className="flex flex-col h-full lg:mx-4 bg-zinc-400 rounded-3xl aaa2-2"
          style={{ flex: 0.5 }}
        >
          
        </div>
        <div
          className="flex flex-col h-full bg-fuchsia-400 rounded-3xl aaa2-3"
          style={{ flex: 0.5 }}
        ></div>
      </div>

      {/** 3 eme niveau */}
      <div className="flex flex-row aaa aaa3" style={{ flex: 0.3 }}>
        <div
          className="flex flex-col h-full bg-zinc-400 rounded-3xl aaa3-1"
          style={{ flex: 0.5 }}
        ></div>
        <div
          className="flex flex-col h-full mx-4 bg-indigo-400 rounded-3xl aaa3-2"
          style={{ flex: 0.5 }}
        ></div>
        <div
          className="flex flex-col h-full mr-4 bg-orange-400 rounded-3xl aaa3-3"
          style={{ flex: 0.5 }}
        ></div>
        <div
          className="flex flex-col h-full bg-amber-400 rounded-3xl aaa3-4"
          style={{ flex: 0.5 }}
        ></div>
      </div>
    </div>
  );
};

export default Dashboard;
