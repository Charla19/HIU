import React from "react";
import { CgLogOut, CgPerformance } from "react-icons/cg";
import { MdRoomPreferences, MdSpaceDashboard } from "react-icons/md";
import { PiDevicesLight } from "react-icons/pi";
import { SiGoogleanalytics } from "react-icons/si";

const Sidebar = ({ menuSidebar, setMenuSidebar }) => {
  return (
    <div className="sidebar">
      <MdSpaceDashboard
        className="react-icon p-1"
        style={{
          backgroundColor:
            menuSidebar === "dashboard" ? "rgba(255, 255, 255, 0.2)" : "",
        }}
        onClick={() => setMenuSidebar("dashboard")}
      />
      <SiGoogleanalytics
        className="react-icon p-1"
        style={{
          backgroundColor:
            menuSidebar === "analytics" ? "rgba(255, 255, 255, 0.2)" : "",
        }}
        onClick={() => setMenuSidebar("analytics")}
      />
      <PiDevicesLight
        className="react-icon p-1"
        style={{
          backgroundColor:
            menuSidebar === "device" ? "rgba(255, 255, 255, 0.2)" : "",
        }}
        onClick={() => setMenuSidebar("device")}
      />
      <CgPerformance
        className="react-icon p-1"
        style={{
          backgroundColor:
            menuSidebar === "performance" ? "rgba(255, 255, 255, 0.2)" : "",
        }}
        onClick={() => setMenuSidebar("performance")}
      />
      <MdRoomPreferences
        className="react-icon p-1"
        style={{
          backgroundColor:
            menuSidebar === "preference" ? "rgba(255, 255, 255, 0.2)" : "",
        }}
        onClick={() => setMenuSidebar("preference")}
      />
      <CgLogOut
        className="react-icon p-1"
        style={{
          backgroundColor:
            menuSidebar === "profil" ? "rgba(255, 255, 255, 0.2)" : "",
        }}
        onClick={() => {
          localStorage.removeItem("faceAuth");
          window.location.reload();
        }}
      />
    </div>
  );
};

export default Sidebar;
