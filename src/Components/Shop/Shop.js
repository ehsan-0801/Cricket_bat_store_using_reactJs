import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
     useEffect(()=>{
         fetch('product.json')
         .then(res => res.json())
         .then(data => setProducts(data))
     },[]) 
    return (
        <div className="bg-custom">
            <div className="row">
                <div className="product_contianer col-md-9 col-sm-12">
                {
                     products.map(product =><Product
                     key={product.id}
                     product={product}
                     ></Product>)
                 }
                </div>
                <div className="cart_container col-md-3 col-sm-12 ">
                    <h4 className="text-danger">Order Summary</h4>
                </div>
            </div>
        </div>
    );
};

export default Shop;