import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { signInUser, signInWithGoogle, resetAllAuthForms } from './../../redux/User/user.actions'
 

import './styles.scss'


// import AuthWrapper from './../'
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';

const mapState = ({user}) => ({
  signInSuccess: user.signInSuccess
})

const SignIn = props => {
  const {signInSuccess} = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (signInSuccess) {
      resetForm();
      dispatch(resetAllAuthForms());
      props.history.push('/')
    }
  }, [signInSuccess])

  const resetForm = () => {
    setEmail('');
    setPassword('');
  }

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(signInUser({email, password}));
  }

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle())
  }

  return (
    <div className="signin">
      <div className="wrap">
        <h2>
          Log in
          </h2>

        <div className="formWrap">
          <form onSubmit={handleSubmit}>

            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />

            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />

            <Button type="submit" onSubmit={handleSubmit}>
              Sign in
                                    </Button>

            <div className="socialSignIn">
              <div className="row">
                <Button onClick={handleGoogleSignIn}>
                  Sign in with Google
                                            </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

}



export default withRouter(SignIn);
