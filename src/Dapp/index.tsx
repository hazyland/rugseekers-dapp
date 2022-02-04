import rugseekersLogo from "../assets/rug-logo-2.png";
import giftIcon from "../assets/gift.png";
import { ResponsiveImage } from "../lib/UI";
import './dapp.css'


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
            marginLeft: "1rem",
             justifySelf: "flex-start",
             display: "flex",
             alignItems: "center",
             justifyContent: "center"
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
                <h6>Rugseeker Token Stats</h6>
                <p>See how's our project doing.</p>
                <br />
                <div className="icons-container">
                    <div className="total-rewards-distributed">
                        <Section icon={giftIcon} title={"total rewards distributed"} value={"44 BNB"}/>
                    </div>
                    <div className="liquidity-unlock-timer"></div>
                    <div className="circulating-supply"></div>
                    <div className="burned-tokens"></div>
                    <div className="tokens-in-burn-vault"></div>
                    <div className="holders"></div>
                </div>
            </div>
            <div className="token-rewards">
                <h6>Rugseeker</h6>
                <p>See how's our project doing.</p>
                <br />
                <div className="seek-balance"></div>
                <div className="claimable-rewards"></div>
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
