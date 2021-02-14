import React, { Component } from 'react';
import CartItem from './CartItem';

function CartList ({value}) {
    const cart = [...new Set(value.cart)];
    return (
        <div className="container-fluid">
            {cart.map((item,index)=>{
                return<CartItem key={index} item={item} value={value} actualIndex={index}/>
            })}
        </div>
    );
}

export default CartList;