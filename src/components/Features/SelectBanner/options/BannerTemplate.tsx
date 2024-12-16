"use client";
import React from "react";

interface BannerTemplateProps {
  template?: "particles" | "shapes" | "waves" | "stars" | "bubbles";
  animationDuration?: string;
}

const BannerTemplate: React.FC<BannerTemplateProps> = ({
  template = "particles",
}) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {template === "particles" && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-70 animate-particle"
              style={{
                width: `${Math.random() * 5 + 5}px`,
                height: `${Math.random() * 5 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 5}s`,
              }}
            />
          ))}
        </div>
      )}
      {template === "shapes" && (
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`absolute opacity-50 animate-shape shape-${i % 3}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            />
          ))}
        </div>
      )}
      {template === "waves" && (
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 animate-waves" />
        </div>
      )}
      {template === "stars" && (
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-yellow-400 rounded-full opacity-80 animate-star"
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 8 + 4}s`,
              }}
            />
          ))}
        </div>
      )}
      {template === "bubbles" && (
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-300 rounded-full opacity-60 animate-bubble"
              style={{
                width: `${Math.random() * 10 + 10}px`,
                height: `${Math.random() * 10 + 10}px`,
                bottom: `-${Math.random() * 10}px`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 8}s`,
              }}
            />
          ))}
        </div>
      )}
      {/* Keyframes */}
      <style jsx>{`
        @keyframes particle {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }

        @keyframes shape {
          from {
            transform: rotate(0deg);
            opacity: 1;
          }
          to {
            transform: rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes waves {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes star {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes bubble {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(-100%);
          }
        }

        .animate-particle {
          animation: particle linear infinite;
        }
        .animate-shape {
          animation: shape linear infinite;
        }
        .animate-waves {
          animation: waves 10s linear infinite;
        }
        .animate-star {
          animation: star linear infinite;
        }
        .animate-bubble {
          animation: bubble linear infinite;
        }

        .shape-0 {
          width: 50px;
          height: 50px;
          background: red;
          border-radius: 50%;
        }
        .shape-1 {
          width: 60px;
          height: 60px;
          background: green;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .shape-2 {
          width: 40px;
          height: 40px;
          background: blue;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default BannerTemplate;
