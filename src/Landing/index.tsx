import landing from './landing'
import LoginPanel from './loginPanel';
import ProjectCard from './projectCard';
import RoadmapCard from './roadmapCard';
import TokenomicsPanel from './tokenomicsPanel';
import KeyPointsSlide from './keyPointsSlide';
import Social from './social'

import bountyIMG from '../assets/pirate.png'


function Landing() {
    
    return (
      <div className="landing">
            <div className="landing-row row-1 dark-gray-background">
                <div className="landing-row-social-container" >
                    <div className="col-2">
                        <div>Worlds first project to pay a "bounty" for tips the lead to stopping corruption.</div>
                        <div className="landing-header-1">Who are Rugseekers</div>
                        <div>We are a professional, diligent, and experienced team committed to helping eliminate fraud and corruption from the crypto space. The RugSeeker team was born out of our own experience with loss and is dedicated to rid investors of that very thing.</div>               
                    </div>
                    <div>
                    <Social/>
                    </div>
                </div>
                <KeyPointsSlide />
                
            </div>
            <div className="landing-row dark-gray-background">
                <div className="landing-header-1">RugSeekers has been featured in</div>
            </div>
            <div className="landing-row dark-gray-background">
                <img src={bountyIMG} height="100" width="100"></img>
                <div className="landing-header-1">Yar Bounty Program</div>
                <LoginPanel />
            </div>
            <div className="landing-row gray-background">
                <div className="landing-header-1">Tokenomics</div>
                <TokenomicsPanel />
            </div>
            <div className="landing-row dark-gray-background">
                <div className="landing-header-1">Vetted Projects</div>
                <ProjectCard />
            </div>
            <div className="landing-row gray-background">
                <div className="landing-header-1">Raodmap</div>
                <RoadmapCard />
            </div>
        </div>
    );

}

export default Landing