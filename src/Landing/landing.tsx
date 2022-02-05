// import React from "react";
// import "./App.css";
// import Landing from "./index";
// import { BrowserRouter as BrowserRouterProvider, Route, Routes } from "react-router-dom";



// function App() {
//     return (
//         // <Landing/>
//         <BrowserRouterProvider>
//             <Routes>

//             </Routes>
//         </BrowserRouterProvider>
//     );
// }

// export default App;




import landing from "./landing";
import ContactPanel from "./contactPanel";
import ProjectCard from "./projectCard";
import RoadmapCard from "./roadmapCard";
import TokenomicsPanel from "./tokenomicsPanel";

function Landing() {
  return (
    <div className="landing">
      <div className="landing-row row-1">Who are Rugseekers?</div>
      <div className="landing-row">Bloomberg</div>
      <div className="landing-row">
        Yar Bounty Program
        <div className="contactPanelContainer">
          <ContactPanel />
        </div>
      </div>
      <div className="landing-row">
        <div className="landingRow4">
          High Level Tokenomics
          <TokenomicsPanel />
        </div>
      </div>
      <div className="landing-row">
        Vetted Projects
        <ProjectCard />
      </div>
      <div className="landing-row">
        Raodmap
        <RoadmapCard />
      </div>
    </div>
  );
}

export default Landing;