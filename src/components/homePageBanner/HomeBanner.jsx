import React from "react";

import "./homeBanner.css";

import ps5Mobile from "../../assets/images/banners/ps5-mobile.svg";
import ps5 from "../../assets/images/banners/ps5.png";
import iphone15 from "../../assets/images/banners/iphone15.png";
import iphone15Mobile from "../../assets/images/banners/iphone15-mobile.svg";

const HomeBanner = () => {
  return (
    <div className="row d-flex justify-content-center gap-2">
      <div className="iphone15 col-md-7 col-12 ">
        <picture>
          {/* <source
            srcSet="../../assets/images/banners/iphone15.png"
            media="(min-width : 768px)"
          /> */}
          <img src={iphone15Mobile} alt="iphone15" width="100%" />
        </picture>
      </div>
      <div className="ps5  col-md-4 col-12">
        <picture>
          {/* <source
            srcSet="../../assets/images/banners/ps501.png"
            media="(min-width:768px)"
          /> */}
          <img src={ps5Mobile} alt="play station" width="100%" />
        </picture>
      </div>
    </div>
  );
};

export default HomeBanner;
