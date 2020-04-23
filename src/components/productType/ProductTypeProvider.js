import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/

export const ProductTypeContext = React.createContext()

/*
 This component establishes what data can be used.
 */

    export const ProductTypeProvider = (props) => {
        const [productTypes, setProductTypes] = useState([])

        const getProductTypes = () => {
            return fetch("http://localhost:9000/productTypes")
                .then(response => response.json())
                .then(setProductTypes)
        }

        const addProductType = productType => {
            return fetch("http://localhost:9000/productTypes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productType)
        })
                .then(getProductTypes)
    }

    /*
        Load all product types when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */

        useEffect(() => {
            getProductTypes()
        }, [])

        useEffect(() => {
            console.log("****  PRODUCT TYPE APPLICATION STATE CHANGED  ****")
        }, [productTypes])

        return (
            <ProductTypeContext.Provider value={{
                productTypes, addProductType
            }}>
                {props.children}
            </ProductTypeContext.Provider>
        )
    }