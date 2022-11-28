import React from 'react';

import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import ProductsShowing from '../../components/productsShowing/productsShowing';
import { useSelector } from 'react-redux';
import { selectcategoriesMap } from '../../store/categories/categories.selector';
import './category.scss'
const Category = () => {
    const { category } = useParams()
    const categoriesMap = useSelector(selectcategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category])
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <div className='css'>
            {products && products.map((product) => <ProductsShowing key={product.id} product={product} />)}
        </div>
    );
}
export default Category;