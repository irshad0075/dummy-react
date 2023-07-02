import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import imageL from "../12.png";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <Navbar expand="lg " style={{ backgroundColor: "#e1997e" }}>
        <Container fluid>
          <Navbar.Brand href="#">
            <Link className="d-inline-block align-top mx-5" to="/">
              {" "}
              <img src={imageL} width="100" height="80" alt=" logo" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-3 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            />
            <Nav className="ms-auto" navbarScroll>
              <Link className="ms-4 btn " to="/">
                Home
              </Link>
              <Link className="ms-4 btn " to="/products">
                Products
              </Link>
              <Link className="ms-4 btn btn-dark" to="/login">
                Login
              </Link>
              <Link className="ms-4 btn btn-dark" to="/signup">
                SignUp
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
