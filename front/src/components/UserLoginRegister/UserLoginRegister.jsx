import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./userLoginRegister.css";

import google from "../../assets/images/icons/google.svg";
import facebook from "../../assets/images/icons/facebook-blue-rounded.svg";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function UserLoginRegister() {
  const openRegisterModal = useSelector(
    (state) => state.userReducer.openRegisterModal
  );
  const [show, setShow] = useState(openRegisterModal);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    console.log("####################################" + openRegisterModal);
    setShow(openRegisterModal);
  }, [openRegisterModal]);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal className="modal" show={show} onHide={handleClose}>
        <div className=" loginRegister-form d-flex flex-column align-items-center">
          <div className="LR-heading d-flex justify-content-center w-100 gap-3">
            <div className="user-login w-100 d-flex justify-content-center py-2 button-primary">
              Login
            </div>
            <div className="user-createAccount w-100 d-flex justify-content-center py-2 neutral-gray-717171 button-primary">
              Create Account
            </div>
          </div>
          <div className=" create-account">
            <div className=" d-flex flex-column align-items-center">
              <div className=" tech-heim-login">Log in to Tech Heim</div>

              <input
                type="email"
                name="user-email"
                id=""
                placeholder="E-mail"
                className=" CA-inputs w-100 mt-3 mb-3 py-2"
              />
              <input
                type="password"
                name="user-password"
                id=""
                placeholder="Password"
                className=" CA-inputs w-100 py-2"
              />
              <div className=" w-100 d-flex justify-content-end me-5 mt-2 ">
                <a href="/" className="forgot-password fw-lighter">
                  Forgot Password ?
                </a>
              </div>
              <label htmlFor="" className="mt-2 mb-3 w-100 neutral-gray-717171">
                {" "}
                <input type="checkbox" name="terms-conditions" id="" /> Keep me
                logged in
              </label>
              <button type="button" className=" btn btn-primary w-100">
                Log In
              </button>
              <div className=" mt-4 mb-4">Or Log In with</div>
              <div className=" signUp-with w-100 d-flex gap-4 justify-content-between">
                <div className=" w-100 ">
                  <button
                    type="button"
                    className="fG gap-2 btn btn-outline-primary w-100 d-flex justify-content-center align-items-center border-2"
                  >
                    {" "}
                    <img src={google} alt="" />
                    Google
                  </button>
                </div>
                <div className=" w-100 ">
                  <button
                    type="button"
                    className="fG gap-2 btn btn-outline-primary w-100 d-flex justify-content-center align-items-center border-2"
                  >
                    {" "}
                    <img src={facebook} alt="" />
                    Facebook
                  </button>
                </div>
              </div>
              <div className=" mt-3 mb-4">
                <span className=" neutral-gray-717171 px-2">
                  Don’t have an account ?
                </span>{" "}
                <span className=" button-primary">sign up</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* <Modal className="modal" show={show} onHide={handleClose}>
    <div className=" loginRegister-form d-flex flex-column align-items-center">
      <div className="LR-heading d-flex justify-content-center w-100 gap-3">
        <div className="user-login w-100 d-flex justify-content-center py-2 neutral-gray-717171" >
          Login
        </div>
        <div className="user-createAccount w-100 d-flex justify-content-center py-2 button-primary">
          Create Account
        </div>
      </div>
      <div className=" create-account">
        <div className=" d-flex flex-column align-items-center">
          <div className=" tech-heim-login">Create your account</div>
          <input
            type="text"
            name="user-fullName"
            id=""
            placeholder="Full Name"
            className=" CA-inputs w-100 mt-4 py-2"
          />
          <input
            type="email"
            name="user-email"
            id=""
            placeholder="E-mail"
            className=" CA-inputs w-100 mt-3 mb-3 py-2"
          />
          <input
            type="password"
            name="user-password"
            id=""
            placeholder="Password"
            className=" CA-inputs w-100 py-2"
          />
          <label htmlFor="" className="mt-2 mb-3 w-100 neutral-gray-717171">
            {" "}
            <input type="checkbox" name="terms-conditions" id=""  /> I agree
            to all <a href="/">Terms & Conditions</a>
          </label>
          <button type="button" className=" btn btn-primary w-100">
            Create Account
          </button>
          <div className=" mt-4 mb-4">Or Sign Up with</div>
          <div className=" signUp-with w-100 d-flex gap-4 justify-content-between">
            <div className=" w-100 ">
              <button
                type="button"
                className="fG gap-2 btn btn-outline-primary w-100 d-flex justify-content-center align-items-center border-2"
              >
                {" "}
                <img src={google} alt="" />
                Google
              </button>
            </div>
            <div className=" w-100 ">
              <button
                type="button"
                className="fG gap-2 btn btn-outline-primary w-100 d-flex justify-content-center align-items-center border-2"
              >
                {" "}
                <img src={facebook} alt="" />
                Facebook
              </button>
            </div>
          </div>
          <div className=" mt-3 mb-4">
            <span className=" neutral-gray-717171 px-2">
              Already have an account ? 
            </span>{" "}
            <span className=" button-primary">sign in</span>
          </div>
        </div>
      </div>
    </div>
    </Modal>  */}
    </>
  );
}

export default UserLoginRegister;
