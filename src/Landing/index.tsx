import ContactPanel from './contactPanel';
import ProjectCards from './projectCard';
import RoadmapCards from './roadmapCard';
import TokenomicsPanel from './tokenomicsPanel';
import KeyPointsSlide from './keyPointsSlide';
import Social from './social'
// import {ReactComponent as BloombergLogo} from "../assets/bloomberg-logo.svg"
import msnIcon from "../assets/msn.png"
import logo from '../assets/rug-logo 2.png'
import mi from '../assets/market-insider.jpg'
import { useAppProvider } from '../contexts/App/AppProvider';
import Footer from '../Footer'



import bountyIMG from '../assets/pirate.png'
import { ResponsiveImage } from '../lib/UI';


function Landing() {
    const AppState = useAppProvider()

    return (
      <div className="landing dark-gray-background">
        <div className={AppState.appDimensions.innerWidth <= 500 ? "landingRow-1-mobile dark-gray-background" : "landingRow-1 dark-gray-background"}>
          <div className={"who-is " + (AppState.appDimensions.innerWidth <= 500 ? "row-2" : "col-2")}>
            <div>
              <h3>Worlds first project to pay a "bounty" for tips the lead to stopping corruption.</h3>
              <div className="landing-header-1">Who is Seek?</div>
              <div>We are a professional, diligent, and experienced team committed to helping eliminate fraud and corruption from the crypto space. The SEEK team was born out of our own experience with loss and is dedicated to rid investors of that very thing.</div>
            </div>
          </div>
          <Social />
        </div>
        <div id="grad1">
          <img src={logo} height="200" width="200"></img>
        </div>
        <KeyPointsSlide />
        <div className="dark-gray-background card lane-padding">
          <div className="landingRow3">
            <div className="landing-header-1">SEEK has been featured in</div>
            <div className="featuredIcons">
              <div>
                <ResponsiveImage src={"/images/bloomberg.png"} />
              </div>
              <div>
                <ResponsiveImage src={msnIcon} />
              </div>
              <div>
                <ResponsiveImage src={mi} />
              </div>
            </div>
          </div>
        </div>
        <div className="gray-background">
          <div className="landingRow4">
            <div>
              <img src={bountyIMG} height="100" width="100"></img>
              <div className="landing-header-1">Bounty Program</div>
              <div className="textBlob">Please list the contract address and name of the project below that you would like SEEK to investigate. Your personal information is kept completely and 100% secured with in our system. You can also use the form below to submit feedback or suggestions on how we can improve the project. Thank you! Fight the good fight and lets #stopinsanity.</div>
            </div>
            <div className="contactPanelContainer">
              <ContactPanel />
            </div>
          </div>
        </div>
        <div id='tokenomics' className="dark-gray-background card lane-padding">
          <div className="landing-header-1">High Level Tokenomics</div>
          <div className="landingRow4">
            <TokenomicsPanel />
          </div>
        </div>
        <div id='vetted' className="=card gray-background lane-padding">
          <div className="landing-header-1 ">Vetted Projects</div>
          <ProjectCards />
        </div>
        <RoadmapCards />

        <Footer/>
        
      </div>
    );

}

export default Landing