import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignedOutLinks = () => {
    return (
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">

            </Nav>
            <Nav>
                <Nav.Link href="#ab">About</Nav.Link>
                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    );
}

export default SignedOutLinks;