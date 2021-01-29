import React, { useState, createContext } from "react"

export const ProductsContext = createContext()

// This component establishes what data can be used.
export const  ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8088/products?_embed=orders&_embed=product&_embed=type")
        .then(res => res.json())
        .then(setProducts)
    }

    const addProducts = productObj => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj)
        })
        .then(getProducts)
    }
        /*
        You return a context provider which has the
        `locations` state, `getProducts` function,
        and the `addCustomers` function as keys. This
        allows any child addProducts to access them.
    */
   return (
    <ProductsContext.Provider value={{
        products, getProducts, addProducts
    }}>
        {props.children}
    </ProductsContext.Provider>
)
}