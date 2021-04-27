import React, { Component } from 'react'
import { Carousel, Row, Container, Col, Navbar } from 'react-bootstrap'

export class About extends Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://www.jfarmservices.in/img/MF-Tractor-Fleet.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Farmer-2-Farmer tractor Rental </h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://www.jfarmservices.in/img/MF-implement.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.jfarmservices.in/img/eicher-implement.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <h3>How FTC Works</h3>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <img
                className="d-block w-100"
                src="https://www.jfarmservices.in/img/jfs-gif/farmer.gif"
                alt="Looking to Hire a Tractor or Implement"
              />
            </Col>
            <Col>
              <img
                className="d-block w-100"
                src="https://www.jfarmservices.in/img/jfs-gif/customer-service.gif"
                alt="Looking to Hire a Tractor or Implement"
              />
            </Col>
            <Col>
              <img
                className="d-block w-100"
                src="https://www.jfarmservices.in/img/jfs-gif/tractors.gif"
                alt="Looking to Hire a Tractor or Implement"
              />
            </Col>
            <Col>
              <img
                className="d-block w-100"
                src="https://www.jfarmservices.in/img/jfs-gif/consultation.gif"
                alt="Looking to Hire a Tractor or Implement"
              />
            </Col>
            <Col>
              <img
                className="d-block w-100"
                src="https://www.jfarmservices.in/img/jfs-gif/happy-farmer.gif"
                alt="Looking to Hire a Tractor or Implement"
              />
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <Navbar bg="dark" variant="dark">
          <Navbar style={{color:"white"}} className="ml-auto">
            Design By Farm Tech Cart
         </Navbar>
        </Navbar>
      </>
    )
  }
}

export default About
