import React, { Component } from 'react';
import Styled from 'styled-components';
import {ProductConsumer} from './Context'

class Product extends Component {
    render() {
        const{id,name,price,score,image,inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5">
                        <img src={"assets/"+image} alt={name} className="card-img-top"/>
                        <i class="score fas fa-star">{score}</i>
                        <button className="cart-btn" onClick={() => {console.log(id)}}>
                        <img className="btn-image" src="assets/cart-icon.svg"/>
                        </button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="alig-self-center mb-0 text-center">{name}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>{price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

const ProductWrapper = Styled.div`
    .card{
        border-color:transparent;
        transition: all 1s linear;
    }
    .card-footer{
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;
    }
    &:hover{
        .card{
            border:0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2)
        }
        .card-footer{
            background: rgba(247,247,247);
        }
    }
    .img-container{
        position:relative;
        overflow:hidden;
    }
    .card-img-top{
        transition: all 1s linear;
        transform:scale(1.1);
    }
    .img-container:hover .card-img-top{
        transform:scale(1.3);
    }
    .btn-image{
        width:3rem;
        height:2rem;
    }
    .cart-btn{
        height:3rem;
        position:absolute;
        bottom: 0;       
        right:0;
        pading:0.2rem 0.4rem; 
        background:var(--lightBlue);
        border:none;
        color:var(--mainWhite);
        font-size:1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform:translate(100%);
        transition: all 1s linear;
    }
    .img-container:hover .cart-btn{
        transform:translate(0,0);
    }
    .cart-btn:hover{
        background:var(--mainBlue);
    }
    .score{
        position:absolute;
        top:0.2rem;
        right:0.3rem;
        pading:0.2rem 0.4rem; 
        border:none;
        color:var(--mainYellow);
        font-size:2rem;
    }
`

export default Product;