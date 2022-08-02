import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

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
        <motion.h1 whileHover={
            { scale: 1.2, 
                transition: {
                duration: 0.4
                }
            }} 
            className='logo' onMouseOver={onMouseHover} onMouseOut={onMouseHoverOut}>
            {isHovering ? 	"{ RYV }" : "reymondyv"}
        </motion.h1>
        <ul>
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
                <a href='https://github.com/reymondv' target='_blank'><BsGithub /></a>
            </li>
            <li className='social-icon'>
                <a href='https://linkedin.com/in/reymondyv' target='_blank'><BsLinkedin /></a>
            </li>
        </ul>
        
    </header>
  )
}

export default Header