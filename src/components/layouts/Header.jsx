import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/icons/logo.svg";
import search from "../../assets/images/icons/search.svg";
import user from "../../assets/images/icons/user.svg";
import basket from "../../assets/images/icons/basket.svg";

const Header = () => {
  return (
    <header className=" py-3 ">
      <div className="container d-flex justify-content-between">
        <div>
          <img src={logo} alt="" width="30" />
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link text-black blue-hover-color">
            Home
          </Link>
          <div className="">
            <Link
              to="/products"
              className="nav-link text-black blue-hover-color"
            >
              Products
            </Link>
            <div className="sub-menu">
              
            </div>
          </div>
          <Link to="/blog" className="nav-link text-black blue-hover-color">
            Blog
          </Link>
          <Link to="/faq" className="nav-link text-black blue-hover-color">
            FAQ
          </Link>
          <Link
            to="/contact-us"
            className="nav-link text-black blue-hover-color"
          >
            Contact us
          </Link>
        </nav>
        <div>
          <button className="bg-transparent border-0 pe-3">
            <img src={search} alt="" />
          </button>
          <Link to="" className="pe-3">
            <img src={basket} alt="" />
          </Link>
          <Link to="">
            <img src={user} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
