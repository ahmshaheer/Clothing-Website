import React from 'react';
import './button.scss'
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
}
const Button = ({ children, buttontype, ...otherprops }) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttontype]}`} {...otherprops}> {children} </button>

    );
}

export default Button;
