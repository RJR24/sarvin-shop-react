import { useState } from "react";

import "./header-styles.css";

import Accordion from "react-bootstrap/Accordion";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import techHeimLogo from "../../assets/images/icons/logo.svg";
import UserAccountDropdown from "../User-account/UserAccountDropdown";
import UserBasketComponent from "../UserBasket/UserBasketComponent";

function MobileNavScroll() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={handleShow} />
        <Offcanvas className=" mw-75" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img
                src={techHeimLogo}
                className="mobile-logo"
                alt="tech Heim logo"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Products</Accordion.Header>
                <Accordion.Body className=" d-flex flex-column">
                  <ul>
                    <li>Mobile Phones</li>
                    <li>Laptops & Computers</li>
                    <li>Tablets & E-reader</li>
                    <li>Wearables</li>
                    <li>Audio</li>
                    <li>Cameras</li>
                    <li>Gaming</li>
                    <li>Networking</li>
                    <li>Accessories</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div rel="stylesheet" href="/">
              Blog
            </div>
            <div rel="stylesheet" href="/">
              FAQ
            </div>
            <div rel="stylesheet" href="/">
              Contact us
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        <Navbar.Brand href="#" className=" fs-1 m-0">
          Tech Heim
        </Navbar.Brand>
        <div className="d-flex align-content-center justify-content-center">
          <UserBasketComponent />
          <UserAccountDropdown />
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Form className="d-flex w-100">
        <Form.Control
          type="search"
          placeholder="What can we help you to find ?"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    </Navbar>
  );
}

export default MobileNavScroll;
