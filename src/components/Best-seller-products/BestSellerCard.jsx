import React from "react";
import star from "./../../assets/images/arrows-btn-etc/star.svg";

const NewBestSellerCard = ({ data, image }) => {
  return (
    <div className="newBestSellerCard col-md-3 col-sm-6 col-5 ">
      <div>
        <img src={image} alt="" />
      </div>

      <div className="cardInfo">
        <div>{data.specification}</div>

        <div className="price-rate">
          <div>{data.price}</div>
          <div id="rate">
            <div>
              <img src={star} alt="star sign" />
            </div>
            {data.rate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBestSellerCard;
