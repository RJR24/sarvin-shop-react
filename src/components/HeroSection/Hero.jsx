import React from "react";
import "./heroSectionStyles.css";

import HeroImage from "../../assets/Hero-section.png";

const Hero = () => {
  return (
    <div className=" row hero-container d-flex justify-content-between">
      <div className="w-auto col-sm-4 d-flex flex-column justify-content-between gap-5">
        <div className="d-flex flex-column gap-5">
          <div className="company-name">Tech Heim</div>
          <div className="company-slogan ">
            <div style={{ color: "#042352" }}>
              "Join the 
              <span style={{ color: "#F45E0C" }}> digital revolution"</span>
            </div>{" "}
          </div>
        </div>
        <div>
          <button className="explore-button d-flex">Explore more</button>
        </div>
      </div>
      <div className="heroImage col-sm-8">
        <img src={HeroImage} alt="laptop"  />
      </div>
    </div>
  );
};

export default Hero;
