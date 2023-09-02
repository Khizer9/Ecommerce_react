import { useEffect } from "react";
import { createContext } from "react";
import { ProductApi } from "../api";
import { useState } from "react";
import { useContext } from "react";

const ProductContaxt = createContext();

export function ProductProvider({children}){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      ProductApi().then((res) => {
        setData(res.products)
        setLoading(true)
      })
    }, []);

    return(
        <ProductContaxt.Provider value={{data, loading}}>
            {children}
        </ProductContaxt.Provider>
    )
}

export function useData(){
    return useContext(ProductContaxt)
}