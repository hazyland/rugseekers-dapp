import rugseekersLogo from "../assets/rug-logo-2.png";
import giftIcon from "../assets/gift.png";
import fireIcon from "../assets/fire.png";
import burnFolderIcon from "../assets/burnFolder.png";
import timerIcon from "../assets/timer.png";
import membersIcon from "../assets/members.png";
import coinbagIcon from "../assets/coinBag.png";
import coinIcon from "../assets/coin.png";
import questionIcon from "../assets/question.png";
import Swal from "sweetalert2";
import { Divider, ResponsiveImage } from "../lib/UI";
import "./dapp.css";
import { useWeb3ProviderDispatch, useWeb3ProviderState } from "../contexts/Web3/Web3Provider";
import { useEffect } from "react";
import { ethers } from "ethers";
import Footer from '../Footer'


function Title(props: { title: string; desc: string }) {
    return (
        <>
            <h6
                style={{
                    color: "orange",
                    fontWeight: "bold",
                    textAlign: "left",
                    margin: "0",
                    marginBottom: "0px",
                    fontSize: "1.2rem",
                }}
            >
                {props.title}
            </h6>
            <p
                style={{
                    fontSize: "0.75rem",
                    margin: "0",
                    marginBottom: "4px",
                    color: "white",
                }}
            >
                {props.desc}
            </p>
        </>
    );
}
function Section(props: { icon: any; title?: string; value?: string }) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "25% 75%",
                gridTemplateRows: "100%",
                height: "100%",
                width: "100%",
                margin: "auto",
            }}
        >
            <div
                className="left"
                style={{
                    height: "100%",
                    width: "100%",
                }}
            >
                <ResponsiveImage src={props.icon} />
            </div>
            <div
                className="right"
                style={{
                    height: "100%",
                    //  width: "100%",
                    marginLeft: "0.6rem",
                    justifySelf: "flex-start",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                {props.title && (
                    <h5
                        style={{
                            margin: "0",
                            textAlign: "left",
                        }}
                    >
                        {props.title}
                    </h5>
                )}
                {props.value && (
                    <p
                        style={{
                            textAlign: "left",
                            margin: "0",
                        }}
                    >
                        {props.value}
                    </p>
                )}
            </div>
        </div>
    );
}
export default function Dapp() {
    const w3State = useWeb3ProviderState();
    const web3Dispatch = useWeb3ProviderDispatch();
    async function getUserData() {
        console.log("user balance");
        if (w3State.currentContract && w3State.currentWallet) {
            const balance = await w3State.currentContract.balanceOf(w3State.currentWallet);
            const rewards = await w3State.currentContract.rewardsOf(w3State.currentWallet);

            web3Dispatch({ type: "UPDATE_USER_TOKEN_BALANCE", payload: balance });
            web3Dispatch({ type: "UPDATE_USER_TOTAL_REWARDS", payload: rewards });
        }
    }
    useEffect(() => {
        getUserData();
        const interval = setInterval(() => {
            getUserData();
        }, 30000);
        return () => {
            clearInterval(interval);
        };
    }, [w3State.currentWallet, w3State.currentContract]);
    console.log("w3State", w3State);
    return (
      <div className="col-2 content-lane">
        <div className="dapp">
          <div className="top-banner">
            <div className="image">
              <ResponsiveImage src={rugseekersLogo} />
            </div>
            <div>
                <div className="rewards-Headder">
                     <h1 >Rugseekers Rewards Dapp</h1>

                </div>
              <p>We are a professional, diligent, and experienced team committed to helping eliminate fraud and corruption from the crypto space. The RugSeeker team was born out of our own experience with loss and is dedicated to rid investors of that very thing.</p>
            </div>
          </div>
          <div className="token-stats">
            <Title title="Rugseeker Token Stats" desc=" See how's our project doing." />
            <Divider />
            <div className="icons-container">
              <div className="total-rewards-distributed">
                <Section icon={giftIcon} title={"total rewards distributed"} value={`${w3State.totalRewards} BNB`} />
              </div>
              <div className="liquidity-unlock-timer">
                <Section title="liquidity unlock timer" value={`${w3State.timeLeftHours}D ${w3State.timeLeftHours}HR ${w3State.timeLeftSeconds}M`} icon={timerIcon} />
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
          <div className="section-3">
            <div className="token-rewards">
              <Title title="Claim Token Rewards" desc=" get your tokens rewards as BNB. $Seek or any BEP20 token." />
              <Divider />
              <div className="balance-container">
                <div className="seek-balance">
                  <Section icon={rugseekersLogo} title="$Seek Balance" value={w3State.userTokenBalance.toString()} />
                </div>
                <div className="claimable-rewards">
                  <Section icon={coinIcon} title="Claimable Rewards" value={w3State.userTotalRewards.toString()} />
                </div>
              </div>
              <Divider />

              <div
                className="claimable-rewards-2"
                style={{
                  height: "80px",
                }}
              >
                <Section
                  icon={questionIcon}
                  title="Select one option below in which form would you like to receive your
                        rewards. Click the (?) for more detailed info"
                  value=""
                />
              </div>
              <div
                className="claim-rewards-as"
                onClick={async () => {
                  const { value: token } = await Swal.fire({
                    title: "Input token address",
                    input: "text",
                    inputLabel: "Address needs to be a valid BEP-20 token.",
                    inputPlaceholder: "Enter token address",
                    showCancelButton: true,
                    inputValidator: (val) => {
                      const rex = new RegExp(/^0x[a-fA-F0-9]{40}$/);
                      if (!rex.test(val)) {
                        return "Not A BSC Address";
                      }
                      return null;
                    },
                  });
                  console.log(token);
                  if (token) {
                    try {
                      if (w3State.currentWallet) {
                        const p = new ethers.providers.Web3Provider(w3State.walletProvider);
                        const signer = p.getSigner();
                        console.log(signer);
                        const contractSigner = await w3State.currentContract.connect(signer);
                        console.log(contractSigner);
                        const res = await contractSigner.claimAnyToken(token);
                        console.log(res);
                        getUserData();
                      }
                    } catch (e) {
                      console.log(e);
                    }
                  }
                }}
              >
                Claim Rewards As
              </div>
              <div className="claim-rewards" 
                            onClick={async () => {
                                try {
                                  if (w3State.currentWallet) {
                                    const p = new ethers.providers.Web3Provider(
                                      w3State.walletProvider
                                    );
                                    const signer = p.getSigner();
                                    console.log(signer);
                                    const contractSigner =
                                      await w3State.currentContract.connect(signer);
                                    console.log(contractSigner);
                                    const res = await contractSigner.claimBNB();
                                    console.log(res);
                                    getUserData()
                                  }
                                } catch (e) {
                                  console.log(e);
                                }}}
              >Claim Rewards</div>
            </div>
            <div className="promotional-token">
              <Title title="Promotional Token" desc="Check out our latest promo token. " />

              <Divider />
              <div className="promo-token-1">
                <Section icon={rugseekersLogo} title={"Eagle Eye Token"} />
              </div>
            </div>
          </div>
          <Footer/>

        </div>
      </div>
    );
}
