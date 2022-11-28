import { useState, createContext, useEffect } from "react";

import { gettingCollectionAndDocuments } from "../firebase/firebase";

export const ProductsContext = createContext({
    categoriesMap: {},
});

export const ProductsProvider = ({ children }) => {
    const [categoriesMap, setcategoriesMap] = useState({})

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await gettingCollectionAndDocuments()
            setcategoriesMap(categoryMap)
        }
        getCategoriesMap()
    }, [])
    const value = { categoriesMap }

    return <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
}