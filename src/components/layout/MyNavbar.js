import React, { Component } from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { NavLink } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'

class MyNavbar extends Component {
    state = {

    }
    render() {
        console.log(this.props.orderList)
        return (
            <Navbar sticky="top" className="MyNav" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand className="nav-brand" as={NavLink} to="/">Wrong Grahams</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <SignedInLinks />
                    <SignedOutLinks />
                </Container>
            </Navbar>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        orderList: state.order.orderList
    }
}

export default connect(mapStateToProps)(MyNavbar);