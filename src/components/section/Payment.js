import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

export class Payment extends Component {
    render() {
        return (<>
            <Row>
                <Col></Col>
                <Col>
                    <h2 style={{ textAlign: "center", paddingTop: 120 }}>Payment successful</h2>
                    <img alt="" style={{ marginTop: 30, marginLeft: 100, height: 200, width: 200 }} src="https://media.wponlinesupport.com/wp-content/uploads/2015/11/payment-successful.png" />
                </Col>
                <Col></Col>
            </Row>
        </>)
    }
}

export default Payment
