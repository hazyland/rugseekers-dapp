import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/rug-logo 2.png";
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import { useWeb3ProviderState } from "../contexts/Web3/Web3Provider";
import hamburger from "../assets/hamburger.png";
import { useAppProvider } from "../contexts/App/AppProvider";
import { ResponsiveImage } from "../lib/UI";

import twiter from "../assets/twiter.png";
import telegram from "../assets/telegram.png";
import facebook from "../assets/facebook.png";
import discord from "../assets/discord.png";

function Links() {


  return (
    <div className={""}>

    </div>
  );
}

function Footer() {


  function hamburgerMenu() {
    return <img src={hamburger} height="20" width="25"></img>;
  }

  return (
    <div className="footer" style={{ padding: "5px" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="quick-links" style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", marginTop: "5px" }}>
          <h4>Quick Links</h4>
          <div style={{display: "flex", fontSize:"12px"}}>
              <div style={{display: "flex",margin:"5px", flexDirection:"column"}}>
                <a>Whitepaper</a>
                <a>Roadmap</a>
                <a>Tokenomics</a>
                <a>Reflection</a>
              </div>
              <div style={{display: "flex",margin:"5px", flexDirection:"column"}}>
                <a>Vetted Projects</a>
                <a>Online Store</a>
                <a>How to Buy</a>
                <a>Buy Crypto</a>
              </div>
          </div>
        </div>

        <div>
          <h4>Contact Us</h4>
          <a style={{ color: "orange" }}>RugSeekers@gmail.com</a>
        </div>
        <div>
          <h4>Social Links</h4>
          {/* <div className={"socialWidget-container" + "-mobile"}> */}
            <div style={{display:"flex", justifyContent: "space-between"}}>
                <img src={twiter}></img>
                <img src={telegram}></img>
                <img src={discord}></img>
                <img src={facebook}></img>
              {/* <div className="social-icon-container"> */}
              {/* </div> */}



            </div>
          </div>
        {/* </div> */}
      </div>
      <p style={{ textAlign: "center" }}>Copyright Seek 2022 - All Rights Reserved</p>
    </div>
  );
}

export default Footer;
