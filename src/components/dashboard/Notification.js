import React from 'react'
import { Container, ListGroup } from 'react-bootstrap';


const Notification = () => {
    return (
        <Container>
            <h5 className="dash-title">Notifications</h5>
            <ListGroup style={{ marginTop: '20px', borderRadius: '10px' }}>
                <ListGroup.Item variant="primary">You have 3 new message.</ListGroup.Item>
                <ListGroup.Item variant="secondary">Order Processing.</ListGroup.Item>
                <ListGroup.Item variant="success">Order Approved!</ListGroup.Item>
                <ListGroup.Item variant="danger">Order Declined.</ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default Notification;