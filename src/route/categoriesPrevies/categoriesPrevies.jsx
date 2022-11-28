import './categoriesPrevies.scss'
import React from 'react';

// import { useContext } from 'react';
// import { ProductsContext } from '../../contexts/shopContext';

import CategoriesPreivew from '../../components/categoriesPreivew/categoriesPreivew';
import { useSelector } from 'react-redux';
import { selectcategoriesMap } from '../../store/categories/categories.selector';
const Cpreview = () => {

    const categoriesMap = useSelector(selectcategoriesMap)
    return (
        <div className='shop-container' >
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title]
                return (
                    <CategoriesPreivew key={title} title={title.toUpperCase()} products={products} />
                )
            })}
        </div>
    );
}
export default Cpreview;