import React, { Component, useContext } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components'
import ButtonContainer from './Button'
import { ProductConsumer } from './Context';

class Navbar extends Component {
    
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 sticky-top">
                <Link to="/">
                    <img src={logo} alt="GameStore"
                    className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <img  className="cartIcon" src="assets/cart-icon.svg"/>Cart
                    <ProductConsumer>
                         {/*Using Consumer to get changes information in context state*/}
                        {value =>{
                            if(value.cart.length>0){
                            return(
                                    <span className="CartItens align-top" >{value.cart.length}</span>
                            )
                        }
                        }}
                    </ProductConsumer>
                    </span>
                </ButtonContainer>
                </Link>
                
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    position:sticky;
    background:var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform: capitalize;
    }
    .nav-link:hover{
        font-size:1.4rem;
    }
    .navbar-brand{
        height: 4.5rem;
    }
    .cartIcon{
        height:1.9rem;
    }
    .CartItens{
        color:red;
        font-size:1.15rem;
    }
`

export default Navbar;