import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";
import "../pages/style.css"; // Assurez-vous que le chemin vers votre fichier CSS est correct

function Home() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const [menuSidebar, setMenuSidebar] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("faceAuth")) {
      navigate("/login");
    }

    const { account } = JSON.parse(localStorage.getItem("faceAuth"));
    setAccount(account);
  }, []);

  if (!account) {
    return null;
  }

  return (
    <div className="body">
      <Sidebar menuSidebar={menuSidebar} setMenuSidebar={setMenuSidebar} />
      <div>
        <Dashboard menuSidebar={menuSidebar} />
      </div>
      {/* <Bottombar/> */}
    </div>
  );
}

export default Home;
