"use client";
import React from "react";

const Lazers = () => {
  return (
    <>
      {/* Background Animation Container */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-black">
        {/* Laser Beams */}
        <div className="laser laser-1"></div>
        <div className="laser laser-2"></div>
        <div className="laser laser-3"></div>

        {/* Animation Keyframes */}
        <style jsx>{`
          .laser {
            position: absolute;
            width: 100%;
            height: 4px;
            background: linear-gradient(
              to right,
              #ff0080,
              #ff5733,
              transparent
            );
            animation: beamMove 3s linear infinite;
            opacity: 0.8;
          }

          .laser-1 {
            top: 20%;
            animation-duration: 3s;
          }

          .laser-2 {
            top: 50%;
            animation-duration: 4s;
          }

          .laser-3 {
            top: 80%;
            animation-duration: 2.5s;
          }

          @keyframes beamMove {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Lazers;
