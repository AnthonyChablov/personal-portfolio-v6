"use client";
import React from "react";

const Ambient = ({}) => {
  return (
    <>
      {/* Fractal Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-black" data-testid='ambient-cover'>
        {/* Fractal Effect (background pattern) */}
        <div className="absolute top-0 left-0 w-full h-full fractal-background"></div>
      </div>

      {/* Keyframe Animation for Fractal */}
      <style jsx>{`
        .fractal-background {
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 1%,
            rgba(0, 0, 0, 0.5) 50%
          );
          background-size: 50% 50%;
          animation: fractalEffect 20s infinite linear;
        }

        @keyframes fractalEffect {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Ambient;
