"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface DitheredBoxProps {
  className?: string;
  width?: string;
  height?: string;
  animationDuration?: string;
}

const DitheredBox = ({
  className = "",
  width = "200px",
  height = "200px",
  animationDuration = "2s",
}: DitheredBoxProps) => {
  return (
    <div
      className={cn(`relative overflow-hidden ${className}`)}
      style={{
        width,
        height,
      }}
    >
      {/* Background Glitch Animation */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2272%22 height=%2272%22 viewBox=%220 0 72 72%22%3E%3Ccircle cx=%2236%22 cy=%2236%22 r=%2215%22 fill=%22%23ffffff%22 opacity=%22.1%22/%3E%3C/svg%3E')",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0",
          animation: `ditherAnimation ${animationDuration} infinite linear`,
        }}
      />

      {/* Glitch Effect Layers */}
      {/* <div
        className="absolute top-0 left-0 w-full h-full border border-zinc-700 rounded-lg"
        style={{
          animation: `glitchBorder ${animationDuration} infinite alternate ease-in-out`,
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full border border-zinc-600 rounded-lg opacity-50"
        style={{
          animation: `glitchShift ${animationDuration} infinite alternate-reverse`,
        }}
      /> */}

      {/* Inner Content or Placeholder */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="text-white font-bold text-lg"
          style={{
            animation: `textGlitch ${animationDuration} infinite linear`,
          }}
        >
          Anthony Chablov
        </div>
      </div> */}

      {/* Keyframes */}
      <style jsx>{`
        @keyframes ditherAnimation {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 100px;
          }
        }

        @keyframes glitchBorder {
          0% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(-2px, 2px);
          }
        }

        @keyframes glitchShift {
          0% {
            transform: translate(-3px, 3px);
          }
          100% {
            transform: translate(3px, -3px);
          }
        }

        @keyframes textGlitch {
          0% {
            text-shadow: 1px 1px 2px #ff00ff, -1px -1px 2px #00ffff;
          }
          50% {
            text-shadow: -1px -1px 2px #ff00ff, 1px 1px 2px #00ffff;
          }
          100% {
            text-shadow: 1px -1px 2px #ff00ff, -1px 1px 2px #00ffff;
          }
        }
      `}</style>
    </div>
  );
};

export default DitheredBox;
