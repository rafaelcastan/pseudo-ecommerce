import React, { Component } from 'react';

function CartTotals ({value}) {
    const {cartTotal, cartShipping, clearCart} = value;
    const TotalValue= twoDigits(cartTotal+cartShipping);
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                            type="button" onClick={()=> clearCart()}>
                                clear Cart
                            </button>
                            <h5>
                                <span className="text-title">subtotal :</span>
                                <strong>${twoDigits(cartTotal)} </strong>
                            </h5>
                            {(cartShipping===0)?(
                                <h5>
                                <span className="text-title">tax :</span>
                                <span className="text-title text-success">free</span>
                            </h5>
                            ):
                            (<h5>
                                <span className="text-title">tax :</span>
                                <strong>$ {cartShipping}</strong>
                            </h5>
                            )}
                            <h5>
                                <span className="text-title">total :</span>
                                <strong>$ {TotalValue}</strong>
                            </h5>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
}

function twoDigits (value){
    return value.toLocaleString({minimumFractionDigits: 2})
}

export default CartTotals;