"use client";
import React, { ReactNode, CSSProperties } from "react";

// Define the interface for props
interface TemplateProps {
  style?: CSSProperties; // Optional inline style prop
  children?: ReactNode; // Optional children prop
}

const CoverTemplate: React.FC<TemplateProps> = ({ style, children }) => {
  return (
    <>
      {/* Background Glitch Animation */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden bg-black"
        style={style}
      >
        {children}
      </div>
      {/* Keyframes */}
      <style jsx>{``}</style>
    </>
  );
};

export default CoverTemplate;
