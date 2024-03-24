// Dashboard.js
import { Switch } from "@headlessui/react";
import React, { useRef, useState } from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

import "../pages/style.css";
import Bottombar from "./Bottombar";

//images
import bg from "../assets/images/bg.jpg";

const Dashboard = ({ menuSidebar }) => {
  const [enabled, setEnabled] = useState(false);
  const [enabled1, setEnabled1] = useState(true);
  const [enabled2, setEnabled2] = useState(false);
  const [enabled3, setEnabled3] = useState(true);

  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);

  const startDrag = (e) => {
    // Prevent default behavior
    e.preventDefault();

    // Add mouse move and mouse up listeners to the window
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDrag);
  };

  const onMouseMove = (e) => {
    if (!containerRef.current) return;

    // Calculate the width of the white bar based on the mouse position
    const containerRect = containerRef.current.getBoundingClientRect();
    const newWidth = e.clientX - containerRect.left;

    // Update the width state, but don't go outside the bounds of the container
    setWidth(Math.max(0, Math.min(newWidth, containerRect.width)));
  };

  const stopDrag = () => {
    // Remove the event listeners when the mouse is released
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", stopDrag);
  };

  const data = [
    { month: "Jan", consumption: 50 },
    { month: "Feb", consumption: 100 },
    { month: "Mar", consumption: 169 }, // Highlighted bar
    { month: "Apr", consumption: 80 },
    { month: "May", consumption: 60 },
    { month: "Jun", consumption: 40 },
  ];

  const maxValue = Math.max(...data.map((item) => item.consumption));

  return menuSidebar === "dashboard" ? (
    <div className="dashboard all-board">
      {/** 1 er niveau */}
      <div
        className="flex flex-row justify-between aaa aaa1"
        style={{ flex: 0.5 }}
      >
        <div
          className="flex flex-row justify-between items-center  h-full  rounded-xl aaa1-2"
          style={{ flex: 0.58 }}
        >
          <div>
            <img
              src={bg}
              alt="Description"
              style={{
                width: 130,
                height: 120,
                resizeMode: "cover",
              }}
            />
          </div>

          <div className="flex flex-1 flex-col">
            <div className="flex flex-row flex-1 justify-between  px-2">
              <div className="flex flex-col">
                <p style={{ fontSize: 8 }} className="text-gray-300">
                  Device
                </p>
                <p style={{ fontSize: 10 }} className="text-gray-300">
                  Lampe LED
                </p>
              </div>
              <HiOutlineSquares2X2 className="react-icon bg-gray-400 p-1 rounded-xl" />
            </div>

            <div
              className="flex flex-row flex-1 justify-between px-4 mx-2 rounded-md py-2  h-14"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <div>
                <p className="text-white">4H 02M</p>
                <p className="text-white" style={{ fontSize: 6 }}>
                  Temps d'usage
                </p>
              </div>
              <div>
                <p className="text-white">10 W</p>
                <p className="text-white" style={{ fontSize: 6 }}>
                  Consommation
                </p>
              </div>
            </div>

            <div className="mt-2">
              <div
                ref={containerRef}
                className="bg-gray-300 h-4 w-52 rounded-lg mx-2 relative"
                onMouseDown={startDrag} // Start the drag on mouse down
              >
                <div
                  className="bg-white h-4 rounded-lg absolute"
                  style={{ width: width < 210 ? `${width}px` : "210px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col h-full rounded-xl aaa1-1"
          style={{ flex: 0.4 }}
        >
          <div className="p-1 max-w-sm mx-auto bg-transparent rounded-lg shadow-md">
            <h2 className="text-xs font-semibold text-white">
              Power Consumption (kWh)
            </h2>
            <div className="space-y-2">
              {data.map((item, index) => (
                <div key={index} className="flex items-end">
                  <span className=" w-8 text-white" style={{ fontSize: 8 }}>
                    {item.month}
                  </span>
                  <div
                    className="h-2 bg-gray-400 flex-1 mx-2 rounded"
                    style={{
                      // Calculate width as a percentage
                      width: `${(item.consumption / maxValue) * 100}%`,
                      // Highlight the March bar
                      backgroundColor:
                        item.month === "Mar" ? "#0EA5E9" : undefined,
                    }}
                  >
                    {item.month === "Mar" && (
                      <span
                        className="text-white"
                        style={{ fontSize: 8 }}
                      >{`${item.consumption} kWh`}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
          className="flex flex-col h-full justify-center mx-2 rounded-xl aaa2-2"
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
              Doors
            </p>
            <p className="text-left text-white" style={{ fontSize: 10 }}>
              Portes
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
              Light
            </p>
            <p className="text-left text-white" style={{ fontSize: 10 }}>
              Lumière
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
              Power
            </p>
            <p className="text-left text-white" style={{ fontSize: 10 }}>
              Power
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
  ) : menuSidebar === "analytics" ? (
    <div className="dashboard all-board">
      <Bottombar />
    </div>
  ) : menuSidebar === "device" ? (
    <div className="dashboard all-board">
      <Bottombar />
    </div>
  ) : menuSidebar === "performance" ? (
    <div className="dashboard all-board">
      <Bottombar />
    </div>
  ) : menuSidebar === "preference" ? (
    <div className="dashboard all-board">
      <Bottombar />
    </div>
  ) : (
    <div className="dashboard all-board">
      <Bottombar />
    </div>
  );
};

export default Dashboard;
