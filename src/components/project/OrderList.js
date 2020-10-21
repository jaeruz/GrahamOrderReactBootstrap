import React from 'react'
import { Container } from 'react-bootstrap';
import OrderSummary from './OrderSummary';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const OrderList = (props) => {
    return (
        <Container>
            <h5 className="dash-title">Orders</h5>
            {props.orders && props.orders.map(order => {
                return (
                    <Link className='links' to={'/order/' + order.id} key={order.id}><OrderSummary order={order} /></Link>
                )
            })}


            {/* <OrderSummary />
            <OrderSummary />
            <OrderSummary /> */}
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        orders: state.firestore.ordered.orders
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'orders' }
    ])
)(OrderList);