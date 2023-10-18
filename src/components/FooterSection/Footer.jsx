import React, { Fragment } from "react";

import "./footer-styles.css";

import instagramIcon from "../../assets/images/icons/instagram.svg";
import facebookIcon from "../../assets/images/icons/facebook.svg";
import youtubeIcon from "../../assets/images/icons/youtube.svg";
import twitterIcon from "../../assets/images/icons/twitter.svg";
import masterCard from "../../assets/images/icons/masterCard.svg";
import visaCard from "../../assets/images/icons/Visa.svg";
import payPal from "../../assets/images/icons/payPal.svg";
import amex from "../../assets/images/icons/Amex.svg";
import copyRight from "../../assets/images/icons/copy-right.svg";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-section1">
            <div className="c-title">Company</div>
            <p>about us</p>
            <p>blog</p>
            <p>returns</p>
            <p>order status</p>
          </div>
          <div className="footer-section2">
            <div className="c-title">Info</div>
            <p>How it works?</p>
            <p>our promises</p>
            <p>FAQ</p>
          </div>
          <div className="footer-section3">
            <div className="c-title">Contact us</div>
            <p>123 Main Street, Anytown,USA</p>
            <p>+1 (555) 123-4567</p>
            <p>TechHeimSupport@gmail.com</p>
          </div>
          <div className="footer-section4">
            <div className="c-title">Sign up for News and updates</div>
            <input type="text" placeholder="E-mail Address" />
            <div className="social-media">
              <img src={facebookIcon} alt="facebook icon" />
              <img src={twitterIcon} alt="twitter icon" />
              <img src={instagramIcon} alt="instagram icon" />
              <img src={youtubeIcon} alt="youtube icon" />
            </div>
          </div>
        </div>
        <div className="payment-method">
          <img src={payPal} alt="payPal sign" />
          <img src={amex} alt="american express sign" />
          <img src={visaCard} alt="visa card sign" />
          <img src={masterCard} alt="master card sign" />
        </div>
      </div>
      <div className="policy">
        <div>
          <p>
            {" "}
            <img src={copyRight} alt="" /> 2023 Tech Heim.{" "}
          </p>
        </div>
        <div className="right-side">
          <p>cookie settings</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions </p>
          <p>Imprint</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
