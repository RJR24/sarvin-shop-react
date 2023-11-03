import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../layouts/header-styles.css";

import user from "../../assets/images/icons/user.svg";

import profile from "../../assets/images/icons/profile-circle.svg";
import orders from "../../assets/images/icons/orders.svg";
import wishList from "../../assets/images/icons/wishList.svg";
import payments from "../../assets/images/icons/payments.svg";
import logoutIcon from "../../assets/images/icons/logout.svg";

import { login, logout } from "../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import UserLoginRegister from "../UserLoginRegister/UserLoginRegister";

const UserAccountDropdown = () => {
  const [open, setOpen] = useState(false);
  const username = useSelector((state) => state.userReducer.username);
  const dispatcher = useDispatch();
  const userLogin = () => {
    dispatcher(login({ username: "Kaveh024" }));
  };

  return (
    <div>
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
                <DropdownItem img={logoutIcon} text={"Log Out"} event={true} />
              </ul>
            </div>
          ) : (
            <UserLoginRegister />
            // <div>
            //   <button className="btn btn-primary" onClick={userLogin}>
            //     Login
            //   </button>
            //   <button className="btn btn-primary">Register</button>
            // </div>
          )}
        </div>
      </div>
    </div>
  );
};
function DropdownItem(props) {
  const dispatcher = useDispatch();
  const userLogout = () => {
    dispatcher(logout());
  };
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

export default UserAccountDropdown;
