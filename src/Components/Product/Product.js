import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {handleAddToCart, product} = props;
    const {name, image, price} = props.product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className='product_info'>
                <h3 className='product_name'>{name}</h3>
                <p>Price: {price} Taka(BDT)</p>
            </div>
            <button onClick={() =>handleAddToCart(product)} className='btn-cart'>
                <p className='btn_text fs-5 fw-bold'>Add to Cart </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;