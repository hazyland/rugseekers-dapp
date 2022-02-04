import React from "react";
import "./App.css";
import { BrowserRouter as BrowserRouterProvider, Route, Routes } from "react-router-dom";
import { useAppProviderDispatch, useAppProvider } from "./contexts/App/AppProvider";

import Dapp from "./Dapp";
import Landing from "./Landing";
import Navigation from "./Navigation"

import Web3Provider from "./contexts/Web3/Web3Provider";
import AppProvider from "./contexts/App/AppProvider"


import { useState, useEffect } from "react";

  



function App() {
  const AppState = useAppProvider()
  const AppDispatch = useAppProviderDispatch()

  function useWindowDimensions() {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        innerWidth:width,
        innerHeight:height,
      };
    }
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

  let windowDimensions = useWindowDimensions()
  

  AppDispatch({ type: "updateDimensions", payload: windowDimensions});
  
  return (
    <div className={AppState.appDimensions.innerWidth <= 500 ? "app-mobile" : "app"}>
      <BrowserRouterProvider>
        <div className="col-2">
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
