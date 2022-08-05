import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    const [isHovering, setIsHovering] = useState(false);

    const onMouseHover = () => {
        setIsHovering(true);
    };

    const onMouseHoverOut = () => {
        setIsHovering(false);
    };

  return (
    <header>
        <h2 className='logo'>
            <Link to='/'><span className="font-main">&#123; RYV &#125;</span></Link>
        </h2>
        <ul>
            <input type='checkbox' id='checkbox_toggle' />
            <label for='checkbox_toggle' className='hamburger'>&#9776;</label>
            <div className='menu'>
            <li>
                <NavLink to='/'>{({ isActive }) => (
                    isActive ? ".home()" : "home"
                )}</NavLink>
            </li>
            <li>
                <NavLink to='/about'>{({ isActive }) => (
                    isActive ? ".about()" : "about"
                )}</NavLink>
            </li>
            <li>
                <NavLink to='/works'>{({ isActive }) => (
                    isActive ? ".works()" : "works"
                )}</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>{({ isActive }) => (
                    isActive ? ".contact()" : "contact"
                )}</NavLink>
            </li>
            <li className='social-icon'>
                <a href='https://github.com/reymondv' target='_blank'  rel="noreferrer"><span className="font-main"><BsGithub /></span></a>
            </li>
            <li className='social-icon'>
                <a href='https://linkedin.com/in/reymondyv' target='_blank'  rel="noreferrer"><span className="font-main"><BsLinkedin /></span></a>
            </li>
            </div>
        </ul>
        
    </header>
  )
}

export default Header