import React from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'

export default function MainLayout(props) {
    return (
        <div>
            <Header />
            <div className="main">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}