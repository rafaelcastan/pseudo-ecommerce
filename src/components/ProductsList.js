import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from './Context';

class ProductsList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-3">
                    <div className="container">
                            <Title name="our" title="games"></Title>
                            <ProductConsumer>
                            {/*using ProductConsumer to change the products state in context*/}
                            {(value)=>{
                                return(
                                <Dropdown  className="text-right" id="filter-background">
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Filter
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => {value.filterAlphabetic()}}>Alphabetic order</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {value.filterPriceInc()}}>Price Increasing</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {value.filterPriceDec()}}>Price Decreasing</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {value.filterScoreInc()}}>Score Increasing</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {value.filterScoreDec()}}>Score Decreasing</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            )}}
                            </ProductConsumer>
                            <div className="row">
                                <ProductConsumer> 
                                    {/*Using Consumer to get products from context state*/}
                                    {(value)=>{
                                       return value.products.map(product=>{
                                           return <Product key={product.id} product={product}/>
                                       })
                                    }}
                                </ProductConsumer>
                        </div>
                    </div>    
                </div>
                <div className="IconsAuthor">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from 
                <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

            </React.Fragment>
        );
    }
}

export default ProductsList;