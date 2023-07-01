import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

function SignupDetail() {
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
            
            background-color: #fff;
          }
          .signup-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .signup-image {
            height: 500px;
            width: 400px;
            margin: 0 20px;
          }
          .signup-form {
            width: 400px;
          }
          .signup-form .form-group label {
            color: white;
          }
          .signup-form .btn {
            background-color: #e1997e;
            border-color: #e1997e;
          }
          .signup-form .btn:hover {
            background-color: #d9886e;
            border-color: #d9886e;
          }
          .signup-form .sign-up {
            color: "#e1997e";
            text-align: center;
          }
        `}
      </style>
      <div className="signup-container">
        <div className="signup-image">
          <img
            src="https://i.pinimg.com/originals/27/9d/a0/279da0eddd5cf914d29ec923e837e3fe.gif"
            alt="img"
            style={{ height: "500px", width: "95%" }}
          />
        </div>
        <div className="signup-form">
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                value={address1}
                onChange={(e) =>
                  setFormData({ ...formData, address1: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                placeholder="Apartment, studio, or floor"
                value={address2}
                onChange={(e) =>
                  setFormData({ ...formData, address2: e.target.value })
                }
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  value={city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  value={state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                >
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
                <Form.Control
                  value={zip}
                  onChange={(e) =>
                    setFormData({ ...formData, zip: e.target.value })
                  }
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="danger" type="submit" >
              Submit
            </Button>
          </Form>


          <p className="sign-up">
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignupDetail;
