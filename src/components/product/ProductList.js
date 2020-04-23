import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import { ProductTypeContext } from "../productType/ProductTypeProvider"


export default () => {
    const { products } = useContext(ProductContext)
    const { productTypes } = useContext(ProductTypeContext)

    return (
        <>
            <h2>Products</h2>
            <div className="products">
                {
                    products.map(product => {
                    
                        const matchingProductType = productTypes.find(pt => pt.id === product.productTypeId)
                       
                        return <Product key={product.id} product={product} 
                                productType={matchingProductType}/>
                    })
                }
            </div>
        </>
    )
}