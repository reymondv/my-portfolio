import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isToggle, setToggle] = useState(false);
    const onMouseHover = () => {
        setIsHovering(!isHovering);
    };

    const onToggleHamburger = () => {
        setToggle(!isToggle);
    }   

  return (
    <header>
        <h2 className='logo'>
            <Link to='/'><span className="font-main">&#123; RYV &#125;</span></Link>
        </h2>
        <ul>
            <input type='checkbox' id='checkbox_toggle' onClick={onToggleHamburger}/>
            <motion.div 
            initial={{ y: -100 }}
            animate={{ opacity: !isToggle ? 1 : 0, y: !isToggle ? 0 : -100 }}
            transition={{ type: "spring", stiffness: 60, damping: 10 }}
            onClick={{ onToggleHamburger }}>
                {!isToggle && <label for='checkbox_toggle' className='hamburger'> <GiHamburgerMenu /> </label>}
            </motion.div>
            <motion.div 
            initial={{ y: 0 }}
            animate={{ opacity: !isToggle ? 0 : 1, y: !isToggle ? -100 : 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 10 }}
            onClick={{ onToggleHamburger }}>
                {isToggle && <label for='checkbox_toggle' className='hamburger'><FaTimes /></label>}
            </motion.div>
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