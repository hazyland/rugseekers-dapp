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
              <Link to="/landing">Home</Link>
            </li>
            <li>Whiteaper</li>
            <li>Roadmap</li>
            <li>Tokenomics</li>
            <li>Reflection</li>
            <li>VettedProjects</li>
            <li>Online Store</li>
            <li>How to Buy</li>
            <Link to="/">Main Website</Link>
            <Link to="/Dapp">Dapp</Link>
            <ConnectWalletButton />
          </ul>
        </div>
      </div>
    </div>
  );
}



