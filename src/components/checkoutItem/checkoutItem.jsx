import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import './checkoutItem.scss'

export default function CheckoutItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart } = useContext(CartContext);
    const { addItemCart, removeCart } = useContext(CartContext);

    const clearItem = () => clearItemFromCart(cartItem);
    const addItem = () => addItemCart(cartItem);
    const removeItems = () => removeCart(cartItem);

    return (

        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItems}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItem}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItem}>
                &#10005;
            </div>
        </div>
    );
};