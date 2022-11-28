import React from 'react';
import { ReactComponent as Bag } from '../../assests/bag.svg';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

import './cartIcon.scss'
const CartIcon = () => {
    const { cartCount, openCart, setCartIsOpen } = useContext(CartContext)
    const openingAndClosingCart = () => setCartIsOpen(!openCart)
    return (
        <div className='cart-icon-container' onClick={openingAndClosingCart}>
            <Bag className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    );
}

export default CartIcon;
