import React from "react";
// import "./App.css";
import { BrowserRouter as BrowserRouterProvider, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <li>Whiteaper</li>
        <li>Roadmap</li>
        <li>Tokenomics</li>
        <li>Reflection</li>
        <li>VettedProjects</li>
        <li>Online Store</li>
        <li>How to Buy</li>
        {/* <Link to='/Dapp'> */}
        <li>Dapp</li>
        {/* </Link> */}
      </ul>
    </nav>
  );
}

export default Landing;
