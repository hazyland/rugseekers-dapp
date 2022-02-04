import React from "react";
import "./App.css";
import { BrowserRouter as BrowserRouterProvider, Route, Routes } from "react-router-dom";
import Dapp from "./Dapp";
// import Landing from "./Landing";
import Landing from "./Landing";
import Navigation from "./Navigation"

import Web3Provider from "./contexts/Web3/Web3Provider";

import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}


function App() {

  
  const windowDimensions = useWindowDimensions()


    return (
      <div className={windowDimensions.width <=500 ? "app-mobile" : "app"}>
       {console.log(useWindowDimensions())}
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
