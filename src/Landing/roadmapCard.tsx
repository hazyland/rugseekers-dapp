import React from "react";

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
            <p>Phase {props.index + 1}</p>
            {props.items.map((item) => {
                return (
                    <div className="phase-item">
                        <div className="emoji">{item.emoji}</div>
                        <div className="text">{item.text}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default function RoadmapCard() {
    return (
        <div className="roadmapCard card gray-background">
            <h1>Roadmap</h1>
            <div className="phases">
                {phaseItems.map((phase, index) => {
                    return <PhaseBox items={phase} index={index} />;
                })}
            </div>
        </div>
    );
}
