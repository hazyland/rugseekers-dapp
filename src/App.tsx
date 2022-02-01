import React from "react";
import "./App.css";
import { BrowserRouter as BrowserRouterProvider, Route, Routes } from "react-router-dom";
import Dapp from "./Dapp";
import Landing from "./Landing";
function App() {
    return (
        <BrowserRouterProvider>
            <Routes>
                <Route path="/dapp" element={<Dapp />} />
                <Route path="/" element={<Landing />} />
            </Routes>
        </BrowserRouterProvider>
    );
}

export default App;
