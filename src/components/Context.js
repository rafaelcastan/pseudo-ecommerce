import React, { Component } from 'react';

const ProductContext = React.createContext();

    

class ProductProvider extends Component {
    state={
        products: require('../products.json'),
        cart:[Array]
    }
    products=require('../products.json');
    
    addToCart = (id) =>{
        this.cart= [this.cart,...id];
        console.log(this.cart);
        return true;
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                addToCart:this.addToCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};