import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emailSignInStart, googleSignInStart } from './../../redux/User/user.actions';
import { Alert } from 'react-bootstrap';

import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';


const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr
});

const SignIn = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, userErr } = useSelector(mapState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser) {
      resetForm();
      navigate('/');
    }

  }, [currentUser, navigate]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }

  }, [userErr]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  }

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  }

  const configAuthWrapper = {
    headline: 'LogIn'
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">

      {errors.length > 0 && (
          <ul>
            {errors.map((e, index) => {
              return (
                <Alert key={index} variant="danger">
                 {e}
                </Alert>
              )
            })}
          </ul>
        )}
        <form onSubmit={handleSubmit}>

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

          <Button type="submit">
            LogIn
            </Button>

            
          <div className="socialSignin">
            <div className="row">
            <Button onClick={handleGoogleSignIn}>
                Sign in with Google
              </Button>

            </div>
          </div>

          <div className="links">
            <Link to="/recovery">
              Reset Password
              </Link>
          </div>

        </form>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;
