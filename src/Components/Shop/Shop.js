import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart)
     useEffect(()=>{
         fetch('product.json')
         .then(res => res.json())
         .then(data => setProducts(data))
     },[]) 
     const handleAddToCart = (product)=>{
        const newcart = [...cart, product];
        setCart(newcart);
     }
    return (
        <div className="bg-custom">
            <div className="row">
                <div className="product_contianer col-md-9 col-sm-12">
                {
                     products.map(product =><Product
                     key={product.id}
                     product={product}
                     handleAddToCart={handleAddToCart}
                     ></Product>)
                 }
                </div>
                <div className="cart_container col-md-3 col-sm-12 ">
                    <div>
                        {
                            cart.map((product)=>(
                                <div className="bg-light p-1 border border-1 rounded my-1">
                                    <img className='cartimg' src={product.image} alt='cartimg'/>
                                     <h6 className="" key={product.id}>{product.name} </h6>
                                </div>
                               
                                
                            ))
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Shop;