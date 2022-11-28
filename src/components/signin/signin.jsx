import React from 'react';
import { useState } from 'react';
import FormInput from '../formInputs/formInput';
import Button from '../button/button';
import { googleSignInWithPopUp, createUserDocumentFromAuth, realSignInWithEmailAndPassword, } from '../../firebase/firebase';

import './signin.scss'
const defaultFormValue = {
    email: '',
    password: '',
}

const Signin = () => {
    const [formInput, setFormInput] = useState(defaultFormValue)
    const { email, password } = formInput


    const signInWithGoogle = async () => {
        const { user } = await googleSignInWithPopUp();
        await createUserDocumentFromAuth(user);
    };
    // Finding Words
    const eventFinder = (event) => {
        const { name, value } = event.target
        setFormInput({ ...formInput, [name]: value })
    }
    const submittingForm = async (event) => {
        event.preventDefault()
        try {
            await realSignInWithEmailAndPassword(email, password)
        } catch (error) {
            console.log('Error is' + error)
        }
    }
    return (
        <div className='sign-in-container'>
            <h2> Already have an account</h2>
            <span> Sign In with email and password</span>
            <form onSubmit={submittingForm}>
                <FormInput
                    label='Enter Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={eventFinder} />
                <FormInput
                    label='Enter Password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={eventFinder}
                />
                <div className='buttons-container'>
                    <Button buttontype='inverted' type='button'>Sign In</Button>
                    <Button buttontype='google' onClick={signInWithGoogle}>Google Sign In </Button>
                </div>
            </form>



        </div>
    );
}

export default Signin;
