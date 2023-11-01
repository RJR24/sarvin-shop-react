import React from "react";
import { useSelector } from "react-redux";

import "./basketMenuStyles.css";
import BasketItemsCard from "./BasketItemsCard";

import checkoutTrolley from "../../assets/images/icons/checkout-trolley.svg";

const BasketDropdown = () => {
  const { basket, totalQty } = useSelector((state) => state.cartReducer);
  return (
    <>
      <div className="itemsNumber">{totalQty} items</div>
      <div className="cartItems d-flex justify-content-center">
        <div className="items-container align-items-center">
          {basket.map((item) => (
            <BasketItemsCard {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="proceed-to-checkout d-flex gap-4">
        <div className="total-price">
          Grand total <br />
          $543.02
        </div>
        <div>
          <button className="checkout-btn btn btn-primary d-flex justify-content-center align-items-center gap-2 px-4 py-2">
            <div> Proceed to cart </div>
            <img src={checkoutTrolley} alt="trolley" className="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BasketDropdown;
