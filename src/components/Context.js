import React, { Component } from 'react'
import { toast } from 'react-toastify';

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Mahindra 233",
                "src": "https://5.imimg.com/data5/JN/IN/MY-38349855/mahindra-shaktimaan-tractor-500x500.jpg",
                "description": "Tractor, high-power, low-speed traction vehicle",
                "price": 230,
                "count": 1,
                "ownerName": "Joseph Clark",
                "ownerAdhar": "923849484940",
                "ownerAddress": "5013  Golden Ridge Road, NY - 448585",
                "ownerContact": "9988773039"
            },
            {
                "_id": "2",
                "title": "Rotavator 02",
                "src": "https://5.imimg.com/data5/ON/GF/OH/SELLER-10699847/tractor-agriculture-cultivators-500x500.jpg",
                "description": "Tractor, high-power, low-speed traction vehicle",
                "price": 190,
                "count": 1,
                "ownerName": "Adam Bond",
                "ownerAdhar": "923849484940",
                "ownerAddress": "MIDC Kharine Village, Vashi - 456788",
                "ownerContact": "9988931415"
            },
            {
                "_id": "3",
                "title": "Rotavator 03",
                "src": "https://5.imimg.com/data5/SF/FV/MY-5136916/tractor-loader-attachment-500x500.jpg",
                "description": "Tractor, high-power, low-speed traction vehicle",
                "price": 500,
                "count": 1,
                "ownerName": "John Butler",
                "ownerAdhar": "923849484940",
                "ownerAddress": "Shukla Cmpd, Dahisar - 445689",
                "ownerContact": "8866382938"
            }
        ],
        cart: [],
        total: 0,
        approvalPendingProducts: []
    };

    showError = (message) => {
        toast.error(message);
    }

    showSuccess = (message) => {
        toast.success(message);
    }

    showInfo = (message) => {
        toast.warn(message);
    }

    addCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            this.setState({ cart: [...cart, ...data] })
            this.showSuccess("The product added to cart.")
        } else {
            this.showInfo("The product already added to cart.")
        }
    };

    clearCart = () =>  {
        const { cart } = this.state;
        cart.length = 0;
        this.setState({ cart: cart });
        this.getTotal();
    }

    reduction = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        this.setState({ cart: cart });
        this.getTotal();
    };

    increase = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1;
            }
        })
        this.setState({ cart: cart });
        this.getTotal();
    };

    removeProduct = id => {
        if (window.confirm("Do you want to delete this product?")) {
            const { cart } = this.state;
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })
            this.setState({ cart: cart });
            this.getTotal();
            this.showSuccess("Product Removed Sucessfully")
        }

    };

    addProduct = product => {
        if (product.title !== '') {
            const { approvalPendingProducts } = this.state;
            product._id = (approvalPendingProducts.length + 1).toString();
            if (window.confirm("Do you want to add this product?")) {
                approvalPendingProducts.push(product)
                this.setState({ approvalPendingProducts: approvalPendingProducts });
                this.getTotal();
                this.showSuccess("Product Added Sucessfully")
            }
        }
    };

    approveProduct = product => {
        const { products, approvalPendingProducts } = this.state;
        product._id = (products.length + 1).toString();
        if (window.confirm("Do you want to approve this product?")) {
            products.push(product)
            this.setState({ products: products });
            this.getTotal();
            this.showSuccess("Product Approved Sucessfully")

            approvalPendingProducts.forEach((item, index) => {
                if (item._id === product._id) {
                    approvalPendingProducts.splice(index, 1)
                }
            })
        }
    };

    rejectProduct = id => {
        if (window.confirm("Do you want to reject this product?")) {
            const { approvalPendingProducts } = this.state;
            approvalPendingProducts.forEach((item, index) => {
                if (item._id === id) {
                    approvalPendingProducts.splice(index, 1)
                }
            })
            this.setState({ approvalPendingProducts: approvalPendingProducts });
            this.getTotal();
            this.showSuccess("Product Rejected Sucessfully")
        }

    };

    getTotal = () => {
        const { cart } = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        }, 0)
        this.setState({ total: res })
    };

    componentDidUpdate() {
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount() {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if (dataCart !== null) {
            this.setState({ cart: dataCart });
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if (dataTotal !== null) {
            this.setState({ total: dataTotal });
        }
    }


    render() {
        const { products, cart, total, approvalPendingProducts } = this.state;
        const { clearCart, addCart, reduction, increase, removeProduct, getTotal, addProduct, approveProduct, rejectProduct } = this;
        return (
            <DataContext.Provider
                value={{ products, addCart, clearCart, cart, reduction, increase, removeProduct, total, getTotal, addProduct, approveProduct, approvalPendingProducts, rejectProduct }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


