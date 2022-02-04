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

  // const windowDimensions = useWindowDimensions()
  // console.log(AppState.appDimensions.innerWidth)

    return (
      // <AppProvider>
      <div className={AppState.appDimensions.innerWidth <= 500 ? "app-mobile" : "app"}>
        <BrowserRouterProvider>
          <div className="column-2">
            <Web3Provider>
            <Navigation></Navigation>
              <Routes>
                <Route path="/dapp" element={<Dapp />} />
                <Route path="/landing" element={<Landing />} />
              </Routes>
            </Web3Provider>
          </div>
        </BrowserRouterProvider>
      </div>
      // </AppProvider>
    );
}

export default App;
