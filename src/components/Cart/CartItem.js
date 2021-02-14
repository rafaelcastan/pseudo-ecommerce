import React, { Component } from 'react';
function CartItem ({item,value,actualIndex}) {
    const{id,name,image,price}=item;
    const{cartTotal, removeItem, addToCart, deleteItem} = value;
    const quantity = value.quantity[actualIndex].quantity;
    const totalItemValue = quantity*price;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={"assets/"+image} style={{width:'5rem',height:"5rem"}}
                className="img-fluid" alt={name}
                />
            </div>       
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product :</span>
                {name}
            </div>        
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price :</span>
                ${price}
            </div>        
            <div className="col-10 mx-auto col-lg-2 my=2 my=lg=0">
                <div className="d-flex justify-content-center">
                    <span className="btn btn-black mx-1" onClick={()=>removeItem(id)}>
                        -
                    </span>
                    <span className="btn btn-black mx-1">{quantity}</span>
                    <span className="btn btn-black mx-1" onClick={()=>addToCart(id)}>
                        +
                    </span>
                </div>
            </div>
            {/* */}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>deleteItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total : ${totalItemValue}</strong>  
            </div> 
        </div>
    );
}

export default CartItem;