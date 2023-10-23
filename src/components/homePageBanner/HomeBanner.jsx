import React from "react";

import ps5 from "../../assets/images/banners/ps5.png";
import iphone15 from "../../assets/images/banners/iphone15.png";

const HomeBanner = () => {
  return (
    <div>
      <div className="row container d-flex justify-content-center">
        <div className="col-sm-6 col-md-8">
          <img src={iphone15} alt="iphone15" />
        </div>
        <div className="col-sm-6 col-md-8">
          <img src={ps5} alt="play station" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
