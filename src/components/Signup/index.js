import React, { Component } from 'react';
import './styles.scss';

import FormInput from './../forms/FormInput'
import Button from './../forms/Button'

const initialState = {
    displayName:'',
    email:'',
    password:'',
    repeatPassword:'',
}

export default class Signup extends Component {
    

    render() {
        return (
            <div className="signup">
                <div className="wrap">
                    <h2>
                        Sign up
                    </h2>

                    <form>

                    </form>
                </div>
            </div>
        )
    }
}
