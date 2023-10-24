import React from "react";
import { Link } from "react-router-dom";
import "./header-styles.css";
import logo from "../../assets/images/icons/logo.svg";
import search from "../../assets/images/icons/search.svg";
import user from "../../assets/images/icons/user.svg";
import basket from "../../assets/images/icons/basket.svg";

import profile from "../../assets/images/icons/profile-circle.svg";
import orders from "../../assets/images/icons/orders.svg";
import wishList from "../../assets/images/icons/wishList.svg";
import payments from "../../assets/images/icons/payments.svg";
import logout from "../../assets/images/icons/logout.svg";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [open, setOpen] = useState(false);
  const username = useSelector((state) => state.userReducer.username);
  return (
    <header className=" header-styles py-3 ">
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
            <div className="sub-menu"></div>
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

          <div
            className={`menu-trigger  d-inline ${open ? "active" : "inactive"}`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Link to="">
              <img src={user} alt="" />
            </Link>

            <div className="dropdown-menu">
              {username ? (
                <div>
                  <h3>
                    {username}
                    <br />
                    <span>User@gmail.com</span>
                  </h3>
                  <ul className="list-unstyled">
                    <DropdownItem img={profile} text={"My Profile"} />
                    <DropdownItem img={orders} text={"Orders"} />
                    <DropdownItem img={wishList} text={"Wish List"} />
                    <DropdownItem img={payments} text={"Payments"} />
                    <DropdownItem img={logout} text={"Log Out"} />
                  </ul>
                </div>
              ) : (
                <div>
                  <button className="btn btn-primary">Login</button>
                  <button className="btn btn-primary">Register</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img} alt="" />
      <a href="#">{props.text}</a>
    </li>
  );
}

export default Header;
