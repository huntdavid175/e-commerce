import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
    return (
        <div className={classes.Card}>
            <div>
            <img src="https://parmsang.github.io/gatsby-starter-ecommerce/static/13eae8f7d28eeb66a999d20f919a4d72/59139/a0063567-2c2a-4546-ba34-7709991ef8f8.png" alt=""></img>

            </div>
            <div className={classes.Info}>
                <div className={classes.infoItem}>
                    <h3>Item Name</h3>
                </div>
                <div className={classes.infoItem}>
                    <h4>Item Quantity && $Price</h4>
                </div>
                <div className={classes.infoItem}>
                    <p>Brief Description of product</p>
                </div>
            </div>

            <div className={classes.Clear}>
                <span>X</span>
            </div>
        </div>
    );
};

export default CartItem;