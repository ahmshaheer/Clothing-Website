import React from 'react';
import Button from '../button/button';
import CartItem from '../cartitemCom/CartItem';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import './cartDD.scss'

import { useNavigate } from 'react-router-dom';
const CartDropDown = () => {
    const navigate = useNavigate()

    const navigatingToCheckout = () => navigate('/checkout')

    const { cartItems } = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button onClick={navigatingToCheckout}> Go to Checkout </Button>

        </div>
    );
}

export default CartDropDown;
