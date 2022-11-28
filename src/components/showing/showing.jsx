import React from 'react';
import './s.scss'
import { useNavigate } from 'react-router-dom';
const Showing = ({ allProducts }) => {
    const { title, imageUrl, route } = allProducts
    const navigate = useNavigate()

    const Goto = () => navigate(route)
    return (
        <div className='category-container' onClick={Goto}>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`, }} />
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>

        </div>
    );
}

export default Showing;
