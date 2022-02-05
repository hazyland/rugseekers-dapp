import React, { useEffect, useState } from "react";
import { BrowserRouter as BrowserRouterProvider, Route, Routes } from "react-router-dom";
// import { link } from "react-router-dom";
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

    {/* <div>
        <ul className="nav-divnks">
          <div onCdivck={()=> {setTabName("tokenSupply")}}>Token Supply</div>
          <div onCdivck={()=> {setTabName("taxes")}}>Taxes</div>
          <div onCdivck={()=> {setTabName("reflections")}}>Reflections</div>
          <div onCdivck={()=> {setTabName("teamWallets")}}>Team Wallets</div>
          <div onCdivck={()=> {setTabName("lockProfile")}}>Lock Profile</div>
        </ul>
      </div>
      <div className="tokenomicsPanelTabContent">
          <div>
              {tab()}
          </div>
      </div> */}

  return (
    <div className="tokenomicsPanel">
    {/* <div className="phase-box"> */}
        {/* <h3>High Level Tokenomics</h3> */}
        <div className="tokenomics-List">
          <div>
            <h4>Primary</h4>
          </div>
          <div>8% Buy Tax</div>
          <div>12% Sell Tax</div>
            <div>
                <h4>Secondary applies to each buy/sell</h4>
                <div>20% to Marketing</div>
                <div>20% to LP</div>
                <div>20% to Operations</div>
                <div>20% to Rewards</div>
                <div>20% to Bounty</div>
            </div>
        </div>
    </div>
    // </div>
  );
}

      

