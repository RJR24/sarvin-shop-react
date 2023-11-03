import React from "react";

import "./productStyles.css";
import { PRODUCTS } from "../../data/products";

import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/slices/cartSlice";

// import macBookProM2 from "../../assets/images/pro02/macBook-pro-m2/macBook-pro-m2.png";
import macBookProM201 from "../../assets/images/pro02/macBook-pro-m2/Frame 26086019.png";
import macBookProM202 from "../../assets/images/pro02/macBook-pro-m2/Frame 26086021.png";
import macBookProM203 from "../../assets/images/pro02/macBook-pro-m2/Frame 26086022.png";
import macBookProM204 from "../../assets/images/pro02/macBook-pro-m2/Frame 26086048.png";
import arrowRight from "../../assets/images/arrows-btn-etc/arrow-circle-right.svg";
import discountIcon from "../../assets/images/icons/discount.svg";
import threeMonths from "../../assets/images/icons/3-months.svg";
import sixMonths from "../../assets/images/icons/6-months.svg";
import twelveMonths from "../../assets/images/icons/12-months.svg";
import eighteenMonths from "../../assets/images/icons/18-months.svg";

import star from "../../assets/images/icons/star.svg";
import guaranteed from "../../assets/images/icons/guaranteed.svg";
import delivery from "../../assets/images/icons/delivery.svg";
import shop from "../../assets/images/icons/shop.svg";

const Product = () => {
  const dispatcher = useDispatch();
  const addToCart = () => {
    dispatcher(addToBasket({ basket: PRODUCTS[5] }));
  };
  return (
    <div className=" row p-container">
      <div className="col-md-5 product-div">
        <div className="product-image">
          <img
            src={PRODUCTS[5].productImage}
            alt="MacBook pro m2"
            className=" w-100 "
          />
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
      <div className="col-md-4 specifications">
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
        <div className="product-info">
          <div className=" d-flex flex-column justify-content-between ">
            <div className="d-flex">
              <span className=" col-6">Brand</span>
              <span className=" col-4">Apple</span>
            </div>
            <div className="d-flex">
              <span className=" col-6">Model Name </span>
              <span className=" col-4">MacBook Pro</span>
            </div>
            <div className="d-flex">
              <span className=" col-6">Screen Size</span>
              <span className=" col-4">13.3 Inches</span>
            </div>
            <div className="d-flex">
              <span className=" col-6">Storage Size</span>
              <span className=" col-4">256 GB</span>
            </div>
            <div className="d-flex">
              <span className=" col-6">CPU Model</span>
              <span className=" col-4">Core i5</span>
            </div>
            <div style={{ color: "#0C68F4" }}>
              show more{" "}
              <img
                src={arrowRight}
                alt="arrow to right"
                style={{ color: "#0C68F4" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="price col-md-3 d-flex flex-column">
        <div className="price-payment">
          <div className=" payment-container d-flex flex-column ">
            <div className="price-discount">
              <div className="discount d-flex justify-content-between">
                <div>$ 1299.00</div>
                <div>
                  {" "}
                  <img src={discountIcon} alt="discountIcon" />
                  -12%
                </div>
              </div>
              <div className="last-price">
                <span>last price</span> <span>$ 1410,87</span>
              </div>
            </div>
            <div className="payment-method d-flex flex-column w-100">
              <input
                type="radio"
                name="dark"
                id="dark"
                value="dark"
                // onChange={onChange}
                checked={true}
              />
              <input
                type="radio"
                name="Pay Now"
                id="dark"
                value="dark"
                // onChange={onChange}
                checked={true}
              />
              <div className="installments row gap-2 d-flex justify-content-between">
                <div className="col-2 months">
                  <img src={threeMonths} alt="" />
                </div>
                <div className="col-2 months">
                  {" "}
                  <img src={sixMonths} alt="" />
                </div>
                <div className="col-2 months">
                  {" "}
                  <img src={twelveMonths} alt="" />{" "}
                </div>
                <div className="col-2 months">
                  {" "}
                  <img src={eighteenMonths} alt="" />{" "}
                </div>
              </div>
              <div className="monthly-payment">$433.00/ month</div>
            </div>

            <div className="purchase d-flex flex-column gap-2 mt-2">
              <button className="btn btn-primary">Buy Now</button>
              <button className="btn btn-outline-primary" onClick={addToCart}>
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
