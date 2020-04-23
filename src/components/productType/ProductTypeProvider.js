import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/

export const ProductTypeContext = React.createContext()

/*
 This component establishes what data can be used.
 */

 export const productTypeProvider = (props) => {
     const [productTypes, setProductTypes] = useState([])

     const get
 }