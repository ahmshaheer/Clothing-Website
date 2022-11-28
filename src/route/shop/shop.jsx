import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { gettingCollectionAndDocuments } from '../../firebase/firebase';
import Cpreview from '../categoriesPrevies/categoriesPrevies';
import Category from '../category/category';

import { setcategoriesMap } from '../../store/categories/categories.action'
import { useDispatch } from 'react-redux';
const Shop = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await gettingCollectionAndDocuments()
            dispatch(setcategoriesMap(categoryMap))
        }
        getCategoriesMap()
    }, [dispatch])
    return (
        <Routes>
            <Route index element={<Cpreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}
export default Shop;