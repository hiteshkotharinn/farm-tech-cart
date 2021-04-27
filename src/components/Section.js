import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import {Route} from "react-router-dom"
import Cart from './section/Cart'
import Payment from './section/Payment'
import About from './section/About'
import Rentout from './section/Rentout'
import Admin from './section/Admin'

export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={About} exact />
                    <Route path="/product" component={Products} exact  />
                    <Route path="/product/:id" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/payment" component={Payment} exact />
                    <Route path="/rentout" component={Rentout} exact />
                    <Route path="/shopping-cart-react" component={About} exact />
                    <Route path="/admin" component={Admin} exact />
            </section>
        )
    }
}

export default Section
