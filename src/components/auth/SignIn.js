import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state);
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={8} className="pad" style={{ padding: '30px', borderRadius: '20px' }}>
                        <h5 className="dash-title">Sign In</h5>
                        <br />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <NavLink className="links" to="/signup">Create Account</NavLink>
                            </Form.Group>
                            <Button className="form-but" variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default SignIn;