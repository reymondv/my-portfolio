import Logo from '../../images/icon.png';
import linkData from '../../data/data.json';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-[#0b0f0f]'>
        <div className='flex items-center justify-between px-[14.6vw] sm:px-0 sm:block'>
          <Link to='/' className='flex items-center mb-0 mx-0 justify-center'>
            <img src={Logo} className='mr-3 h-8 sm:ml-0' alt='My logo' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white sm:mx-0'>
              <span className='text-orange-550'>&#123;&nbsp;</span>reymondyv
              <span className='text-orange-550'>&nbsp;&#125;</span>
            </span>
          </Link>
          <ul className='flex items-center mb-0 sm:mb-0 text-sm text-black dark:text-white justify-center sm:mt-4'>
            <li>
              <Link to='/about' className='mr-4 hover:underline sm:mr-6 '>
                About
              </Link>
            </li>
            <li>
              <Link to='/works' className='mr-4 hover:underline sm:mr-6'>
                Works
              </Link>
            </li>
            <li>
              <Link to='/contact#' className='mr-4 hover:underline sm:mr-6 '>
                Contact
              </Link>
            </li>
            <li>
              <a
                href={linkData.links.github}
                target='_blank'
                rel='noreferrer'
                className='mr-4 hover:underline sm:mr-6'>
                Github
              </a>
            </li>
            <li>
              <a
                href={linkData.links.linkedin}
                target='_blank'
                rel='noreferrer'
                className='hover:underline'>
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto sm:my-6 dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-black text-center dark:text-white'>
          © 2022{' '}
          <Link to='/' className='hover:underline'>
            Reymondyv™{' '}
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
