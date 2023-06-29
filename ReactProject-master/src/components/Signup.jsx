import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  const { email, password, address1, address2, city, state, zip } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    Swal.fire({
      icon: "success",
      title: "Form Submitted",
      text: "Data has been logged in the console.",
    });
  };

  return (
    <>
      <style>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          className="modal-right p-4 m-2"
          style={{ height: "500px", width: "400px" }}
    >
          <img
            src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=2000"
            alt="img"
            style={{ height: "500px", width: "95%" }}
          />
        </div>
        <div style={{ width: "900px" }}>
          <Form
            className="d-flex flex-column"
            style={{ height: "500px", border: "rounded" }}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>California (United States)</option>
                  <option>New York (United States)</option>
                  <option>Texas (United States)</option>
                  <option>London (United Kingdom)</option>
                  <option>Paris (France)</option>
                  <option>Berlin (Germany)</option>
                  <option>Beijing (China)</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Form>

          <p className="sign-up">
            Already have an account? <a href="#">Sign In now</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;