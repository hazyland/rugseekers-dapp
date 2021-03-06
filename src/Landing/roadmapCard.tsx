import React, { useEffect, useState } from "react";

const phaseItems = [
    //Phase 1
    [
        {
            emoji: "✅",
            text: "sample text",
        },
        {
            emoji: "✅",
            text: "sample text",
        },
        {
            emoji: "✅",
            text: "sample text",
        },
        {
            emoji: "✅",
            text: "sample text",
        },
        {
            emoji: "✅",
            text: "sample text sample text text ",
        },
        {
            emoji: "✅",
            text: "sample text sample text sample text v sample text sample text",
        },
    ],
    //Phase 2
    [
        {
            emoji: "🛠️",
            text: "in progress",
        },
        {
            emoji: "🛠️",
            text: "in progress",
        },
        {
            emoji: "🛠️",
            text: "in progress",
        },
        {
            emoji: "🛠️",
            text: "in progress",
        },
    ],
    //Phase 3
    [
        {
            emoji: "🛠️",
            text: "in progress",
        },
        {
            emoji: "🛠️",
            text: "in progress",
        },
        {
            emoji: "🛠️",
            text: "in progress",
        },
        {
            emoji: "🛠️",
            text: "in progress",
        },
    ],
    //Phase 4
    [
        {
            emoji: "🛠️",
            text: "in progress",
        },
        {
            emoji: "🛠️",
            text: "in progress",
        },
        {
            emoji: "🛠️",
            text: "in progress",
        },
        {
            emoji: "🛠️",
            text: "in progress",
        },
    ],
];

function PhaseBox(props: { index: number; items: any[] }) {
    return (
        <div className="phase-box">
            <p style={{
                color: "orange",
                fontWeight: "bold"
            }}>
                Phase {props.index + 1}
            </p>
            {props.items.map((item) => {
                return (
                    <div className="phase-item">
                        <div className="emoji">{item.emoji}</div>
                        <div className="text" style={{
                            marginLeft: "4px"
                        }}>{item.text}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default function RoadmapCard() {
    const [phases, setPhases] = useState([])

    async function getPhases() {
        const res = await fetch('/phases.json')
        const phases = await res.json();
        setPhases(phases)
        console.log(phases)
      }
      useEffect(() => {
        getPhases()
      }, [])
    return (
        <div className="roadmapCard card dark-gray-background lane-padding" id="roadmap">
            <h1 className="orange_text">Roadmap</h1>
            <div className="phases">
                {phases.map((phase, index) => {
                    return <PhaseBox items={phase} index={index} />;
                })}
            </div>
        </div>
    );
}
