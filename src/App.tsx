import React from "react";
import "./App.css";
import { BrowserRouter as BrowserRouterProvider, Route, Routes } from "react-router-dom";
import Dapp from "./Dapp";
import Landing from "./Landing";
import Web3Provider from "./contexts/Web3/Web3Provider";
function App() {
    return (
        <BrowserRouterProvider>
            <Routes>
              <Web3Provider>
                <Route path="/dapp" element={<Dapp />} />
              </Web3Provider>
                <Route path="/" element={<Landing />} />
            </Routes>
        </BrowserRouterProvider>
    );
}

export default App;
