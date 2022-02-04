import React from "react";


export default function ContactPanel() {
  return (
    <div className="loginPanel">
      <div className="contactPanelName">
        <input className="contactPanelInput"></input>
      </div>
      <div className="contactPanelEmail">
        <input className="contactPanelInput"></input>
      </div>
      <div className="contactPanelMessage">
        <input className="contactPanelInput"></input>
      </div>
      <button className="submitBtn"></button>
    </div>
  );
}