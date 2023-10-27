import React from "react";

import "./productStyles.css";
import {PRODUCTS} from "../../data/products"

import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/slices/cartSlice";

// import macBookProM2 from "../../assets/images/pro02/macBook-pro-m2/macBook-pro-m2.png";
import macBookProM201 from "../../assets/images/pro02/macBook-pro-m2/Frame 26086019.png";
import macBookProM202 from "../../assets/images/pro02/macBook-pro-m2/Frame 26086021.png";
import macBookProM203 from "../../assets/images/pro02/macBook-pro-m2/Frame 26086022.png";
import macBookProM204 from "../../assets/images/pro02/macBook-pro-m2/Frame 26086048.png";

import star from "../../assets/images/icons/star.svg";
import guaranteed from "../../assets/images/icons/guaranteed.svg";
import delivery from "../../assets/images/icons/delivery.svg";
import shop from "../../assets/images/icons/shop.svg";

const Product = () => {
  const dispatcher = useDispatch();
  const addToCart = () => {
    dispatcher(addToBasket({ basket: PRODUCTS[5].productName }));
  };
  return (
    <div className=" row container">
      <div className="col-md-5 bg-danger  product-div">
        <div className="product-image">
          <img src={PRODUCTS[5].productImage} alt="MacBook pro m2" className=" w-100 " />
        </div>
        <div className="product-sub-image row d-flex align-items-center justify-content-center mt-3 g-1 mb-2">
          <div className="col d-flex justify-content-center">
            <img src={macBookProM201} alt="macBook Pro m2" />
          </div>
          <div className="col d-flex justify-content-center">
            <img src={macBookProM202} alt="macBook Pro m2" />
          </div>
          <div className="col d-flex justify-content-center">
            <img src={macBookProM203} alt="macBook Pro m2" />
          </div>
          <div className="col d-flex justify-content-center">
            <img src={macBookProM204} alt="macBook Pro m2" />
          </div>
        </div>
      </div>
      <div className="col-md-4 bg-warning-subtle specifications">
        <div className="sTop d-flex justify-content-start flex-column gap-2">
          <div className="pro-name">
          {PRODUCTS[5].productName} MNEJ3 2022 LLA {<br />} 13.3 inch
          </div>
          <div className="rate-color d-flex justify-content-start flex-column gap-4">
            <div>
              <div className="d-flex align-items-center gap-4 ">
                <span className="p-rate d-flex align-items-center ">
                  {" "}
                  <img src={star} alt="star" /> 4.9
                </span>
                <span className=" fs-5  ">sold 125</span>
              </div>
            </div>
            <div className="row d-flex align-items-center g-4">
              <span className=" col d-flex align-items-center justify-content-center ">
                <img src={shop} alt="" /> In Stock
              </span>
              <span className=" col d-flex align-items-center justify-content-center ">
                <img src={guaranteed} alt="" /> Guaranteed
              </span>
              <span className=" col d-flex align-items-center justify-content-center ">
                <img src={delivery} alt="" /> Free Delivery
              </span>
            </div>
            <div>
              <span>Select color</span>
            </div>
          </div>
        </div>
        <div className="sBottom">
          <div>
            <span>Brand</span>
            <span>Apple</span>
          </div>
          <div>
            <span>Model Name</span>MacBook Pro<span></span>
          </div>
          <div>
            <span>Screen Size</span>
            <span>13.3 Inches</span>
          </div>
          <div>
            <span>Storage Size</span>
            <span>256 GB</span>
          </div>
          <div>
            <span>CPU Model</span>
            <span>Core i5</span>
          </div>
        </div>
      </div>
      <div className="col-md-3 bg-danger-subtle price">
        <div></div>
        <div></div>
        <div>
          <button className="btn btn-primary" onClick={addToCart}>
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
