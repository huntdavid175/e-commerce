import React from "react";
import classes from './ProductCard.module.css';
import PropTypes from 'prop-types';

const productCard = (props) => {
  return (
    <div className={classes.Product} onClick={props.clicked.bind(this, props.productId)}>
     
        <img src={props.imgUrl} alt={props.title}></img>
     
      <div className={classes.TextArea}>
          <h4>{props.title}</h4>
          <p>${props.price}</p>
      </div>
    </div>
  );
};

productCard.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  productId: PropTypes.number,
  clicked: PropTypes.func
}

export default productCard;
