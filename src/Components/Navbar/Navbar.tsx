import { useRef } from 'react'
import './Navbar.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const offset = 60;
    const menuRef = useRef<HTMLUListElement>(null);
    const openMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.left = "0";
        }
    }
    const closeMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.left = "-100%";
        }
    }

    return (
        <div className='navbar'>
            <FontAwesomeIcon onClick={openMenu} className='nav-mob-open' icon={faBars} />
            <ul ref={menuRef} className='nav-menu'>
                <FontAwesomeIcon onClick={closeMenu} className='nav-mob-close' icon={faX} />
                <li><AnchorLink href='#home' offset={offset} onClick={closeMenu}><span>Home</span></AnchorLink></li>
                <li><AnchorLink href='#about' offset={offset} onClick={closeMenu}><span>About</span></AnchorLink></li>
                <li><AnchorLink href="#professional-experience" offset={offset} onClick={closeMenu}><span>Experience</span></AnchorLink></li>
                <li><AnchorLink href="#projects" offset={offset} onClick={closeMenu}><span>Projects</span></AnchorLink></li>
                <li><AnchorLink href="#contact" offset={offset} onClick={closeMenu}><span>Contact </span></AnchorLink></li>
                <li className='nav-contact'><AnchorLink href="#contact" offset={offset} onClick={closeMenu}><span>Contact</span></AnchorLink></li>
                <li><AnchorLink className='nav-connect primary-button' href="#contact" offset={offset} onClick={closeMenu}><span>Contact Me</span></AnchorLink></li>
            </ul>
        </div>
    )
}

export default Navbar