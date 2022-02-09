import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/rug-logo 2.png";
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import { useWeb3ProviderState } from "../contexts/Web3/Web3Provider";
import hamburger from "../assets/hamburger.png";
import { useAppProvider } from "../contexts/App/AppProvider";
import { ResponsiveImage } from "../lib/UI";

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
    <div className="footer" style={{ padding: "5px", }}>
        <div style={{display:"flex", justifyContent:"space-around"}}>

      <div className="quick-links" style={{ display: "flex",flexDirection:"column", justifyContent: "space-around", marginTop: "5px" }}>
        <h4>Quick Links</h4>
        <a>Whitepaper</a>
        <a>Roadmap</a>
        <a>Tokenomics</a>
        <a>Reflection</a>
        <a>Vetted Projects</a>
        <a>Online Store</a>
        <a>How to Buy</a>
        <a>Buy Crypto</a>
      </div>

      <div>
        <h4>Contact Us</h4>
        <a style={{color:"orange"}}>RugSeekers@gmail.com</a>
      </div>
      <div>
        <h4>Social Links</h4>
      </div>
        </div>
      <p>Copyright Rugseekers 2022 - All Rights Reserved</p>
    </div>
  );
}

export default Footer;
