import React, { useState } from 'react'
import './Navbar.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const offset = 60;

    return (
        // todo maybe make a custom logo in photoshop
        // todo dont need setMenu probably
        <div className='navbar'>
            <ul className='nav-menu'>
                <li><AnchorLink href='#home' offset={offset}><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
                <li><AnchorLink href='#about' offset={offset}><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
                <li><AnchorLink href="#portfolio" offset={offset}><p onClick={() => setMenu("portfolio")}>Portfolio</p></AnchorLink></li>
                <li ><AnchorLink className='nav-connect primary-button' href="#contact" offset={offset}><p onClick={() => setMenu("contact")}>Contact Me</p></AnchorLink></li>
            </ul>
        </div>
    )
}

export default Navbar