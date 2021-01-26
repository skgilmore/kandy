import React from "react"
import { Link } from "react-router-dom"

// import "./Location.css"

export const ProductCard = ({ product }) => (
    <section className="product">
        <h2>Products:</h2>
          <Link to={`/products`}>
          
        </Link>
        <h3 className="product__name">{product.name}</h3>
        <div className="product__price">{product.price}</div>
        <div className="product__type">{product.productTypeId.type}</div>

    </section>
)