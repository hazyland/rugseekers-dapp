import React from "react";

import twiter from '../assets/twiter.png'
import telegram from '../assets/telegram.png'
import facebook from '../assets/facebook.png'
import discord from '../assets/discord.png'

export default function Social() {
  return (
    <div className="socialWidget">
      <div className="social-icon-container">
        <img src={twiter}></img>
      </div>
      <div className="social-icon-container">
        <img src={telegram}></img>
      </div>
      <div className="social-icon-container">
        <img src={discord}></img>
      </div>
      <div className="social-icon-container">
        <img src={facebook}></img>
      </div>
    </div>
  );
}
