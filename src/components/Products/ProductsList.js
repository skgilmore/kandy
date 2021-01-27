import React, { useContext, useEffect } from "react"
import { ProductsContext } from "./ProductsProvider"
import { ProductCard } from "./ProductsCard"
// import "./Location.css"



export const ProductList = () => {

    const { products, getProducts } = useContext(ProductsContext)
console.log(products,"products got?")
    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("ProductsList: useEffect getProducts")
        getProducts()

    }, [])
  

    return (
        <div className="products">
            {console.log("ProductList: Render", products)}
            {
                products.map((product) => {
                    return <ProductCard  key={product.id} product={product} />
                })
            }
        </div>
    )
}
