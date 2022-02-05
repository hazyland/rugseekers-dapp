import ContactPanel from './contactPanel';
import ProjectCards from './projectCard';
import RoadmapCards from './roadmapCard';
import TokenomicsPanel from './tokenomicsPanel';
import KeyPointsSlide from './keyPointsSlide';
import Social from './social'
import {ReactComponent as BloombergLogo} from "../assets/bloomberg-logo.svg"
import msnIcon from "../assets/msn.png"
import logo from '../assets/rug-logo 2.png'
import { useAppProvider } from '../contexts/App/AppProvider';



import bountyIMG from '../assets/pirate.png'
import { ResponsiveImage } from '../lib/UI';


function Landing() {
    const AppState = useAppProvider()

    return (
      <div className="landing">
        <div className={AppState.appDimensions.innerWidth <= 500 ? "landingRow-1-mobile dark-gray-background" : "landingRow-1 dark-gray-background"}>
          <div className={"who-is " + (AppState.appDimensions.innerWidth <= 500 ? "row-2" : "col-2")}>
            <div>
              <h3>Worlds first project to pay a "bounty" for tips the lead to stopping corruption.</h3>
              <div className="landing-header-1">Who are RugSeekers?</div>
              <div>We are a professional, diligent, and experienced team committed to helping eliminate fraud and corruption from the crypto space. The RugSeeker team was born out of our own experience with loss and is dedicated to rid investors of that very thing.</div>
            </div>
          </div>
          <Social />
          <div></div>
        </div>
        <div id="grad1">
          <img src={logo} height="200" width="200"></img>
        </div>
        <KeyPointsSlide />

        <div className="dark-gray-background card lane-padding">
          <div className="landingRow3">
            <div className="landing-header-1">RugSeekers has been featured in</div>
            <div className="featuredIcons">
              <div>
                <BloombergLogo />
                {/* <img src={bountyIMG} height="100" width="100"></img> */}
              </div>
              <div>
                <ResponsiveImage src={msnIcon} />
              </div>
              <div>
                <img src={bountyIMG} height="100" width="100"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="gray-background">
          <div className="landingRow4">
            <div>
              <img src={bountyIMG} height="100" width="100"></img>
              <div className="landing-header-1">Yar Bounty Program</div>
              <div className="textBlob">Please list the contract address and name of the project below that you would like Rugsekers to investigate.Your personla information is kept completely and 100% secured with in our system. You can also use the form below to submit feedback or suggestions on how we can improve the project. Thank you. Fight the good fight and lets #stopinsanity</div>
            </div>
            <div className="contactPanelContainer">
              <ContactPanel />
            </div>
          </div>
        </div>
        <div className="dark-gray-background card lane-padding">
            <div className="landing-header-1">Tokenomics</div>
          <div className="landingRow4">
            <TokenomicsPanel />
          </div>
        </div>
        <div className="card gray-background lane-padding">
          <div className="landing-header-1 ">Vetted Projects</div>
          <ProjectCards />
        </div>
        <RoadmapCards />
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

export default Landing