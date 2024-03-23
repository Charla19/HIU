import React from 'react';
 // This imports the CSS file we'll create

function Statut() {
  return (
    <div className="statut">
      <div className="card-header">
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="toggle">
          <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
        </div>
      </div>
      <div className="card-body">
        <div className="title">Gaabor</div>
        <div className="subtitle">Humidifier</div>
      </div>
    </div>
  );
}

export default Statut;


