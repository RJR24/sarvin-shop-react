import React from "react";
import "./smartWatchBannerStyles.css";

import rightLayer from "../../assets/Ellipse.svg";
import smartWatch from "../../assets/smartWatch.png";

const SmartWatch = () => {
  return (
    <div className="mainLayer">

      <div className="SWTitleArea">
        <div className="SWName">SMART WATCH</div>
        <div className="slogan">Various designs and brands</div>
        <div><button className="btn btn-danger">View</button></div>
      </div>
      <div className="smartWatch">
        <img src={smartWatch} alt="smartWatch" />
      </div>
      <img src={rightLayer} alt="rightLayer" className="rightLayer" />
    </div>
  );
};

export default SmartWatch;
