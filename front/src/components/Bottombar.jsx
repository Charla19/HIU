import React, { useEffect, useState } from "react";
import "../pages/style.css";

const RoomNavigationBar = () => {
  // Initialiser avec les pièces par défaut
  const [rooms, setRooms] = useState([
    "Living Room",
    "Bedroom",
    "Kitchen",
    "Backyard",
    "Garage",
  ]);
  const [activeRoom, setActiveRoom] = useState("");

  // Ajouter une nouvelle pièce
  const addRoom = () => {
    const newRoomName = prompt("Enter the name of the new room:"); // Utiliser prompt pour entrer le nom de la nouvelle pièce
    if (newRoomName) {
      setRooms([...rooms, newRoomName]);
    }
  };

  // Changer la pièce active
  const changeActiveRoom = (roomName) => {
    setActiveRoom(roomName);
  };

  useEffect(() => {
    setActiveRoom(rooms[0]);
  }, []);

  return (
    <div className="navbar">
      {rooms.map((room, index) => (
        <div
          key={index}
          className={`nav-item ${activeRoom === room ? "active" : ""}`}
          onClick={() => changeActiveRoom(room)}
        >
          {room}
        </div>
      ))}
      <button className="nav-add-btn" onClick={addRoom}>
        +
      </button>
    </div>
  );
};

export default RoomNavigationBar;
