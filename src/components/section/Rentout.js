import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { DataContext } from '../Context'
export class Rentout extends Component {
  static contextType = DataContext;

  componentDidMount() {
    this.context.getTotal();
  }

  constructor() {
    super();
    this.state = {
      _id: '',
      title: '',
      price: '',
      description: '',
      src: '',
      ownerName: '',
      ownerAdhar: '',
      ownerAddress: '',
      ownerContact: '',
      count: 1
    }
    // this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleTitleChange = (evt) => {
    this.setState({ title: evt.target.value });
  };
  handlePriceChange = (evt) => {
    this.setState({ price: evt.target.value });
  };
  handleDescriptionChange = (evt) => {
    this.setState({ description: evt.target.value });
  };
  handleOwnerNameChange = (evt) => {
    this.setState({ ownerName: evt.target.value });
  };
  handleOwnerAdharChange = (evt) => {
    this.setState({ ownerAdhar: evt.target.value });
  };
  handleOwnerAddressChange = (evt) => {
    this.setState({ ownerAddress: evt.target.value });
  };
  handleOwnerContactChange = (evt) => {
    this.setState({ ownerContact: evt.target.value });
  };
  

  handleImageChange(e) {
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({
        file: file,
        src: reader.result,
      });
      console.log(this.state)
      //this.handleSubmit()
    };
  }

  render() {
    const { addProduct } = this.context;
    return (
      <Container style={{ paddingTop: 120 }}>
        <Row>
          <Col>
          <Form>
              <Form.Group controlId="rentOutForm.title">
                <Form.Label>Item Name</Form.Label>
                <Form.Control name="title" type="text" placeholder="Item Name" value={this.state.title} onChange={(event) => this.handleTitleChange(event)} />
              </Form.Group>
              <Form.Group controlId="rentOutForm.description">
                <Form.Label>Item Description</Form.Label>
                <Form.Control name="description" as="textarea" rows={1} value={this.state.description} onChange={(event) => this.handleDescriptionChange(event)} />
              </Form.Group>
              <Form.Group controlId="rentOutForm.src">
                <Form.Label>Item Image</Form.Label>
                <Form.File name="src"
                  id="custom-file"
                  label="Choose Item Image"
                  custom onChange={(event) => this.handleImageChange(event)}
                />
              </Form.Group>
              <Form.Group controlId="rentOutForm.price">
                <Form.Label>Item Price</Form.Label>
                <Form.Control name="price" type="text" placeholder="Item Price" value={this.state.price} onChange={(event) => this.handlePriceChange(event)} />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="rentOutForm.name">
                <Form.Label>Owner Name</Form.Label>
                <Form.Control name="ownerName" type="text" placeholder="Owner Name" value={this.state.ownerName} onChange={(event) => this.handleOwnerNameChange(event)} />
              </Form.Group>
              <Form.Group controlId="rentOutForm.adhar">
                <Form.Label>Owner Adhar No</Form.Label>
                <Form.Control name="ownerAdhar" type="text" placeholder="Owner Adhar No" value={this.state.ownerAdhar} onChange={(event) => this.handleOwnerAdharChange(event)} />
              </Form.Group>
              <Form.Group controlId="rentOutForm.contact">
                <Form.Label>Owner Contact</Form.Label>
                <Form.Control name="ownerContact" type="text" placeholder="Owner Contact" value={this.state.ownerContact} onChange={(event) => this.handleOwnerContactChange(event)} />
              </Form.Group>
              <Form.Group controlId="rentOutForm.address">
                <Form.Label>Owner Address</Form.Label>
                <Form.Control name="ownerAddress" as="textarea" rows={1} value={this.state.ownerAddress} onChange={(event) => this.handleOwnerAddressChange(event)} />
              </Form.Group>
              <Button onClick={() => addProduct(this.state)} variant="outline-dark">Submit</Button>
            </Form>
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Rentout
