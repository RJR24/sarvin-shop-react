import React, { Fragment } from "react";

import "./footer-styles.css";

import instagramIcon from "../../../assets/images/icons/instagram.svg";
import facebookIcon from "../../../assets/images/icons/facebook.svg";
import youtubeIcon from "../../../assets/images/icons/youtube.svg";
import twitterIcon from "../../../assets/images/icons/twitter.svg";
import masterCard from "../../../assets/images/icons/masterCard.svg";
import visaCard from "../../../assets/images/icons/Visa.svg";
import payPal from "../../../assets/images/icons/payPal.svg";
import amex from "../../../assets/images/icons/Amex.svg";
import copyRight from "../../../assets/images/icons/copy-right.svg";
import location from "../../../assets/images/icons/location.svg";
import HeimSupport from "../../../assets/images/icons/techHeimSupport.svg";
import phone from "../../../assets/images/icons/phone.svg";

const Footer = () => {
  return (
    <>
     <div className="d-none d-md-block">
     <div className="footer-container">
      <div className=" container">
    

        <div class=" footer-info neutral-gray d-flex justify-content-between">
          <div className="footer-section1">
            <div className="c-title">Company</div>
            <span>about us</span>
            <span>blog</span>
            <span>returns</span>
            <span>order status</span>
          </div>
          <div className="footer-section2">
            <div className="c-title">Info</div>
            <span>How it works?</span>
            <span>our promises</span>
            <span>FAQ</span>
          </div>
          <div className="footer-section3">
            <div className="c-title">Contact us</div>
            <div className="d-flex align-items-center sec3-items">
              <div>
                <img src={location} alt="location" />
              </div>
              <div>
                <span>123 Main Street, Anytown,USA</span>
              </div>
            </div>
            <div className="d-flex align-items-center sec3-items">
              <div>
                <img src={phone} alt="phone" />
              </div>
              <div>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="d-flex align-items-center sec3-items">
              <div>
                <img src={HeimSupport} alt="support" />
              </div>
              <div>
                <span>TechHeimSupport@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="footer-section4 ">
            <div className="c-title">Sign up for News and updates</div>
            <div>
              <input className="E-address" type="text" placeholder="E-mail Address"  />
              
            </div>
            <div className="social-media d-flex ">
              <img src={facebookIcon} alt="facebook icon" />
              <img src={twitterIcon} alt="twitter icon" />
              <img src={instagramIcon} alt="instagram icon" />
              <img src={youtubeIcon} alt="youtube icon" />
            </div>
          </div>
        </div>
        <div className="acceptable-payment-cards">
          <img src={payPal} alt="payPal sign" />
          <img src={amex} alt="american express sign" />
          <img src={visaCard} alt="visa card sign" />
          <img src={masterCard} alt="master card sign" />
        </div>
        <div className="policy d-flex justify-content-between ">
        <div className="d-flex col-2 neutral-gray-cbcbcb">
          <span>
            {" "}
            <img src={copyRight} alt="" /> 2023 Tech Heim.{" "}
          </span>
        </div>
        <div className="right-side d-flex neutral-gray-cbcbcb">
          <span>cookie settings</span>
          <span>Privacy Policy</span>
          <span>Terms and Conditions </span>
          <span>Imprint</span>
        </div>
      </div>
        </div>
      </div>

      
     </div>

     <div className="d-block   d-md-none">
      <div className="bg-black w-100 text-white">
        <p className=" w-100">footer</p>
        <p className=" w-100">footer</p>
        <p className=" w-100">footer</p>
        <p className=" w-100">footer</p>
        <p className=" w-100">footer</p>
        <p className=" w-100">footer</p>
        <p className=" w-100">footer</p>
        <p className=" w-100">footer</p>
        <p className=" w-100">footer</p>
        <p className=" w-100">footer</p>
        <p className=" w-100">footer</p>
       
      </div>
     </div>
    </>
  );
};

export default Footer;
