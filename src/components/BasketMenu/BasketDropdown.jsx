import React from "react";
import { useSelector } from "react-redux";

import BasketItemsCard from "./BasketItemsCard";

import checkoutTrolley from "../../assets/images/icons/checkout-trolley.svg";

const BasketDropdown = () => {
  const { basket, totalQty } = useSelector((state) => state.cartReducer);
  return (
    <div className="cartItems width={150px} bg-danger">
      <div className="itemsNumber">{totalQty} items</div>
      {basket.map((item) => (
        <BasketItemsCard {...item} key={item.id} />
      ))}
      <div className="proceed-to-checkout">
        <div>
          Grand total <br />
          $543.02
        </div>
        <div>
          <button className="btn btn-primary px-4 py-2">
            Proceed to cart <img src={checkoutTrolley} alt="trolley" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketDropdown;
