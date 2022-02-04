import rugseekersLogo from "../assets/rug-logo-2.png";
import giftIcon from "../assets/gift.png";
import fireIcon from "../assets/fire.png";
import burnFolderIcon from "../assets/burnFolder.png";
import timerIcon from "../assets/timer.png";
import membersIcon from "../assets/members.png";
import coinbagIcon from "../assets/coinBag.png";
import { ResponsiveImage } from "../lib/UI";
import './dapp.css'
import { useWeb3ProviderDispatch, useWeb3ProviderState } from "../contexts/Web3/Web3Provider";
import { useEffect } from "react";


function Section(props: {icon: any, title: string, value: string}) {
    return <div style={{
        display: 'grid',
        gridTemplateColumns: "25% 75%",
        gridTemplateRows: "100%",
        height: "100%",
        width: "100%",
        margin: "auto",
    }}>
        <div className="left" style={{
            height: "100%",
            width: "100%",
        }}>
            <ResponsiveImage src={props.icon}/>
        </div>
        <div className="right" style={{
             height: "100%",
            //  width: "100%",
            marginLeft: "0.5rem",
             justifySelf: "flex-start",
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
             flexDirection: "column",
             
        }}>
            <h5 style={{
                margin: "0",
            }}>{props.title}</h5>
            <p style={{
                margin: "0",
            }}>{props.value}</p>
        </div>
    </div>
}
export default function Dapp() {
    const w3State = useWeb3ProviderState();
    const web3Dispatch = useWeb3ProviderDispatch();
    async function getUserData() {
        console.log("user balance");
        if (w3State.currentContract && w3State.currentWallet) {
          const balance = await w3State.currentContract.balanceOf(
            w3State.currentWallet
          );
          const rewards = await w3State.currentContract.rewardsOf(
            w3State.currentWallet
          );
          const nextSell = await w3State.currentContract.nextSellOf(
            w3State.currentWallet
          );
    
          web3Dispatch({ type: "UPDATE_USER_TOKEN_BALANCE", payload: balance });
          web3Dispatch({ type: "UPDATE_USER_TOTAL_REWARDS", payload: rewards });
        }
      }
      useEffect(() => {
        getUserData();
        const interval = setInterval(() => {
            getUserData()
        }, 30000)
        return () => {
            clearInterval(interval);
        }
      }, [w3State.currentWallet, w3State.currentContract]);
    console.log('w3State',w3State,);
    return (
        <div className="dapp">
            <div className="top-banner">
                <div className="image">
                    <ResponsiveImage src={rugseekersLogo} />
                </div>
                <div>
                    <h2>Rugseekers Rewards Dapp</h2>
                    <p>We are a professional, diligent, and experienced </p>
                </div>
            </div>
            <div className="token-stats">
                <h6 >Rugseeker Token Stats</h6>
                <p>See how's our project doing.</p>
                <br />
                <div className="icons-container">
                    <div className="total-rewards-distributed">
                        <Section icon={giftIcon} title={"total rewards distributed"} value={`${w3State.totalRewards} BNB`}/>
                    </div>
                    <div className="liquidity-unlock-timer">
                        <Section title="liquidity unlock timer" value={`${w3State.timeLeftHours}D ${w3State.timeLeftHours}HR ${w3State.timeLeftSeconds}M` }icon={timerIcon}/>
                    </div>
                    <div className="circulating-supply">
                        <Section icon={coinbagIcon} title="circulating supply" value={w3State.totalSupply.toString()} />

                    </div>
                    <div className="burned-tokens">
                    <Section icon={fireIcon} title="burned tokens" value={w3State.tokensBurned.toString()} />

                    </div>
                    <div className="tokens-in-burn-vault">
                    <Section icon={burnFolderIcon} title="tokens in burn vault" value={w3State.tokensToBurn.toString()} />

                    </div>
                    <div className="holders">
                    <Section icon={membersIcon} title="holders" value="443" />

                    </div>
                </div>
            </div>
            <div className="token-rewards">
                <h6>Rugseeker</h6>
                <p>get your tokens rewards as BNB. $Seek or any BEP20 token.</p>
                <br />
                <div className="balance-container">
                <div className="seek-balance">
                    <h6>$Seek Balance</h6>
                    <p>134534</p>
                </div>
                <div className="claimable-rewards">
                    <h6>Claimable Rewards</h6>
                    <p>134534</p>
                </div>
                </div>
                <br />
                <div className="claimable-rewards">
                    Select one option below in which form would you like to receive your rewards.
                    Click the (?) for more detailed info
                    <select>
                        <option>Claim Rewards As</option>
                    </select>
                    <button>Claim Rewards</button>
                </div>
            </div>
            <div className="promotional-token">
                <h6>Promotional Token</h6>
                <p>Check out our latest promo token. </p>
                <br />
                <div className="">
                    <img />
                    <div>
                        <h5>Eagle Eye Token</h5>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="quick-links">
                    <a>Whitepaper</a>
                    <a>Roadmap</a>
                    <a>Tokenomics</a>
                    <a>Reflection</a>
                    <a>Vetted Projects</a>
                    <a>Online Store</a>
                    <a>How to Buy</a>
                    <a>Buy Crypto</a>
                </div>

                <div>
                    <h4>Contact Us</h4>
                    <a>RugSeekers@gmail.com</a>
                    <p>Copyright Rugseekers 2022 - All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}
