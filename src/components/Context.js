import React, { Component, useContext, useState} from 'react';
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state={
        products: require('../products.json'),
        cart:[],
        quantity:[], /*number of itens in the cart*/
        cartShipping:0,/*shipping value*/
        cartTotal:0/*total value of products*/
    }

    filterAlphabetic = () =>{
        const alpha = this.state.products.sort((a, b) => (a.name > b.name) ? 1 : -1);
        this.setState({ 
            products : alpha,
        })
    }

    filterScoreInc = () =>{
        const score = this.state.products.sort((a, b) => (a.score > b.score) ? 1 : -1);
        this.setState({ 
            products : score,
        })
    }

    filterScoreDec = () =>{
        const score = this.state.products.sort((a, b) => (a.score > b.score) ? -1 : 1);
        this.setState({ 
            products : score,
        })
    }

    filterPriceInc = () =>{
        const price = this.state.products.sort((a, b) => (a.price > b.price) ? 1 : -1);
        this.setState({ 
            products : price,
        })
    }
    filterPriceDec = () =>{
        const price = this.state.products.sort((a, b) => (a.price > b.price) ? -1 : 1);
        this.setState({ 
            products : price,
        })
    }

    getQuantityIndex = (id)=>{
        let index = this.state.quantity.findIndex(val => val.id === id);
        return(index);
    }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
      };
    
    addToCart = (id) =>{
        const product = this.getItem(id)
        this.setState({ 
            cart : [...this.state.cart,product],
            cartTotal:(this.state.cartTotal+product.price),}
            , () => {this.ShippingCalc();this.ItensCount(id)
        })
    };

    ItensCount = (id) =>{
        let index = this.getQuantityIndex(id);
        if(index>-1){
            const incrementItem = [...this.state.quantity];
            incrementItem[index].quantity=incrementItem[index].quantity+1;
            this.setState({ 
                quantity : incrementItem,
        })
        }
        else{
            this.setState({ 
                quantity : [...this.state.quantity,{id:id,quantity:1}]
        })     
        }
    };

    ItensCountRemove = (id) =>{
        let index = this.getQuantityIndex(id);
            const decrementItem = [...this.state.quantity];
            decrementItem[index].quantity = decrementItem[index].quantity-1;
            this.setState({ 
                quantity : decrementItem,    
        })
    }
    
    ItensCountDelete = (id) =>{
        console.log(this.state.cart)
        let index = this.getQuantityIndex(id);
            const decrementItem = this.state.quantity.filter(value=>value.id!=id);
            console.log(this.state.quantity)
            console.log(decrementItem)
            this.setState({ 
                quantity : decrementItem,    
        })
    }

    deleteItem = (id) =>{
        const product = this.getItem(id);
        const deleteItem = this.state.cart.filter(val=>val.id!=id);

        let index = this.getQuantityIndex(id);
        const removeValue= this.state.quantity[index].quantity*product.price;
        this.setState({ 
            cart : deleteItem,
            cartTotal:this.state.cartTotal-removeValue,}
            , () => {this.ShippingCalc();this.ItensCountDelete(id)
        })
    };


    ShippingCalc = (value=this.state.cartTotal) =>{
        if (value>=250)
        {
            this.setState({cartShipping:(0)})
        }
        else
        {
            this.setState({cartShipping:(this.state.cart.length*10)})
        }
    }

    removeItem = (id) =>{
        const product = this.getItem(id)
        let index = this.state.cart.findIndex(val => val.id === id);
        const itemRemoved = [...this.state.cart];
        itemRemoved.splice(index,1);
        this.setState({ 
            cart : itemRemoved,
            cartTotal:this.state.cartTotal-product.price,}
            , () => {this.ShippingCalc();this.ItensCountRemove(id)
        })
    };

    clearCart = () =>{
        this.setState({ cart : [],
                        quantity:[],
                        cartShipping:0,
                        cartTotal:0})
      
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                addToCart:this.addToCart,
                getItem:this.getItem,
                removeItem:this.removeItem,
                clearCart:this.clearCart,
                deleteItem:this.deleteItem,
                getQuantityIndex:this.getQuantityIndex,
                filterAlphabetic:this.filterAlphabetic,
                filterPriceInc:this.filterPriceInc,
                filterPriceDec:this.filterPriceDec,
                filterScoreInc:this.filterScoreInc,
                filterScoreDec:this.filterScoreDec,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
  
export {ProductProvider,ProductConsumer};