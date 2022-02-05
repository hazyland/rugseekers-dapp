import React from "react";


export default function ContactPanel() {
  return (
    <div className="contactPanel">
      <div className="contactPanelName">
        <input className="contactPanelInput" placeholder="Name"></input>
      </div>
      <div className="contactPanelEmail">
        <input className="contactPanelInput" placeholder="Email (required)"></input>
      </div>
      <div className="contactPanelMessage">
        <input className="contactPanelInput" placeholder="Message"></input>
      </div>
      <button className="submitBtn">Submit</button>
    </div>
  );
}