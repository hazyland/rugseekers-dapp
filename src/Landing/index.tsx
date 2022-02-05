import landing from './landing'
import ContactPanel from './contactPanel';
import ProjectCard from './projectCard';
import RoadmapCard from './roadmapCard';
import TokenomicsPanel from './tokenomicsPanel';
import KeyPointsSlide from './keyPointsSlide';
import Social from './social'

import { useAppProvider } from '../contexts/App/AppProvider';



import bountyIMG from '../assets/pirate.png'


function Landing() {
    const AppState = useAppProvider()

    return (
      <div className="landing">
        <div className="dark-gray-background">
          <div className={AppState.appDimensions.innerWidth <= 500 ? "landingRow-1-mobile" : "landingRow-1"}>
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
          <KeyPointsSlide />
        </div>
        <div className="dark-gray-background">
          <div className="landingRow3">
            <div className="landing-header-1">RugSeekers has been featured in</div>
            <div className='featuredIcons'>

            <img src={bountyIMG} height="100" width="100"></img>
            <img src={bountyIMG} height="100" width="100"></img>
            <img src={bountyIMG} height="100" width="100"></img>
            </div>
          </div>
        </div>
        <div className="dark-gray-background">
          <div className="landingRow4">
              <div>
            <img src={bountyIMG} height="100" width="100"></img>
            <div className="landing-header-1">Yar Bounty Program</div>
            <div className='textBlob'>Please list the contract address and name of the project below that you would like Rugsekers to investigate.Your personla information is kept completely and 100% secured with in our system. You can also use the form below to submit feedback or suggestions on how we can improve the project. Thank you. Fight the good fight and lets #stopinsanity</div>

              </div>
              <div className='contactPanelContainer'>
                    <ContactPanel />

              </div>
          </div>
        </div>
        <div className="gray-background">
          <div className="landing-header-1">Tokenomics</div>
          <TokenomicsPanel />
        </div>
        <div className="dark-gray-background">
          <div className="landing-header-1">Vetted Projects</div>
          <ProjectCard />
        </div>
        <div className="gray-background">
          <div className="landing-header-1">Raodmap</div>
          <RoadmapCard />
        </div>
      </div>
    );

}

export default Landing