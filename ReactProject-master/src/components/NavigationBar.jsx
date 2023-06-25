import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imageL from "../12.png";
import image11 from "../11.png";
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" >
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src={image11} width="90px" height="60px" className="d-inline-block align-top mx-3" alt="logo" />
                        <img src={imageL} width="60%" height="80" className="d-inline-block align-top mx-5" alt="Oraware logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-3 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll />
                        <Nav className="ms-auto" navbarScroll>
                            <Link className='ms-4 btn btn-danger' to="/">Home</Link>
                            <Link className='ms-4 btn btn-danger' to="/products">Products</Link>
                            <Link className='ms-4 btn btn-danger' to="/login">Login</Link>
                            <Link className='ms-4 btn btn-danger' to="/signup">SignUp</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;
