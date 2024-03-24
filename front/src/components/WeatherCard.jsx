import React from "react";
// import './WeatherCard.css'; // Assurez-vous d'avoir un fichier CSS correspondant

const WeatherCard = () => {
  return (
    <div className="card">
      <div className="container">
        <div className="cloud front">
          <span className="left-front"></span>
          <span className="right-front"></span>
        </div>
        <span className="sun sunshine"></span>
        <span className="sun"></span>
        <div className="cloud back">
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
      </div>

      <div className="card-header">
        <span>
          Antananarivo
          <br />
          Madagascar
        </span>
        <span>Mars 13</span>
      </div>

      <span className="temp">23°</span>
    </div>
  );
};

export default WeatherCard;
