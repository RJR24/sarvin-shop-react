import React from "react";

import "./servicesStyles.css";

import techNewsIcon from "../../assets/images/icons/screen.svg";
import shipping from "../../assets/images/icons/shipping.svg";
import clock from "../../assets/images/icons/clock.svg";
import guarantee from "../../assets/images/icons/guarantee.svg";

const OurServices = () => {
  return (
    <div className="servicesContainer">
      <div className="services">
       <div className="image">
         <img src={techNewsIcon} alt="screen" />
        </div>
       <div className="p">
         <p>Latest and Greatest Tech</p>
        </div>
      </div>
      <div className="services">
       <div className="image">
         <img src={shipping} alt="shipping" />
        </div>
       <div className="p">
         <p>Guarantee</p>
        </div>
      </div>
      <div className="services">
       <div className="image">
         <img src={guarantee} alt="guarantee" />
        </div>
       <div className="p">
         <p>Free Shipping over 1000$</p>
        </div>
      </div>
      <div className="services">
       <div className="image">
         <img src={clock} alt="clock" />
        </div>
       <div className="p">
         <p>24/7 Support</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
