import React, { useRef, useState } from 'react'
import './Navbar.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const offset = 60;
    const menuRef = useRef<HTMLUListElement>(null);
    const openMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right = "0";
        }
    }
    const closeMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right = "-350px";
        }
    }

    return (
        // todo maybe make a custom logo in photoshop
        // todo dont need setMenu probably
        // todo fix nav drawer so it opens 60-80% out
        <div className='navbar'>
            <FontAwesomeIcon onClick={openMenu} className='nav-mob-open' icon={faBars} />
            <ul ref={menuRef} className='nav-menu'>
                <FontAwesomeIcon onClick={closeMenu} className='nav-mob-close' icon={faX} />
                <li><AnchorLink href='#home' offset={offset}><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
                <li><AnchorLink href='#about' offset={offset}><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
                {/*todo uncomment when this exists <li><AnchorLink href="#portfolio" offset={offset}><p onClick={() => setMenu("portfolio")}>Portfolio</p></AnchorLink></li> */}
                <li className='nav-contact'><AnchorLink href="#contact" offset={offset}><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>
                <li ><AnchorLink className='nav-connect primary-button' href="#contact" offset={offset}><p onClick={() => setMenu("contact")}>Contact Me</p></AnchorLink></li>
            </ul>
        </div>
    )
}

export default Navbar