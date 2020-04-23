import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"


export default () => {
    const { products } = useContext(ProductContext)

    return (
        <>
            <h2>Products</h2>
            <div className="products">
                {
                    products.map(product => <Product key={product.id} product={product} />)
                }
            </div>
        </>
    )
}