import React from 'react';
import '../pages/sidebar.css';
import { MdSpaceDashboard } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { PiDevicesLight } from "react-icons/pi";
import { CgPerformance } from "react-icons/cg";
import { MdRoomPreferences } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <MdSpaceDashboard className="react-icon" />
      <SiGoogleanalytics className="react-icon" />
      <PiDevicesLight className="react-icon" />
      <CgPerformance className="react-icon" />
      <MdRoomPreferences className="react-icon" />
      <RxAvatar className="react-icon" />
    </div>
  );
};

export default Sidebar;
