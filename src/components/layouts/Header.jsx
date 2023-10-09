import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/icons/logo.svg";
import search from "../../assets/images/icons/search.svg";
import user from "../../assets/images/icons/user.svg";
import basket from "../../assets/images/icons/basket.svg";

import profile from "../../assets/images/icons/profile-circle.svg"
import orders from "../../assets/images/icons/orders.svg"
import wishList from "../../assets/images/icons/wishList.svg"
import payments from "../../assets/images/icons/payments.svg"
import logout from "../../assets/images/icons/logout.svg"

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

          <div className="menu-trigger d-inline">
            <Link to="">
              <img src={user} alt="" />
            </Link>
          </div>
          <div className="dropdown-menu">
            <h3>s</h3>
            <ul>
            <DropdownItem img = {profile} text = {"My Profile"} />
            <DropdownItem img = {orders} text = {""} />
            <DropdownItem img = {profile} text = {"My Profile"} />
            <DropdownItem img = {profile} text = {"My Profile"} />
            <DropdownItem img = {profile} text = {"My Profile"} />
            </ul>
          </div>

        </div>
      </div>
    </header>
  );
};

function DropdownItem(props){
  return(
    <li className="dropdownItem">
      <img src={props.img} alt="" />
      <a href="#" >{props.text}</a>
    </li>
  );
}

export default Header;
