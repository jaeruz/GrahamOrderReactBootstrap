import React, { Component } from 'react'

import { Button, Row, Col, Form, Container, Alert } from 'react-bootstrap'
import { FaPlus } from "react-icons/fa";

class CreateOrderForm extends Component {
    state = {
        id: 0,
        item: 'Oreo Graham',
        quantity: null,
        remarks: null
    }
    handleSubmit = (e) => {
        e.preventDefault();


        if (document.querySelector('#quantity').value == '') {
            // alert('Please provide quantity')
            this.setState({
                quantity: 'e'
            })
        } else {

            if (this.state.remarks == null || document.querySelector('#remarks').value == '') {
                this.setState({
                    remarks: 'None'
                }, () => {
                    this.props.addOrder(this.state);
                })
            } else {
                this.props.addOrder(this.state);
            }
            console.log(this.state)
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        // console.log(this.state);
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="item">
                        <Form.Label>Graham</Form.Label>
                        <Form.Control as="select" defaultValue="Oreo Graham" onChange={this.handleChange}>
                            <option>Oreo Graham</option>
                            <option>GDL (Orig)</option>
                            <option>GDL (Milo)</option>
                            <option>GDL (Coffee)</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="quantity">
                        <Form.Label >Quantity</Form.Label>
                        <Form.Control type="number" onChange={this.handleChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="remarks">
                    <Form.Label>Remarks</Form.Label>
                    <Form.Control as="textarea" rows="5" maxLength={30} onChange={this.handleChange} />
                </Form.Group>
                {(this.state.quantity == 'e') ? (
                    <Alert variant="danger">Please Provide Quantity</Alert>
                ) : (
                        <Alert ><h7 id="err-prompt" style={{ visibility: "hidden" }}>Please Provide Quantity</h7></Alert>
                    )}
                <Button className="add-but" variant="success" type="submit">
                    <FaPlus style={{ color: "#EDF5E1" }} />
                </Button>
            </Form>
        );
    }
}

export default CreateOrderForm;