"use client";
import React from "react";

const ShapesFlux = () => {
  return (
    <>
      {/* Background Animation Container */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Triangles and Shapes */}
        <div className=" ">
          <div className=" shape triangle"></div>
          <div className=" shape square"></div>
          <div className="  shape circle"></div>
          <div className=" shape triangle-large"></div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        .shape {
          position: absolute;
          opacity: 0.7;
          animation-duration: 10s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .triangle {
          width: 0;
          height: 0;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 50px solid #ff5733;
          top: 10%;
          left: 5%;
          animation-name: moveShape1;
        }

        .triangle-large {
          width: 0;
          height: 0;
          border-left: 50px solid transparent;
          border-right: 50px solid transparent;
          border-bottom: 100px solid #28b463;
          top: 50%;
          left: 20%;
          animation-name: moveShape2;
        }

        .square {
          width: 50px;
          height: 50px;
          background-color: #3498db;
          top: 30%;
          left: 70%;
          animation-name: moveShape3;
        }

        .circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #f1c40f;
          top: 70%;
          left: 40%;
          animation-name: moveShape4;
        }

        @keyframes moveShape1 {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(-300px) translateX(200px) rotate(180deg);
          }
          100% {
            transform: translateY(0) translateX(0) rotate(360deg);
          }
        }

        @keyframes moveShape2 {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(200px) translateX(-300px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }

        @keyframes moveShape3 {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          100% {
            transform: translateY(-200px) translateX(-200px) rotate(360deg);
          }
        }

        @keyframes moveShape4 {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(-400px) translateX(400px);
          }
        }
      `}</style>
    </>
  );
};

export default ShapesFlux;
