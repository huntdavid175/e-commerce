import React from 'react';
import classes from './CartTotal.module.css';

const CartTotal = (props) => {
    return (
        <div className={classes.Card}>
            <div>
                <h4>Sub total: <span>$5,000</span></h4>
            </div>
            <div>
                <button>Checkout</button>
            </div>
        </div>
    );
};

export default CartTotal;