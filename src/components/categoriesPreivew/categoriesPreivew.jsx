import React from 'react';
import ProductsShowing from '../productsShowing/productsShowing';
import './categoriesPreivew.scss'
const CategoriesPreivew = ({ title, products }) => {
    return (
        <div className='category-preview-container'>
            <h2><span className='title'>{title}</span></h2>
            <div className='preview'>
                {
                    products.filter((_, idx) => idx < 4).map((product) =>
                        <ProductsShowing key={product.id} product={product} />
                    )
                }
            </div>

        </div>
    );
}

export default CategoriesPreivew;
