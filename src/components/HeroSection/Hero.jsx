import React from "react";

import HeroImage from "../../assets/Hero-section.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <div>
        <div className="shop-name">Tech Heim</div>
        <div className="techHeim-slogan">"Join the digital revolution"</div>

        <button className="explore-button">Explore more</button>
      </div>
      <div>
        <img src={HeroImage} alt="laptop" />
      </div>
    </div>
  );
};

export default Hero;
