import React from "react";

import guaranteed from "../../assets/images/icons/guaranteed.svg";
import freeDelivery from "../../assets/images/icons/delivery.svg";
import plus from "../../assets/images/icons/plus.svg";
import minus from "../../assets/images/icons/minus.svg";
import bin from "../../assets/images/icons/bin.svg";

const BasketItemsCard = ({productImage, productName}) => {
 
  return (
    <div>
      <div className="basket-container d-flex flex-column justify-content-start align-items-center">
        <div className="itemsList d-flex flex-column justify-content-start ">
          <div className="product-image">
            <img src={productImage} alt="" />
          </div>
          <div className="product-details">
            <div>
              <div className="model-name">
                {/* Inateck 12.3-13 Inch MacBook Case Sleeve */}
                {productName}
              </div>
              <div className="color-numbers d-flex flex-column justify-content-between">
                <span>blue</span>
                <span>×1</span>
              </div>
            </div>
            <div className="supports">
              <div>
                {" "}
                <img src={guaranteed} alt="Guarantee" /> Guaranteed
              </div>
              <div>
                {" "}
                <img src={freeDelivery} alt="Free Delivery" /> Free Delivery
              </div>
            </div>
            <div className="price-itemManagement">
              <div>$433.00</div>
              <div>
                <img src={bin} alt="bin" />
                <div>
                  <img src={minus} alt="minus sign" />
                  <span>1</span>
                  <img src={plus} alt="plus sign" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BasketItemsCard;
