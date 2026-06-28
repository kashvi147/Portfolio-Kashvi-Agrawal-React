import { useEffect, useState } from "react";

function KBot() {
  const facts = [
    {
      title: "Hi! I'm K-Bot",
      detail: "Want a quick tour of Kashvi's projects?"
    },
    {
      title: "10+ Projects Built",
      detail: "From web apps to Arduino and IoT systems."
    },
    {
      title: "Robotics & AI @ JIIT",
      detail: "Building intelligent hardware-software systems."
    },
    {
      title: "Full Stack Developer",
      detail: "React, Python, Arduino and Machine Learning."
    },
    {
      title: "Always Learning",
      detail: "Exploring AI, Robotics and modern web technologies."
    }
  ];

  const [currentFact, setCurrentFact] = useState(0);

  function handleKbotClick() {
    setCurrentFact((prev) => (prev + 1) % facts.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="kbot-zone">

      <button
        className="kbot-interactive kbot-float"
        onClick={handleKbotClick}
      >

        <svg
          className="kbot-robot"
          viewBox="0 0 120 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Antenna */}
          <line x1="60" y1="18" x2="60" y2="8" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="60" cy="6" r="3" fill="#4DFF7A" opacity="0.9"/>

          {/* Head */}
          <rect x="28" y="18" width="64" height="48" rx="14" fill="#141414" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"/>
          <rect x="36" y="28" width="20" height="12" rx="4" fill="#0a0a0a" stroke="rgba(0,229,255,0.35)" strokeWidth="1"/>
          <rect x="64" y="28" width="20" height="12" rx="4" fill="#0a0a0a" stroke="rgba(0,229,255,0.35)" strokeWidth="1"/>
          <circle cx="46" cy="34" r="2.5" fill="#00E5FF"/>
          <circle cx="74" cy="34" r="2.5" fill="#00E5FF"/>

          {/* Neck */}
          <rect x="52" y="66" width="16" height="8" rx="2" fill="#1a1a1a" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>

          {/* Body */}
          <rect x="22" y="74" width="76" height="52" rx="16" fill="#111111" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
          <rect x="34" y="86" width="52" height="28" rx="8" fill="#0a0a0a" stroke="rgba(77,255,122,0.2)" strokeWidth="1"/>
          <line x1="42" y1="100" x2="78" y2="100" stroke="rgba(77,255,122,0.45)" strokeWidth="1" strokeLinecap="round"/>
          <circle cx="48" cy="100" r="2" fill="#4DFF7A"/>
          <circle cx="60" cy="100" r="2" fill="#4DFF7A" opacity="0.6"/>
          <circle cx="72" cy="100" r="2" fill="#4DFF7A" opacity="0.35"/>

          {/* Arms */}
          <rect x="8" y="82" width="12" height="32" rx="6" fill="#161616" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <rect x="100" y="82" width="12" height="32" rx="6" fill="#161616" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

          {/* Shadow */}
          <ellipse cx="60" cy="134" rx="28" ry="4" fill="rgba(0,229,255,0.08)"/>
        </svg>

        <div className="kbot-card">

          <p className="kbot-small-title">
            AI PORTFOLIO ASSISTANT
          </p>

          <h3 className="kbot-title">
            {facts[currentFact].title}
          </h3>

          <p className="kbot-description">
            {facts[currentFact].detail}
          </p>

          <button className="kbot-card-btn">
  Explore Portfolio →
</button>

        </div>

      </button>

      <span className="kbot-hint">
        Hover to explore · Click for facts
      </span>

    </div>
  );
}

export default KBot;