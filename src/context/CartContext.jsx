import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const updateCart = [...cart, product]
        setCart(updateCart)
    }

    const removeFromCart = (itemToRemove) => {
        const updateCart = cart.filter((item) => item.id !== itemToRemove.id)
        setCart(updateCart)
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext)
}