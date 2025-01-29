import React from "react";
import FeaturesPage from "./FeaturesPage";
import PopularCourses from "./PopularCourses";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
      className="flex  flex-col items-center justify-center "
      style={{ backgroundImage: `url(${assets.bg})` }}
    >
      <FeaturesPage />
      <PopularCourses />
    </div>
  );
};

export default Hero;
