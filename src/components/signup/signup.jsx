import { useState } from 'react';
import { signupcreateUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../firebase/firebase';
import FormInput from '../formInputs/formInput';
import Button from '../button/button';

import './signup.scss'
const defaultFormValue = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const Signup = () => {
    const [formInput, setFormInput] = useState(defaultFormValue)
    const { displayName, email, password, confirmPassword } = formInput


    // Finding Words
    const eventFinder = (event) => {
        const { name, value } = event.target
        setFormInput({ ...formInput, [name]: value })
    }

    // Creating user with email and password
    const submittingForm = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Password Is not Same')
        }
        try {

            const { user } = await signupcreateUserWithEmailAndPassword(email, password)

            await createUserDocumentFromAuth(user, { displayName })
        } catch (error) {
            console.log('Error is' + error)
        }
    }
    return (
        <div className='sign-up-container'>
            <h2> Don't have an account</h2>
            <span> Create a new account</span>
            <form onSubmit={submittingForm}>
                <FormInput
                    label='Enter Name'
                    type='text'
                    onChange={eventFinder}
                    name='displayName'
                    value={displayName}
                />
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

                <FormInput
                    label='Enter Confirm Password'
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={eventFinder}
                />
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    );
}

export default Signup;
