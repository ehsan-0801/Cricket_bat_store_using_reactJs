import React from 'react';
import './Product.css';
const Product = (props) => {
    const {name, image, price} = props.product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className='product_info'>
                <h3 className='product_name'>{name}</h3>
                <p>Price: {price} Taka(BDT)</p>
            </div>
            <button className='btn-cart'>
                <p className='btn_text fs-4 fw-bold'>Add to Cart </p>
            </button>
        </div>
    );
};

export default Product;