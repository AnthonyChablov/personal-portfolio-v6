"use client";
import React, { useEffect, useState } from "react";

interface DitheredBoxProps {
  animationDuration?: string;
}

const GlitchTextBanner = ({ animationDuration = "2s" }: DitheredBoxProps) => {
  // Extended array of banner texts
  const bannerTexts = [
    "Welcome To My Portfolio Site",
    "Discovering Creative Ideas",
    "Designing Beyond Boundaries",
  ];

  // State to hold the random banner text
  const [randomText, setRandomText] = useState<string | null>(null);

  // Set random text after component mounts
  useEffect(() => {
    const text = bannerTexts[Math.floor(Math.random() * bannerTexts.length)];
    setRandomText(text);
  }, [randomText]);

  // If randomText is not yet set (during the first render), return null to avoid hydration issues
  if (randomText === null) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      {/* Background Glitch Animation */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-yellow-500 opacity-40 animate-pulse"
        style={{
          animationDuration: animationDuration,
          animationIterationCount: "infinite",
        }}
      />

      {/* Banner with random text and animation */}
      <div
        className="absolute text-4xl font-extrabold text-white animate-glitch p-4 z-10"
        style={{
          animationDuration: animationDuration,
        }}
      >
        {randomText}
      </div>

      {/* Keyframes for glitch effect */}
      <style jsx>{`
        @keyframes glitch {
          0% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-4px);
          }
          40% {
            transform: translateX(4px);
          }
          60% {
            transform: translateX(-4px);
          }
          80% {
            transform: translateX(4px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-glitch {
          animation: glitch 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default GlitchTextBanner;
