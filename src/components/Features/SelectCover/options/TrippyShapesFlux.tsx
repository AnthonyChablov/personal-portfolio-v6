"use client";
import React from "react";

const TrippyShapesFlux = () => {
  return (
    <>
      {/* Background Animation Container */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-black">
        {/* Triangles and Shapes */}
        <div className="shape gradient-triangle"></div>
        <div className="shape gradient-square"></div>
        <div className="shape gradient-circle"></div>
        <div className="shape gradient-pulse"></div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        .shape {
          position: absolute;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .gradient-triangle {
          width: 0;
          height: 0;
          border-left: 60px solid transparent;
          border-right: 60px solid transparent;
          border-bottom: 100px solid;
          top: 10%;
          left: 10%;
          animation: trippyMove1 7s infinite, rotateShape 6s infinite;
          background: linear-gradient(to bottom, #ff0080, #ff5733);
        }

        .gradient-square {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #00ffff, #0044ff);
          top: 40%;
          left: 70%;
          animation: trippyMove2 10s infinite, rotateShape 8s infinite;
        }

        .gradient-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle, #00ff00, #008000);
          top: 60%;
          left: 20%;
          animation: trippyMove3 9s infinite, pulseShape 2s infinite;
        }

        .gradient-pulse {
          width: 100px;
          height: 100px;
          background: linear-gradient(45deg, #ffff00, #ff0000);
          border-radius: 20%;
          top: 30%;
          left: 40%;
          animation: pulseShape 2.5s infinite alternate, trippyMove4 8s infinite;
        }

        @keyframes trippyMove1 {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(200px) translateY(150px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes trippyMove2 {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-200px) translateY(-200px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes trippyMove3 {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(250px) translateY(-150px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes trippyMove4 {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-300px) translateY(300px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes rotateShape {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulseShape {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
};

export default TrippyShapesFlux;
