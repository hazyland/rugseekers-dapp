import React from "react";

import twiter from '../assets/twiter.png'
import telegram from '../assets/telegram.png'
import facebook from '../assets/facebook.png'
import discord from '../assets/discord.png'

import { useAppProvider } from "../contexts/App/AppProvider";

export default function Social() {

const AppState = useAppProvider();

  return (
    <div className={"socialWidget-container" + (AppState.appDimensions.innerWidth <= 500 ? "-mobile" : "")}>

    <div className={AppState.appDimensions.innerWidth <= 500 ? "socialWidget-mobile" : "socialWidget"}>
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
    </div>
  );
}
