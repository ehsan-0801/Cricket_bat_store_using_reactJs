import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    //useStates
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
     useEffect(()=>{
         fetch('product.json')
         .then(res => res.json())
         .then(data => setProducts(data))
     },[]) 
     //add to cart 
     const handleAddToCart = (product)=>{
        const newcart = [...cart, product];
        const uniqeArray = newcart.filter((item, index) => newcart.indexOf(item) === index);
        if(uniqeArray.length <= 4){
            setCart(uniqeArray);
            console.log(uniqeArray)
        }
        else{
            alert("You can not choose more than 4")
        }
        
     }
     const emptylist=()=>{
        setCart([])
     }
     //randomly choosen one.
     const randomChooseOne = (cart)=> {
        const index = Math.round((Math.random() * 3));
        console.log(index)
        const randomProduct = cart[index]
        console.log(randomProduct)
        setCart([randomProduct])
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
                        <h3 className='fw-bold text-primary mb-5'>Selected Products</h3>
                        {
                            cart.map((product)=>(
                                <div key={product.id} className="row bg-light p-1 border border-1 rounded my-1">
                                    <img className='cartimg col-md-2' src={product.image}  alt='cartimg'/>
                                     <h6 className="text-primary col-md-10" >{product.name} </h6>
                                </div>
                            ))
                            
                        }
                        <button onClick={() =>randomChooseOne(cart)} className='btn btn-primary px-5'>Choose 1 For me</button>
                        <button onClick={() =>emptylist()} className='btn btn-danger px-5'>Choose Again</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;