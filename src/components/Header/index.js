import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss'
import { Link } from 'react-router-dom'
import { auth } from './../../firebase/utils'
import { checkUserIsAdmin } from '../../Utils'

import Logo from './../../assets/logo.jpeg'
import ProLogo from './../../assets/logo-pro.jpeg'
import CartLogo from './../../assets/shoppingcart.png'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const Header = props => {
    const { currentUser } = useSelector(mapState);
    const isAdmin = checkUserIsAdmin(currentUser);

    const adminLinkStyling = {
        color: 'darkred'
    }

    return (
        <header className="header">
            <div className="wrap">
                {isAdmin ?
                    (<div className="proLogo">
                        <Link to="/">
                            <img src={ProLogo} alt="shoply logo" />
                        </Link>
                    </div>
                    ) : (
                        <div className="logo">
                            <Link to="/">
                                <img src={Logo} alt="shoply logo" />
                            </Link>
                        </div>)}

                <div className="callToActions">



                    {currentUser && (
                        <ul>
                            {isAdmin && (
                                <li>
                                    <Link to="admin" style={adminLinkStyling}>
                                        Merchant
                                </Link>
                                </li>
                            )}
                            <li>
                                <Link to="dashboard">
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <Link to="cart">
                                    <img className="cart" src={CartLogo} alt="Shopping cart"/>
                                </Link>
                            </li>
                            <li>
                                <span onClick={() => auth.signOut()}><a>Logout</a></span>
                            </li>
                        </ul>
                    )}

                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="registration">
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link to="login">
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