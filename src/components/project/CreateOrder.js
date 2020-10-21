import React, { Component } from 'react'
import { Button, Row, Col, Form, Container, Jumbotron } from 'react-bootstrap'
import { FaPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import CreateOrderForm from './CreateOrderForm';
import CreateOrderList from './CreateOrderList';
import { createOrder } from '../../store/actions/OrderActions'
import { connect } from 'react-redux'

class CreateOrder extends Component {

    state = {
        id: '',
        title: '',
        dateAdded: '',
        deliveryDate: '',
        totalPrice: 0.0,
        orders: []
    }

    addOrder = (order) => {
        //temporary
        let price = 0.0;
        switch (order.item) {
            case 'Oreo Graham': {
                price = 100.0;
            }
            case 'GDL (Orig)': {
                price = 120.0;
            }
            case 'GDL (Milo)': {
                price = 120.0;
            }
            case 'GDL (Coffee)': {
                price = 120.0;
            }
        }
        let totPrice = order.quantity * price;
        this.setState({
            totalPrice: this.state.totalPrice + totPrice
        })
        console.log(totPrice)
        //////////////////////////////////
        let orderExist = this.state.orders.find(o => (o.item == order.item) && (o.remarks == order.remarks))
        if (orderExist == null) {
            let AllOrders = [...this.state.orders]
            order.id = AllOrders.length
            let orders = [...this.state.orders, order]

            this.setState({
                orders: orders
            })
        } else {
            let idx = orderExist.id;
            let AllOrders = [...this.state.orders]
            let OrderToMutate = { ...AllOrders[idx] }

            OrderToMutate.quantity = parseInt(OrderToMutate.quantity) + parseInt(order.quantity);
            AllOrders[orderExist.id] = OrderToMutate;
            this.setState({
                orders: AllOrders
            })
        }
        this.setState({
            dateAdded: new Date()
        })
        console.log(this.state)
    }

    deleteOrder = (remarks) => {

    }

    handleSubmit = (e) => {
        if (this.state.title == '' && this.state.deliveryDate == '') {
            alert('Please Enter Complete Information')
        }
        else if (this.state.title == '') {
            alert('Please Provide Title')
        }
        else if (this.state.deliveryDate == '') {
            alert('Please Provide Delivery Date')
        }
        else {
            this.props.addOrder(this.state);
            this.props.history.push('/')
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
    }
    render() {
        const { orders } = this.state;
        return (
            <div>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <h5 className="dash-title">Create Order</h5>
                            <br />
                            <Row>
                                <Form style={{ width: '100%' }}>
                                    <Form.Group as={Col} controlId="title">
                                        <Form.Control type="text" maxLength={20} onChange={this.handleChange} placeholder="Order Title" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="deliveryDate">
                                        <Form.Control type="date" maxLength={20} onChange={this.handleChange} />
                                    </Form.Group>
                                </Form>
                            </Row>
                            <Row>
                                <Col className='pad' style={{ height: '50%' }}>
                                    <CreateOrderForm addOrder={this.addOrder} />
                                </Col>
                            </Row>

                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={7} className='pad' style={{ width: '100%' }}>
                            <br />
                            {orders.length ? (orders.map(order => {
                                return (
                                    <CreateOrderList order={order} />
                                )
                            })) : (
                                    <h5 style={{ textAlign: 'center', color: 'grey' }}>Add List Here</h5>
                                )}
                            <br />
                            {this.state.orders.length ? (
                                <div>
                                    <h5 style={{ float: "right" }}>Php {this.state.totalPrice}.00</h5>
                                    <br />
                                    <br />
                                    <Button variant="success" size="lg" block onClick={this.handleSubmit}>
                                        Submit
                                    </Button>
                                </div>
                            ) : (null)
                            }
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOrder: (order) => dispatch(createOrder(order))
    }
}

const mapStateToProps = (state) => {
    return {
        orderList: state.order.orderList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder);