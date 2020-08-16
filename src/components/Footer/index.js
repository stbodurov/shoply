import React from 'react'
import './styles.scss'
import Logo from './../../assets/logo_min.png'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <section id="footer">
            <div ><img src={Logo} className='minLogo' alt="logo_min" /></div>
            <div className="linkList">
                <ul>
                    <li>
                        <Link to='about'>
                            ABOUT US
                        </Link>
                    </li>
                    <li>
                        <Link to='contacts'>
                            CONTACTS
                        </Link>
                    </li>
                    <li>
                        <Link to='contacts'>

                        </Link>
                    </li>
                </ul>
            </div>
            <div className="wrap">
               Stanislav Bodurov ©2020
      </div>
        </section>
    )
}
