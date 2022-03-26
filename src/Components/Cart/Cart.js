import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
    const {cart} =props;
    let total=0;
    let shipping=0;
    let name;
    let img;
    for(const product of cart){
        name = product.name;
        img = product.image;
    }
    const grandTotal = total;
    return (
        <div className='cart'>
            <h4>Selected Items</h4>
            <div className='row bg-light p-1 border border-1 rounded shadow'>
                <img className="col-md-4" src={img} alt="" />
                <p className="col-md-8"  >{name} </p>
                
            </div>
        </div>
    );
};

export default Cart;