export default function Dapp() {
    return (
        <div className="dapp">
            <div className="token-stats">
                <h6>Rugseeker</h6>
                <p>See how's our project doing.</p>
                <br />
                <div className="icons-container">
                    <div className="total-rewards-distributed"></div>
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
