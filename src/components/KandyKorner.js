import React from "react"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import { ProductProvider } from "./product/ProductProvider"
import ProductList from "./product/ProductList"


export default () => (
    <>
        <h2>Kandy Korner</h2>

        <LocationProvider>
            <LocationList />
        </LocationProvider>
        
        <ProductProvider>
            <ProductList />
        </ProductProvider>
    
    </>
)