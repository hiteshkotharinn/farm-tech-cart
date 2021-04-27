import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import '../css/Products.css'
import {InputGroup, FormControl} from 'react-bootstrap'

export class Products extends Component {

    static contextType = DataContext;

    constructor() {
        super();
        this.state = {
            searchText : ''
        }
      }


    handleSearchChange = (evt) => {
        this.setState({ searchText: evt.target.value });
      };

    render() {
        const { products, addCart } = this.context;
        return (
            <div id="product">
                <div className="container">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search" name="searchText" onChange={this.handleSearchChange}
                        />
                    </InputGroup>
                </div>
                {
                    products.filter(key => key.title.toLowerCase().includes((this.state.searchText).toLowerCase())).map(product => (
                        <div className="card" key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <img src={product.src} alt="" />
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                                </h3>
                                <span>₹{product.price}/hr</span>
                                <p>{product.description}</p>
                                <button onClick={() => addCart(product._id)}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Products
