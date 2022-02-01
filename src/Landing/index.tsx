import landing from './landing'
import LoginPanel from './loginPanel';
import ProjectCard from './projectCard';
import RoadmapCard from './roadmapCard';
import TokenomicsPanel from './tokenomicsPanel';



function Landing() {
    
    return (
      <div className="landing">
          <div className="who">Who are Rugseekers</div>
          <div className="featuredIn">Bloomberg</div>
          <div className="bounty">Yar Bounty Program<LoginPanel/></div>
          <div className="tokenomics">Tokenomics<TokenomicsPanel/></div>
          <div className="vettedProjects">Vetted Projects<ProjectCard/></div>
          <div className="roadMap">Raodmap<RoadmapCard/></div>
      </div>
    );

}

export default Landing