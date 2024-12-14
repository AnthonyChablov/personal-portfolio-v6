"use client";
import { useState, useEffect } from "react";

const useGlitch = (duration: number = 150, glitchDuration: number = 1000) => {
  const [glitch, setGlitch] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch((prev) => !prev);
    }, duration); // The interval controls how often the glitch toggles

    return () => clearInterval(interval);
  }, [duration]);

  return {
    glitch,
    glitchAnimationDuration: glitchDuration,
  };
};

export default useGlitch;
