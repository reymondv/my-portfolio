import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import OnScroll from '../../etc/OnScroll.js';
import Logo from '../../images/icon.png';

const Header = ({ json }) => {
  const [isToggle, setToggle] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const menuClicked = () => setToggle(false);
  const toggleHamburgerMenu = () => setToggle(!isToggle);

  const headerBlock = {
    backgroundColor: 'rgb(0, 0, 0)',
  };
  return (
    <>
      <OnScroll state={setSticky} />
      <header
        className={isSticky ? 'sticky' : ''}
        style={!isToggle ? null : headerBlock}>
        <div className='logo'>
          <Link to='/' onClick={menuClicked}>
            <img src={Logo} alt={Logo} />
            <span className='text-orange-550'>&#123;&nbsp;</span>reymondyv
            <span className='text-orange-550'>&nbsp;&#125;</span>
          </Link>
        </div>
        <ul>
          <input
            type='checkbox'
            id='checkbox_toggle'
            checked={isToggle}
            readOnly
          />
          <motion.div
            initial={{ y: -100 }}
            animate={{ opacity: !isToggle ? 1 : 0, y: !isToggle ? 0 : -100 }}
            transition={{ type: 'spring', stiffness: 60, damping: 10 }}
            onClick={toggleHamburgerMenu}>
            {!isToggle && (
              <label htmlFor='checkbox_toggle' className='hamburger'>
                {' '}
                <GiHamburgerMenu />{' '}
              </label>
            )}
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ opacity: !isToggle ? 0 : 1, y: !isToggle ? -100 : 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 10 }}
            onClick={toggleHamburgerMenu}>
            {isToggle && (
              <label htmlFor='checkbox_toggle' className='hamburger'>
                <FaTimes />
              </label>
            )}
          </motion.div>
          <div className='menu'>
            <li>
              <NavLink to='/' title='Home' onClick={menuClicked}>
                {({ isActive }) => (isActive ? '.home()' : 'home')}
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' title='About me' onClick={menuClicked}>
                {({ isActive }) => (isActive ? '.about()' : 'about')}
              </NavLink>
            </li>
            <li>
              <NavLink to='/works' title='My works' onClick={menuClicked}>
                {({ isActive }) => (isActive ? '.works()' : 'works')}
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' title='My contact' onClick={menuClicked}>
                {({ isActive }) => (isActive ? '.contact()' : 'contact')}
              </NavLink>
            </li>
            <li className='text-[1.5rem] mx-2 pt-1 my-0 flex-auto items-center text-center md:inline-flex md:pt-[1rem] md:mx-auto md:my-auto '>
              <a
                href={json.github}
                target='_blank'
                rel='noreferrer'
                title='Github'>
                <span className='text-orange-550'>
                  <BsGithub />
                </span>
              </a>
            </li>
            <li className='text-[1.5rem] mx-2 pt-1 my-0 flex-auto items-center text-center md:inline-flex md:pt-[1rem] md:mx-auto md:my-auto '>
              <a
                href={json.linkedin}
                target='_blank'
                rel='noreferrer'
                title='Linkedin'>
                <span className='text-orange-550'>
                  <BsLinkedin />
                </span>
              </a>
            </li>
          </div>
        </ul>
      </header>
    </>
  );
};

export default Header;
