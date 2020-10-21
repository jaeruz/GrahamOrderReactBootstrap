import React, { Component } from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap';
import OrderList from '../project/OrderList';
import Notification from './Notification'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'


class Dashboard extends Component {
    state = {}
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={3}>
                        <Notification />
                    </Col>
                    <Col lg={9}>
                        <OrderList />
                    </Col>
                </Row>
            </Container>
        );
    }
}

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         projects: state.firestore.ordered.orders
//     }
// }

export default Dashboard//compose(
//     connect(mapStateToProps),
//     firestoreConnect([
//         { collection: 'orders' }
//     ])
// )(Dashboard);