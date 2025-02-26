"use client";
import React from "react";

const LoadingBanner = () => {
  return (
    <div className="relative w-full h-full overflow-hidden" data-testid='cover'>
      {/* Background Glitch Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-black  animate-pulse"></div>

      {/* Loading Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"></div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes glitch-text {
          0%,
          100% {
            transform: translate(0, 0);
          }
          10% {
            transform: translate(-2px, -2px);
          }
          20% {
            transform: translate(2px, 2px);
          }
          30% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(2px, -2px);
          }
          50% {
            transform: translate(-2px, 0);
          }
          60% {
            transform: translate(2px, 0);
          }
        }

        .animate-glitch-text {
          animation: glitch-text 0.5s infinite;
          animation-timing-function: step-end;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.9;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingBanner;
