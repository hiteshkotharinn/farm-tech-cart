import React, { Component } from 'react'
import CartIcon from './svg/shopping-cart-solid.svg'
import { Link } from 'react-router-dom'
import './css/Header.css'
import { DataContext } from './Context'
import { Navbar, Nav } from 'react-bootstrap'


export class Header extends Component {
  static contextType = DataContext;

  state = {
    toggle: false
  }

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }


  render() {
    // const { toggle } = this.state;
    const { cart } = this.context;
    return (
      <>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://cdn2.vectorstock.com/i/thumb-large/96/31/farm-technology-logo-design-template-vector-20929631.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Farm Tech Cart</Navbar.Brand>
          <Nav className="ml-auto color">
            <Nav><Link to="/">About</Link></Nav>
            <Nav><Link to="/product">Items</Link></Nav>
            <Nav><Link to="/rentout">Rent-Out</Link></Nav>
            <Nav><Link to="/admin">Admin</Link></Nav>
          </Nav>
          <div className="nav-cart">
            <span>{cart.length}</span>
            <Link to="/cart">
              <img src={CartIcon} alt="" width="20" />
            </Link>
          </div>
        </Navbar>
      </>
    )
  }
}

export default Header
