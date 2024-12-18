"use client";
import React from "react";

const Raindrops = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-black">
      {/* Raindrops */}
      <div className="raindrop raindrop-1"></div>
      <div className="raindrop raindrop-2"></div>
      <div className="raindrop raindrop-3"></div>
      <div className="raindrop raindrop-4"></div>
      <div className="raindrop raindrop-5"></div>

      {/* Animation Keyframes */}
      <style jsx>{`
        .raindrop {
          position: absolute;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, #00bfff, #87ceeb);
          opacity: 0.7;
          animation: dropFall 1s linear infinite;
          transform: rotate(-15deg);
        }

        .raindrop-1 {
          left: 10%;
          animation-delay: 0.2s;
        }

        .raindrop-2 {
          left: 30%;
          animation-delay: 0.4s;
        }

        .raindrop-3 {
          left: 50%;
          animation-delay: 0.6s;
        }

        .raindrop-4 {
          left: 70%;
          animation-delay: 0.8s;
        }

        .raindrop-5 {
          left: 90%;
          animation-delay: 1s;
        }

        @keyframes dropFall {
          0% {
            transform: translateY(-100%) rotate(-15deg);
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%) rotate(-15deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Raindrops;
