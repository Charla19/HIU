// Dashboard.js
import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

import "../pages/style.css";
import Bottombar from "./Bottombar";

const Dashboard = () => {
  const [enabled, setEnabled] = useState(false);
  const [enabled1, setEnabled1] = useState(true);
  const [enabled2, setEnabled2] = useState(false);
  const [enabled3, setEnabled3] = useState(true);

  return (
    <div className="dashboard all-board">
      {/** 1 er niveau */}
      <div
        className="flex flex-row justify-between aaa aaa1"
        style={{ flex: 0.5 }}
      >
        <div
          className="flex flex-col h-full  rounded-xl aaa1-2"
          style={{ flex: 0.58 }}
        >
          
        </div>
        <div
          className="flex flex-col h-full rounded-xl aaa1-1"
          style={{ flex: 0.4 }}
        ></div>
      </div>

      {/** 2 eme niveau */}
      <div
        className="flex flex-row justify-between  my-3 aaa aaa2"
        style={{ flex: 0.25 }}
      >
        <div
          className="flex flex-col h-full justify-center  rounded-xl aaa2-1"
          style={{ flex: 0.5 }}
        >
          <p style={{ fontSize: 8 }}>Consommation Courrante</p>
          <p className="text-sm font-bold">1.5 kWh</p>
        </div>
        <div
          className="flex flex-col h-full justify-center rounded-xl aaa2-2"
          style={{ flex: 0.5 }}
        >
          <p style={{ fontSize: 8 }}>Humidity</p>
          <p className="text-sm font-bold">48,2 %</p>
        </div>
        <div
          className="flex flex-col h-full justify-center  rounded-xl aaa2-3"
          style={{ flex: 0.5 }}
        >
          <p style={{ fontSize: 8 }}>Temperature</p>
          <p className="text-sm font-bold">38 °</p>
        </div>
      </div>

      {/** 3 eme niveau */}
      <div className="flex flex-row aaa aaa3" style={{ flex: 0.3 }}>
        <div
          className="flex flex-col h-full  rounded-xl aaa3-1"
          style={{ flex: 0.5 }}
        >
          <div className="flex flex-row flex-1 justify-between items-start px-2 pt-1">
            <HiOutlineSquares2X2 className="react-icon bg-gray-400 p-1 rounded-xl" />
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled ? "bg-sky-500" : "bg-gray-500"
              } relative inline-flex h-4 w-6 items-center rounded-full`}
            >
              <span
                className={`${
                  enabled ? "translate-x-2" : "translate-x-0"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
          <div className="px-2 pb-1">
            <p className="text-left text-white" style={{ fontSize: 8 }}>
              Gaabor
            </p>
            <p className="text-left text-white" style={{ fontSize: 10 }}>
              Humidité
            </p>
          </div>
        </div>
        <div
          className="flex flex-col h-full mx-4  rounded-xl aaa3-2"
          style={{ flex: 0.5 }}
        >
          <div className="flex flex-row flex-1 justify-between items-start px-2 pt-1">
            <HiOutlineSquares2X2 className="react-icon bg-gray-400 p-1 rounded-xl" />
            <Switch
              checked={enabled1}
              onChange={setEnabled1}
              className={`${
                enabled1 ? "bg-sky-500" : "bg-gray-500"
              } relative inline-flex h-4 w-6 items-center rounded-full`}
            >
              <span
                className={`${
                  enabled1 ? "translate-x-2" : "translate-x-0"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
          <div className="px-2 pb-1">
            <p className="text-left text-white" style={{ fontSize: 8 }}>
              Amazon Echo
            </p>
            <p className="text-left text-white" style={{ fontSize: 10 }}>
              Speaker
            </p>
          </div>
        </div>
        <div
          className="flex flex-col h-full mr-4  rounded-xl aaa3-3"
          style={{ flex: 0.5 }}
        >
          <div className="flex flex-row flex-1 justify-between items-start px-2 pt-1">
            <HiOutlineSquares2X2 className="react-icon bg-gray-400 p-1 rounded-xl" />
            <Switch
              checked={enabled2}
              onChange={setEnabled2}
              className={`${
                enabled2 ? "bg-sky-500" : "bg-gray-500"
              } relative inline-flex h-4 w-6 items-center rounded-full`}
            >
              <span
                className={`${
                  enabled2 ? "translate-x-2" : "translate-x-0"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
          <div className="px-2 pb-1">
            <p className="text-left text-white" style={{ fontSize: 8 }}>
              Bardi
            </p>
            <p className="text-left text-white" style={{ fontSize: 10 }}>
              Lampe
            </p>
          </div>
        </div>
        <div
          className="flex flex-col h-full  rounded-xl aaa3-4"
          style={{ flex: 0.5 }}
        >
          <div className="flex flex-row flex-1 justify-between items-start px-2 pt-1">
            <HiOutlineSquares2X2 className="react-icon bg-gray-400 p-1 rounded-xl" />
            <Switch
              checked={enabled3}
              onChange={setEnabled3}
              className={`${
                enabled3 ? "bg-sky-500" : "bg-gray-500"
              } relative inline-flex h-4 w-6 items-center rounded-full`}
            >
              <span
                className={`${
                  enabled3 ? "translate-x-2" : "translate-x-0"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
          <div className="px-2 pb-1">
            <p className="text-left text-white" style={{ fontSize: 8 }}>
              Samsung
            </p>
            <p className="text-left text-white" style={{ fontSize: 10 }}>
              Caméra
            </p>
          </div>
        </div>
      </div>
      <Bottombar />
    </div>
  );
};

export default Dashboard;
