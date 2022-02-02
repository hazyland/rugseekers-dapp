import React from "react";
import logo from '../assets/rug-logo 2.png'
import astro from '../assets/astro.png'
import leadership from '../assets/leadership.png'
import shield from '../assets/shield.png'

let string1 = "RugSeekers is dedicated to crypto space security and creating a safe environment for you to invest. We aim to help rid the markety of rug pulls and develop bot eradication software.";
let string2 = "Your financial investment is no only important to you but to us as well. In a fast moving volatile market, details are often left behind, Its our duty to ensure the details matter and you matter as well."
let string3 = "RugSeekers is dedicated to crypto space security and creating a safe environment for you to invest. We aim to help rid the markety of rug pulls and develop bot eradication software.";


export default function KeyPointsSlide() {
  return (
    <div className="keyPointsBackdrop">
      <div className="keyPointSlide">
        <img src={astro}></img>
        <div className="landing-header-2">The Future of Crypto space Security</div>
        <div>{string1}</div>
      </div>
      <div className="keyPointSlide">
        <img src={leadership}></img>
        {/* <img className="floating-logo"src={logo} height="180"width="180" ></img> */}
        <div className="landing-header-2">Join the fastest growing movement in the crypto space</div>
        <div>{string2}</div>
      </div>
      <div className="keyPointSlide">
        <img src={shield}></img>
        <div className="landing-header-2">The Future of Crypto space Security</div>
        <div>{string3}</div>
      </div>
    </div>
  ); 



}