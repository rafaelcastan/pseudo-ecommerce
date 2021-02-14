import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from './Context';

class ProductsList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                            <Title name="our" title="games"></Title>
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