import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function UserLoginRegister() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Login" title="Login">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className=" fw-bolder">
                Log in to Tech Heim
              </Form.Label>
              <Form.Control type="email" placeholder="E-mail" autoFocus />
              <Form.Control type="password" placeholder="Password" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="keep me logged in" />
            </Form.Group>
            <Button variant="primary" onClick={handleShow}>
              login
            </Button>
            <div>----Or login with-----</div>
            <Button variant="primary">google</Button>
            <Button variant="primary">facebook</Button>
          </Form>
        </Tab>
        <Tab eventKey="Create Account" title="Create Account">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className=" fw-bolder">
                Log in to Tech Heim
              </Form.Label>
              <Form.Control type="text" placeholder="Full Name" autoFocus />
              <Form.Control type="email" placeholder="E-mail" autoFocus />
              <Form.Control type="password" placeholder="Password" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="I agree to all Terms & Conditions"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleShow}>
              Create Account
            </Button>
            <div>----Or login with-----</div>
            <Button variant="primary">google</Button>
            <Button variant="primary">facebook</Button>
          </Form>
        </Tab>
      </Tabs>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className=" fw-bolder">
                Log in to Tech Heim
              </Form.Label>
              <Form.Control type="email" placeholder="E-mail" autoFocus />
              <Form.Control type="password" placeholder="Password" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="keep me logged in" />
            </Form.Group>
            <Button variant="primary" onClick={handleShow}>
              login
            </Button>
            <div>----Or login with-----</div>
            <Button variant="primary">google</Button>
            <Button variant="primary">facebook</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal> */}
    </>
  );
}

export default UserLoginRegister;
