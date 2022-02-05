import React from "react";
import { BrowserRouter as BrowserRouterProvider, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'
import logo from '../assets/rug-logo 2.png'
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import { useWeb3ProviderState } from "../contexts/Web3/Web3Provider";
import hamburger from '../assets/hamburger.png'
import { useAppProvider } from "../contexts/App/AppProvider";

function Navigation() {
  const web3State = useWeb3ProviderState();
  const appState = useAppProvider()

  function hamburgerMenu(){
    return <img src={hamburger} height="20" width="25"></img>
  }



  return (
    <nav>
      <div className="logo-container">
        <img src={logo} height="80" width="80"></img>
        <h4>RUG SEEKERS</h4>
      </div>
      {appState.appDimensions.innerWidth <=650 ?
      hamburgerMenu() :
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
      }
    </nav>
  );
}

export default Navigation;
