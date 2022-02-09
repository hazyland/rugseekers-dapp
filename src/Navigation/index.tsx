import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/rug-logo 2.png";
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import { useWeb3ProviderState } from "../contexts/Web3/Web3Provider";
import hamburger from "../assets/hamburger.png";
import { useAppProvider } from "../contexts/App/AppProvider";
import { ResponsiveImage } from "../lib/UI";

function Links(props: { slide: boolean }) {
    const className = props.slide ? " slide" : "";
    return (
        <div className={"nav-links" + className}>
            <Link to="/">Home</Link>
            <a>Whiteaper</a>
            <a href="/#roadmap">Roadmap</a>
            <a href="/#tokenomics">Tokenomics</a>
            <a href="/#bounty">Bounty</a>
            <a href="/#vetted">VettedProjects</a>
            {/* <a href="#">Online Store</a> */}
            {/* <a>How to Buy</a> */}
            <Link to="/Dapp">Dapp</Link>
            <a>
            <ConnectWalletButton />
            </a>
        </div>
    );
}

function Navigation() {
    const web3State = useWeb3ProviderState();
    const [slidingPanelOn, togglePanel] = useState(false);

    const slideClass = !slidingPanelOn ? " slide-visible" : "";
    const appState = useAppProvider();

    function hamburgerMenu() {
        return <img src={hamburger} height="20" width="25"></img>;
    }

    return (
        <nav>
            <div className="logo-container">
                <div style={{
                  height: "65px",
                  width: "65px",
                  minHeight: "65px",
                  minWidth: "65px"
                }}>

                <ResponsiveImage src={logo}/>
                </div>
                <h4>RUG SEEKERS</h4>
            </div>
            
            <Links slide={false} />
            <div
                className="hamburger-yum"
                onClick={() => {
                    togglePanel(!slidingPanelOn);
                }}
            >
                {hamburgerMenu()}
            </div>
            <div className={"sliding-panel" + slideClass}>
                <Links slide={true} />
            </div>

        </nav>
    );
}

export default Navigation;
