// import React from "react";
// import "./App.css";
// import { BrowserRouter as BrowserRouterProvider, Route, Routes } from "react-router-dom";



// function App() {
//     return (
//       <BrowserRouterProvider>
//           <Routes>

//           </Routes>
//       </BrowserRouterProvider>

//     );
// }

// export default App;


import React from "react";
import { BrowserRouter as BrowserRouterProvider, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <BrowserRouterProvider>
    //     <Routes>

    //     </Routes>
    // </BrowserRouterProvider>
    <nav>
      <h3>Logo</h3> {/* //landing */}
      <ul className="nav-links">
        <li>Whiteaper</li>
        <li>Roadmap</li>
        <li>Tokenomics</li>
        <li>Reflection</li>
        <li>VettedProjects</li>
        <li>Online Store</li>
        <li>How to Buy</li>
        <li>Dapp</li>
      </ul>
    </nav>
  );
}

export default App;
