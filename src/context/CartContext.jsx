import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){

    useEffect(()=> {
        const savedCart = localStorage.getItem('cart')
        if(savedCart){
            setCart(JSON.parse(savedCart))
        }
    }, [])

    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        debugger
        const productIndex = cart.findIndex((cart) => cart.id === product.id)

        if(productIndex !== -1){
            const updateCart = [...cart]
            updateCart[productIndex].quantity += 1 
            setCart(updateCart)
        }else{
            const updatedCart = [...cart, { ...product, quantity: 1 }];
            setCart(updatedCart);
        }

        // const updateCart = [...cart, product]
        // setCart(updateCart)
    }

    const removeFromCart = (itemToRemove) => {
        const updateCart = cart.filter((item) => item.id !== itemToRemove.id)
        setCart(updateCart)
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext)
}