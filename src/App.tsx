import React from "react";
import "./App.css";
import { BrowserRouter as BrowserRouterProvider, Route, Routes } from "react-router-dom";
import Dapp from "./Dapp";
// import Landing from "./Landing";
import Landing from "./Landing";
import Navigation from "./Navigation"

import Web3Provider from "./contexts/Web3/Web3Provider";



function App() {
    return (
      <div className="app">
        <BrowserRouterProvider>
          <div className="column-2">

          <Navigation></Navigation>
              <Web3Provider>
                <Routes>
                    <Route path="/dapp" element={<Dapp />} />
                    <Route path="/landing" element={<Landing />} />
                </Routes>
              </Web3Provider>
          </div>
        </BrowserRouterProvider>
      </div>
    );
}

export default App;
