import React, { Component } from 'react';
import ProductCard from '../../components/Products/ProductCard';
import classes from './ProductsContainer.module.css'

class ProductsContainer extends Component {
    render() {
        return (
            <div>
                <h1 style={{marginBottom: "55px"}}> Blood is thicker than water </h1>
                <div className={classes.Products}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                </div>
                
            </div>
        );
    }
}

export default ProductsContainer;