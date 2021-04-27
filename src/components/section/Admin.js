import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import '../css/Details.css'
import { Row, Col } from 'react-bootstrap'

export class Admin extends Component {
    static contextType = DataContext;
    state = {
        // product: []
    }

    // getProduct = () => {
    //     if (this.props.match.params.id) {
    //         const res = this.context.products;
    //         const data = res.filter(item => {
    //             return item._id === this.props.match.params.id
    //         })
    //         this.setState({ product: data })
    //     }
    // };

    // componentDidMount() {
    //     this.getProduct();
    // }



    render() {
        //const { product } = this.state;
        const { approveProduct, approvalPendingProducts, rejectProduct } = this.context;
        if (approvalPendingProducts.length === 0) {
            return (<>
                <Row>
                    <Col></Col>
                    <Col>
                        <h2 style={{ textAlign: "center", paddingTop: 70 }}>Empty</h2>
                        <img alt="" style={{ marginTop: 30, marginLeft: 100, height: 200, width: 200 }} src="https://image.flaticon.com/icons/png/512/102/102661.png" />
                    </Col>
                    <Col></Col>
                </Row>
            </>)
        } else {
            return (
                <>
                    {
                        approvalPendingProducts.map(item => (
                            <div className="details" key={item._id}>
                                <img src={item.src} alt="" />
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>₹{item.price}/hr</span>
                                    </div>
                                    <p>{item.description}</p>
                                    <hr className="h-line" />
                                    <br />
                                    <div className="row">
                                        <b>Owner Details</b>
                                    </div>
                                    <div><b>Name</b> - {item.ownerName}</div>
                                    <div><b>Adhar No</b>. - {item.ownerAdhar}</div>
                                    <div><b>Address</b> - {item.ownerAddress}</div>
                                    <div><b>Contact No.</b> - {item.ownerContact}</div>
                                    <br />
                                    <Link  to="/admin" className="cart" onClick={() => approveProduct(item)}>
                                        Approve
                                </Link>
                                    <Link  to="/admin" className="cart" onClick={() => rejectProduct(item._id)}>
                                        Reject
                                </Link>
                                </div>
                            </div>
                        ))
                    }
                </>
            )
        }
    }
}

export default Admin
