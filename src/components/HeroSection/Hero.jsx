import React from "react";
import "./heroSectionStyles.css";

import HeroImage from "../../assets/Hero-section.png";

const Hero = () => {
  return (
    <div className="hero-container d-flex justify-content-between flex-start">
      <div className=" d-flex flex-column justify-content-between gap-5">
        <div className="d-flex flex-column gap-5">
          <div className="company-name">Tech Heim</div>
          <div className="company-slogan ">
            <span style={{"color": "#042352"}}>"Join the</span> <span style={{"color": "#F45E0C"}}>digital revolution"</span>
          </div>
        </div>
        <div className=" ">
          <button className="explore-button d-flex">Explore more</button>
        </div>
      </div>
      <div>
        <img src={HeroImage} alt="laptop" />
      </div>
    </div>
  );
};

export default Hero;
