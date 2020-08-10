import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser, resetAllAuthForms } from './../../redux/User/user.actions';
import './styles.scss'

import FormInput from './../forms/FormInput';
import Button from './../forms/Button';

const mapState = ({ user }) => ({
    signUpSuccess: user.signUpSuccess,
    signUpError: user.signUpError
})

function Signup(props) {
    const { signUpSuccess, signUpError } = useSelector(mapState);
    const dispatch = useDispatch();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (signUpSuccess) {
            resetForm();
            dispatch(resetAllAuthForms());
            props.history.push('/');
        }
    }, [signUpSuccess]);

    useEffect(() => {
        if (Array.isArray(signUpError) && signUpError.length > 0) {
            setErrors(signUpError);
        }
    }, [signUpError]);

    const resetForm = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setRepeatPassword('');
        setErrors([]);
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        dispatch(signUpUser({
            displayName,
            email,
            password,
            repeatPassword
        }))
    }

    return (
        <div className="signup">
            <div className="wrap">
                <h2>
                    Sign up
                    </h2>

                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                            return (
                                <li key={index}>
                                    {err}
                                </li>
                            )
                        })}
                    </ul>
                )}

                <div className="formWrap">
                    <form onSubmit={handleFormSubmit}>
                        <FormInput
                            type="text"
                            name="displayName"
                            value={displayName}
                            placeholder="Full name"
                            handleChange={e => setDisplayName(e.target.value)}
                        />

                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            handleChange={e => setEmail(e.target.value)}
                        />

                        <FormInput
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            handleChange={e => setPassword(e.target.value)}
                        />

                        <FormInput
                            type="password"
                            name="repeatPassword"
                            value={repeatPassword}
                            placeholder="Repeat Password"
                            handleChange={e => setRepeatPassword(e.target.value)}
                        />

                        <Button type="Submit">
                            Register
                        </Button>

                    </form></div>
            </div>
        </div>
    )

}



export default withRouter(Signup);