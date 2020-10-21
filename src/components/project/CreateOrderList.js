import React, { Component } from 'react'
import { Card, Form, Row, Col, Button } from 'react-bootstrap';


const CreateOrderList = ({ order }) => {
    return (
        <Card className="order-card" key={order.id}>
            <Card.Body>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

                    <Card.Title style={{ color: '#ff5c2f', marginLeft: '5px', marginRight: '5px' }}>{order.item}</Card.Title>
                    <Card.Title style={{ marginLeft: '5px', marginRight: '5px' }}>{order.quantity}</Card.Title>
                    <Card.Text style={{ marginLeft: '5px', marginRight: '5px' }}>
                        {order.remarks}
                    </Card.Text>
                    <a href="#" style={{ color: 'red' }}>delete</a>
                </div>

            </Card.Body>
        </Card>
    );
}

export default CreateOrderList;