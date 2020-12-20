import React from 'react';
import CartItem from '../CartItem/CartItem';
import classes from './CartItems.module.css';

const CartItems = (props) => {
    return (
        <div className={classes.Items}>
            <CartItem />
        </div>
    );
};

export default CartItems;