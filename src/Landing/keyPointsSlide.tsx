import React, { useEffect, useState } from "react";
import logo from "../assets/rug-logo 2.png";
import astro from "../assets/astro.png";
import leadership from "../assets/leadership.png";
import shield from "../assets/shield.png";

let string1 =
    "Seek is dedicated to crypto space security and creating a safe environment for you to invest. We aim to help rid the markety of rug pulls and develop bot eradication software.";
let string2 =
    "Your financial investment is not only important to you, but to us as well. In a fast moving volatile market, details are often left behind. It's our duty to ensure the details matter and you matter as well.";
let string3 =
    "Seek is dedicated to crypto space security and creating a safe environment for you to invest. We aim to help rid the markety of rug pulls and develop bot eradication software.";

export default function KeyPointsSlide() {
    const [points, setPoints] = useState<string[]>([]);
    const [images, setImages] = useState<string[]>([]);

    async function getTexts() {
        const res = await fetch("/texts.json");
        const body = await res.json();
        setPoints([body.left.text, body.center.text, body.right.text]);
        setImages([body.left.icon, body.center.icon, body.right.icon]);
    }

    useEffect(() => {
        getTexts();
    }, []);

    return (
        <div className="landingRow2 lane-padding">
            <div className="keyPointSlide">
                <img src={images[0]}></img>
                <div className="landing-header-2">The Future of Crypto space Security</div>
                <div>{points[0] ?? ""}</div>
            </div>
            <div className="keyPointSlide">
                <img src={images[1]}></img>
                {/* <img className="floating-logo"src={logo} height="180"width="180" ></img> */}
                <div className="landing-header-2">
                    Join the fastest growing movement in the crypto space
                </div>
                <div>{points[1] ?? ""}</div>
            </div>
            <div className="keyPointSlide">
                <img src={images[2]}></img>
                <div className="landing-header-2">The Future of Crypto space Security</div>
                <div>{points[2] ?? ""}</div>
            </div>
        </div>
    );
}
