import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import './styles.scss'
import { Link } from 'react-router-dom'
import { checkUserIsAdmin } from '../../utils'

import Logo from './../../assets/logo.jpeg'
import ProLogo from './../../assets/logo-pro.jpeg'
import CartLogo from './../../assets/shoppingcart.png'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const Header = props => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);
  
    const signOut = () => {
      dispatch(signOutUserStart());
    };
  
    const isAdmin = checkUserIsAdmin(currentUser);

    const adminLinkStyling = {
        color: 'darkred'
    }

    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                            <Link to="/">
                                <img src={Logo} alt="shoply logo" />
                            </Link>
                        </div>
                    

                <div className="callToActions">


                    {currentUser && (
                        <ul>
                            <li>
                                <Link to="/products">
                                    All Products
                                </Link>
                            </li>
                            {isAdmin && (
                                <li>
                                    <Link to="/admin" style={adminLinkStyling}>
                                        My Account
                                </Link>
                                </li>
                            )}
                            <li>
                                <Link to="cart">
                                    <img className="cart" src={CartLogo} alt="Shopping cart" />
                                </Link>
                            </li>
                            <li>
                            {/* eslint-disable-next-line */}
                                <span onClick={() => signOut()}><a>Logout</a></span>
                            </li>
                        </ul>
                    )}

                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="/registration">
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    )}

                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    currentUser: null
}


export default Header;