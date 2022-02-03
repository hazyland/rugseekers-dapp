import React from "react";
// import "./App.css";
import { BrowserRouter as BrowserRouterProvider, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'
import logo from '../assets/rug-logo 2.png'

function Landing() {
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} height="80"width="80"></img>
        <h4>RUG SEEKERS</h4>

      </div>
      <ul className="nav-links">
        <li>
          <Link to='/landing'>

          Home
          </Link>
          </li>
        <li>Whiteaper</li>
        <li>Roadmap</li>
        <li>Tokenomics</li>
        <li>Reflection</li>
        <li>VettedProjects</li>
        <li>Online Store</li>
        <li>How to Buy</li>
        <Link to='/' >
          Main Website
        </Link>
        <Link to='/Dapp' >
          Dapp
        </Link>
      </ul>
    </nav>
  );
}

export default Landing;
