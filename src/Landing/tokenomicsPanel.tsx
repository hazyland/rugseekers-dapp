import React from "react";
import { BrowserRouter as BrowserRouterProvider, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/rug-logo 2.png";
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import { useWeb3ProviderState } from "../contexts/Web3/Web3Provider";


export default function TokenomicsPanel() {
  return (
    <div className="tokenomicsPanel">
      <div>
        <div>
          <ul className="nav-links">
            <li>
              Token Supply
            </li>
            <li>Taxes</li>
            <li>Reflections</li>
            <li>Team Wallets</li>
            <li>Lock Profile</li>
          </ul>
        </div>
      </div>
    </div>
  );
}



