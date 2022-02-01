import landing from './landing'
import LoginPanel from './loginPanel';
import ProjectCard from './projectCard';
import RoadmapCard from './roadmapCard';
import TokenomicsPanel from './tokenomicsPanel';



function Landing() {
    
    return (
      <div className="landing">
        <div className="landing-row dark-gray-background">Who are Rugseekers</div>
        <div className="landing-row white-background">Bloomberg</div>
        <div className="landing-row dark-gray-background">
          Yar Bounty Program
          <LoginPanel />
        </div>
        <div className="landing-row gray-background">
          Tokenomics
          <TokenomicsPanel />
        </div>
        <div className="landing-row dark-gray-background">
          Vetted Projects
          <ProjectCard />
        </div>
        <div className="landing-row gray-background">
          Raodmap
          <RoadmapCard />
        </div>
      </div>
    );

}

export default Landing