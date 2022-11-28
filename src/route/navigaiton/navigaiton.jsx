import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/Crown.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
// import { UserContext } from '../../contexts/userContext';
import { realSignOut } from '../../firebase/firebase';
import './navigation.scss'

import CartBox from '../../components/cartIcon/cartIcon';
import CartDropDown from '../../components/cartDropDown/cartDropDown';
// for accessing redux elements
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
const Navigaiton = () => {
    // const { currentUser } = useContext(UserContext)
    const currentUser = useSelector(selectCurrentUser)
    const { openCart } = useContext(CartContext)
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {
                        currentUser ? <span className='nav-link' onClick={realSignOut}> Sign Out</span> : (<Link to="/auth" className='nav-link'>
                            Sign In
                        </Link>)
                    }
                    <CartBox />
                </div>
                {openCart && <CartDropDown />}
            </div>
            <Outlet />
        </Fragment>
    );
}
export default Navigaiton;