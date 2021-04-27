import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import '../css/Details.css'
import '../css/Cart.css'
import { Row, Col } from 'react-bootstrap'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal();
    }

    render() {
        const { cart, removeProduct, total, clearCart } = this.context;
        if (cart.length === 0) {
            return (<>
                <Row>
                    <Col></Col>
                    <Col>
                        <h2 style={{ textAlign: "center", paddingTop: 70 }}>Your Cart is Empty</h2>
                        <img alt="" style={{ marginTop: 30, marginLeft: 100, height: 200, width: 200 }} src="https://image.flaticon.com/icons/png/512/102/102661.png" />
                    </Col>
                    <Col></Col>
                </Row>
            </>)
        } else {
            return (
                <>
                    {
                        cart.map(item => (
                            <div className="details cart" key={item._id}>
                                <img src={item.src} alt="" />
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>₹{item.price * item.count}</span>
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment" onClick={() => clearCart()}>Payment</Link>
                        <h3>Total: ₹{total}</h3>
                    </div>
                </>
            )
        }
    }
}

export default Cart
