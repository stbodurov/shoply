import React from 'react'
import './styles.scss'
import Logo from './../../assets/logo_min.png'

export default function Footer() {
    return (
        <section id="footer">
            <div ><img src={Logo} className='minLogo' alt="logo_min" /></div>
            <div class="container">

                <div class="row text-center text-xs-center text-sm-left text-md-left">

                    <div class="row-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                        <ul class="list-unstyled quick-links" >
                            <li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>About</a></li>
                            <li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Contact Us</a></li>
                            <li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Get Started</a></li>
                        </ul>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p>Stanislav Bodurov</p>
                        <p class="h6">All rights Reserved. © 2020</p>
                    </div>
                    <hr />
                </div>
            </div>
        </section>
    )
}
