import hamburger from "../assets/hamburger.png";
import twiter from "../assets/twiter.png";
import telegram from "../assets/telegram.png";
import facebook from "../assets/facebook.png";
import discord from "../assets/discord.png";

function Links() {


  return (
    <div className={""}>

    </div>
  );
}

function Footer() {
    
 
  return (
    <div className="copyright">
      <div className="footer" style={{ padding: "5px", display: "flex", justifyContent: "space-around" }}>
        {/* <div style={{ display: "flex", justifyContent: "space-around" }}> */}
        <div className="quick-links" style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", marginTop: "5px" }}>
          <h4>Quick Links</h4>
          <div style={{ display: "flex", fontSize: "12px", justifyContent: "center" }}>
            <div style={{ display: "flex", margin: "5px", flexDirection: "column" }}>
              <a>Whitepaper</a>
              <a href="/#roadmap">Roadmap</a>
              <a href="/#tokenomics">Tokenomics</a>
            </div>
            <div style={{ display: "flex", margin: "5px", flexDirection: "column" }}>
              <a href="/#vetted">Vetted Projects</a>
              <a>Online Store</a>
              <a>How to Buy</a>
            </div>
          </div>
        </div>

        <div>
          <h4>Contact Us</h4>
          <a style={{ color: "orange" }}>RugSeekers@gmail.com</a>
        </div>

        <div>
          <h4>Social Links</h4>
          {/* <div className={"socialWidget-container" + "-mobile"}> */}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <a href="https://wwwhttps://www.twitter.com/@SEEK_Token2.qries.com/">
            <img src={twiter}></img>
                
            </a>
            <a href="https://t.me/SEEK_Token">

            <img src={telegram}></img>
            </a>
            <a href="https://discord.gg/FEWgsgHZ">

            <img src={discord}></img>
            </a>
            <a href="https://www.facebook.com/groups/1242036486300481">

            <img src={facebook}></img>
            </a>
            {/* <div className="social-icon-container"> */}
            {/* </div> */}
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
      <p style={{ textAlign: "center", marginBottom:"0px" }}>Copyright SEEK 2022 - All Rights Reserved</p>
    </div>
  );
}

export default Footer;
