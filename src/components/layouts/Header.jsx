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
import logoutIcon from "../../assets/images/icons/logout.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/slices/userSlice";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);

  const basketStatus = useSelector((state) => state.cartReducer.basket);
  const username = useSelector((state) => state.userReducer.username);
  const { totalQty } = useSelector((state) => state.cartReducer);
  const dispatcher = useDispatch();
  const userLogin = () => {
    dispatcher(login({ username: "Kaveh024" }));
  };

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
        <div className=" d-flex ">
          <button className="bg-transparent border-0 pe-3">
            <img src={search} alt="" />
          </button>
          <div
            className={`basket menu-trigger  d-inline ${
              basketOpen ? "basketActive" : "basketInactive"
            }`}
            onMouseEnter={() => setBasketOpen(true)}
            onMouseLeave={() => setBasketOpen(false)}
          >
            <Link to="" className="pe-3 position-relative">
              <img src={basket} alt="basket" />
              <span className="position-absolute bg-danger text-white rounded-circle">
                {totalQty}
              </span>
            </Link>
            <div className="dropdown-menu">
              {basketStatus ? (
                <div>
                  <h3>
                    <span>{username} basket</span>
                  </h3>
                  <hr />
                  {/* <div className="cartItems">

                  </div> */}
                  <ul className="list-unstyled">
                    <DropdownItem img={profile} text={"product 1"} />
                    <DropdownItem img={orders} text={"product 2"} />
                    <DropdownItem img={wishList} text={"product 3"} />
                    <DropdownItem img={payments} text={"product 4"} />
                    <DropdownItem
                      img={logoutIcon}
                      text={"Log Out"}
                      event={true}
                    />
                  </ul>
                </div>
              ) : (
                <div>
                  <h3 className="bg-warning" width="100px">
                    Basket is empty!
                  </h3>
                </div>
              )}
            </div>
          </div>

          <div
            className={`menu-trigger  d-inline ${
              open ? "userActive" : "userInactive"
            }`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Link to="">
              <img src={user} alt="user" />
            </Link>

            <div className="dropdown-menu">
              {username ? (
                <div>
                  <h3>
                    {username}
                    <br />
                    <span>{username}@gmail.com</span>
                  </h3>
                  <ul className="list-unstyled">
                    <DropdownItem img={profile} text={"My Profile"} />
                    <DropdownItem img={orders} text={"Orders"} />
                    <DropdownItem img={wishList} text={"Wish List"} />
                    <DropdownItem img={payments} text={"Payments"} />
                    <DropdownItem
                      img={logoutIcon}
                      text={"Log Out"}
                      event={true}
                    />
                  </ul>
                </div>
              ) : (
                <div>
                  <button className="btn btn-primary" onClick={userLogin}>
                    Login
                  </button>
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
  const dispatcher = useDispatch();
  const userLogout = () => {
    dispatcher(logout());
  };
  console.log(props.text);
  return (
    <>
      {props.event ? (
        <li className="dropdownItem" onClick={userLogout}>
          <img src={props.img} alt="" />
          <a href="#">{props.text}</a>
        </li>
      ) : (
        <li className="dropdownItem">
          <img src={props.img} alt="" />
          <a href="#">{props.text}</a>
        </li>
      )}
    </>
  );
}

export default Header;
