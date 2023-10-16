import React from "react";
import "./topBrandsStyles.css"

import Apple from "../../assets/images/icons/Apple.svg";
import Sony from "../../assets/images/icons/Sony.svg";
import Samsung from "../../assets/images/icons/Samsung.svg";
import Canon from "../../assets/images/icons/Canon.svg";
import huawei from "../../assets/images/icons/huawei.svg";
import Lenovo from "../../assets/images/icons/Lenovo.svg";

const TopBrands = () => {
  return (
    <div>
      <div className="brandsTitle">Top Brands</div>
      <div id="brandsName">
        <div>
          <img src={Apple} alt="logo" />
        </div>
        <div>
          <img src={Sony} alt="logo" />
        </div>
        <div>
          <img src={Samsung} alt="logo" />
        </div>
        <div>
          <img src={Canon} alt="logo" />
        </div>
        <div>
          <img src={huawei} alt="logo" />
        </div>
        <div>
          <img src={Lenovo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
