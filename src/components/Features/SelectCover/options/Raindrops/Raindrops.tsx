"use client";
import React from "react";

const Raindrops = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-gradient-to-r from-black  to-black" data-testid='cover'>
      {" "}
      {/* Raindrops */}
      <div className="raindrop raindrop-1"></div>
      <div className="raindrop raindrop-2"></div>
      <div className="raindrop raindrop-3"></div>
      <div className="raindrop raindrop-4"></div>
      <div className="raindrop raindrop-2"></div>
      <div className="raindrop raindrop-3"></div>
      <div className="raindrop raindrop-4"></div>
      <div className="raindrop raindrop-5"></div>
      <div className="raindrop raindrop-6"></div>
      <div className="raindrop raindrop-7"></div>
      <div className="raindrop raindrop-8"></div>
      {/* Animation Keyframes */}
      <style jsx>{`
        /* Raindrops */
        .raindrop {
          position: absolute;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, #00bfff, #87ceeb);
          opacity: 0.7;
          animation: dropFall 0.75s linear infinite;
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

        /* Clouds */
        .cloud {
          position: absolute;
          width: 200px;
          height: 100px;
          background: #ffffff;
          opacity: 0.7;
          border-radius: 50%;
          filter: blur(10px);
          animation: floatClouds 10s linear infinite;
        }

        .cloud-1 {
          top: 10%;
          left: 20%;
          animation-delay: 0s;
        }

        .cloud-2 {
          top: 20%;
          left: 50%;
          animation-delay: 3s;
        }

        .cloud-3 {
          top: 30%;
          left: 70%;
          animation-delay: 6s;
        }

        @keyframes floatClouds {
          0% {
            transform: translateX(-50px);
          }
          50% {
            transform: translateX(50px);
          }
          100% {
            transform: translateX(-50px);
          }
        }
      `}</style>
    </div>
  );
};

export default Raindrops;
