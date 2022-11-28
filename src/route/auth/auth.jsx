import React from 'react';
import Signin from '../../components/signin/signin';
import Signup from '../../components/signup/signup';
import './auth.scss'
const Auth = () => {
    return (
        <div className='auth'>
            <Signin />
            <Signup />
        </div>
    );
}

export default Auth;
