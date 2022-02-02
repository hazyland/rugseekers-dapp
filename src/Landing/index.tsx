import landing from './landing'
import LoginPanel from './loginPanel';
import ProjectCard from './projectCard';
import RoadmapCard from './roadmapCard';
import TokenomicsPanel from './tokenomicsPanel';
import KeyPointsSlide from './keyPointsSlide';

import bountyIMG from '../assets/icons8_pirates_of_the_caribbean_96px 1.png'


function Landing() {
    
    return (
      <div className="landing">
            <div className="landing-row dark-gray-background">
                <div className="landing-header-1">Who are Rugseekers</div>      
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