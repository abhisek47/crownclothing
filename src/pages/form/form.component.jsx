import React from 'react';
import './form.style.scss';
import SignIn from '../../components/sign-in/SignIn.component';
import SignUp from '../../components/sign-up/SignUp.component';

const Form = () => {
    return (
        <div className="container">
            <div className="form">
                <SignIn />
                <SignUp />
            </div>
        </div>
    )
}

export default Form;