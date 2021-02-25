import React from 'react';
import { useCart } from '../../providers/context';

const Cart = ()=>{
    const {cart, count, total} = useCart();
  
    
    return(
        <div> 
            {cart.map(item=> ( 
                        <p>{item.brand} - {item.price} - {item.count}</p>
                ))} 
        </div>
    )
}

export default Cart;