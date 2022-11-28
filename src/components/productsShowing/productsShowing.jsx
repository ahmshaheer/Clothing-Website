import React from 'react';
import Button from '../button/button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import './ps.scss'
const ProductsShowing = ({ product }) => {
    const { name, imageUrl, price } = product
    const { addItemCart } = useContext(CartContext)
    const addingItems = () => addItemCart(product)
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button onClick={addingItems} >Add to card</Button>
        </div>

    );
}

export default ProductsShowing;
