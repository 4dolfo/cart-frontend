import React, { useContext, useEffect, useState } from 'react';

const CartContext = React.createContext();

export default function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState();
    const [count, setCount] = useState();

    useEffect(()=>{
        let value=0;
        let cant = 0;
        console.log(cart);
        cart.map(item=>{
            value = value + item.price*item.count;
            cant = cant + item.count;
        })
        setTotal(value);
        setCount(cant);
    }, [cart])

    const add = (item) => {
        let newCart = cart;
        
        const index = newCart.findIndex(it => it.id === item.id);
        console.log("index",index)
        if(index!=-1){
            newCart[index].count++;
        }
        else{
            const obj = {
                id:item.id,
                brand: item.brand,
                price: item.price,
                count: 1
            }
            newCart.push(obj);
        }
        setCart([...newCart]);
    }
    const store={
        cart,
        total,
        add,
        count
    }
    return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext);
    const {
        cart,
        total,
        add,
        count
    } = context;
    return {
        cart,
        total,
        add,
        count
    }
}