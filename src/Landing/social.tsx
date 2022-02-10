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
          <a href="https://www.twitter.com/@SEEK_Token2/">
            <img src={twiter}></img>
          </a>
        </div>
        <div className="social-icon-container">
          <a href="https://t.me/SEEK_Token">
            <img src={telegram}></img>
          </a>
        </div>
        <div className="social-icon-container">
          <a href="https://discord.gg/FEWgsgHZ">
            <img src={discord}></img>
          </a>
        </div>
        <div className="social-icon-container">
          <a href="https://www.facebook.com/groups/1242036486300481">
            <img src={facebook}></img>
          </a>
        </div>
      </div>
    </div>
  );
}
