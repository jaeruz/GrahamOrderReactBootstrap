import moment from 'moment';
import React from 'react'
import { Container, Card } from 'react-bootstrap';
import { FaCartArrowDown } from 'react-icons/fa';


const OrderSummary = ({ order }) => {
    let { dateAdded } = order;
    // console.log(moment(dateAdded).startOf('hour').fromNow())
    return (
        <Card className="dash-pad" >
            <Card.Body>
                <Card.Title>{order.title}</Card.Title>
                <p style={{ color: 'grey' }}>{moment(dateAdded).startOf('minute').fromNow()}</p>
                <Card.Text>
                    {order.orders && order.orders.map(order => {
                        return (
                            order.item + ' '
                        )
                    })}
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Php {order.totalPrice}.00</Card.Subtitle>
                {/* <Card.Link href="#">View Order</Card.Link> */}
            </Card.Body>
        </Card>
    );
}

export default OrderSummary;