import React from "react";
import star from "./../../assets/images/arrows-btn-etc/star.svg";

const NewProductsCard = ({ data, image }) => {
  return (
    <div className="newProductCard">
      <div>
        <img src={image} alt="" width="100px" />
      </div>

      <div className="info">
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

export default NewProductsCard;
