import React from 'react'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


const SignedInLinks = () => {
    return (
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">

            </Nav>
            <Nav>
                <Nav.Link as={NavLink} to="/" style={{ marginLeft: '30px' }}>Dashboard</Nav.Link>
                <Nav.Link as={NavLink} to="/create" >Create Order</Nav.Link>
                <NavDropdown title="Jaeruz" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    );
}

export default SignedInLinks;