import React from 'react';
import { allCategoriesList } from '../../allCategoriesList'   // importing all categories list
import Showing from '../showing/showing';
import './D.scss'
const FullDirectoryComponent = () => {
    return (
        <div className='directory-container'>
            {
                allCategoriesList.map((producsList) => (
                    <Showing key={producsList.id} allProducts={producsList} />
                ))
            }
        </div >
    );
}

export default FullDirectoryComponent;
