import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        // todo maybe make a custom logo in photoshop
        <div className='navbar'>
            <h1>Daniel</h1>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar