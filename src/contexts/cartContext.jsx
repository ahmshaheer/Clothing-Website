import { createContext, useReducer } from "react";

const addCartItems = (cartItems, productToAdd) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    if (existingItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}
const removeCartItem = (cartItems, productToRemove) => {

    const existingItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id)
    if (existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
    }

    return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}
const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
    openCart: false,
    setCartIsOpen: () => { },
    cartItems: [],
    addItemCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    removeCart: () => { },
    cartTotal: 0,
});

const INITIAL_STATE = {
    openCart: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}

const cartReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'SET_CART_ITEM':
            return {
                ...state,
                ...payload
            }
        case 'SetCartOpen':
            return {
                ...state,
                openCart: payload
            }

        default:
            throw new Error(`Error of ${type}`)
    }

}

export const CartProvider = ({ children }) => {


    const [{ cartItems, openCart, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    const updateCartItem = (newCartItems) => {

        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        const newCartTotal = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
        dispatch({ type: 'SET_CART_ITEM', payload: { cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount } })
    }


    const addItemCart = (productToAdd) => {
        const newCartItems = addCartItems(cartItems, productToAdd)
        updateCartItem(newCartItems)
    }
    const removeCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove)
        updateCartItem(newCartItems)
    }
    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        updateCartItem(newCartItems)
    };

    const setCartIsOpen = (bool) => {
        dispatch({ type: 'SetCartOpen', payload: bool })

    }
    const value = {
        openCart, setCartIsOpen, cartItems, addItemCart, cartCount, removeCart, cartTotal,
        clearItemFromCart,
    }

    return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}