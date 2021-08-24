import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
const Header = () => {
    return (
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1>
                    <span>APIs</span> for Unique Insights in a Property
                </h1>
                <p className='details'> for Real Estate, Architecture, Clean Energy and more</p>
                <Link to='/tool' className='cv-btn'>Explore</Link>
            </div>
        </div>
    )
}

export default Header
