import React, { useEffect, useState } from "react";
import { BrowserRouter as BrowserRouterProvider, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/rug-logo 2.png";
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import { useWeb3ProviderState } from "../contexts/Web3/Web3Provider";
import pie from '../assets/pie.png'


export default function TokenomicsPanel() {

    const [tabName,setTabName] = useState("tokenSupply")

    useEffect(() => {

    }, [tabName]);


    function tab() {
        switch (tabName) {
            case "tokenSupply" :
            return <div>TokenSupply</div>
            case "taxes" :
            return <div>Taxes</div>
            case "reflections" :
            return <div>Reflections</div>
            case "teamWallets" :
            return <div>Team Wallest</div>
            case "lockProfile" :
            return <div>Lock Profile</div>
            case "Token" :
            return <div>TokenSupply</div>
        }
    }


  return (
    <div className="tokenomicsPanel">
      <div>
        <div>
          <ul className="nav-links">
            <li onClick={()=> {setTabName("tokenSupply")}}>Token Supply</li>
            <li onClick={()=> {setTabName("taxes")}}>Taxes</li>
            <li onClick={()=> {setTabName("reflections")}}>Reflections</li>
            <li onClick={()=> {setTabName("teamWallets")}}>Team Wallets</li>
            <li onClick={()=> {setTabName("lockProfile")}}>Lock Profile</li>
          </ul>
        </div>
        <div className="tokenomicsPanelTabContent">
            <div>
                {tab()}
            </div>

        </div>
      </div>
    </div>
  );
}



