"use client";
import React from "react";
import Banner from "./Banner/Banner";
import DitheredBanner from "./AnimatedBanners/DitheredBanner";
import AnimatedBanner1 from "./AnimatedBanners/AnimatedBanner1";

const SelectBanner = () => {
  return (
    <div>
      <Banner width="100%">
        <AnimatedBanner1 />
      </Banner>
    </div>
  );
};

export default SelectBanner;
