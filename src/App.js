import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Particles from './etc/particles.js';
import ScrollToTop from './etc/ScrollToTop.js';
import myData from './data/data.json';
import Home from './components/Home/index.js';
import Header from './components/Header/index.js';
import Works from './components/Works/index.js';
import About from './components/About/index.js';
import Contact from './components/About/index.js';
import Carousel from './components/Carousel/index.js';

function App() {
  return (
    <BrowserRouter>
      <Header json={myData.links} />
      <ScrollToTop />
      <div className='container text-white pt-[calc(50vh-6rem)] h-[100%]'>
        <div className='mx-[20vw] h-[calc(100vh-calc(50vh-6rem))]'>
          <Routes>
            <Route exact path='/' element={<Home />} />

            <Route path='/works' element={<Works json={myData.experience} />} />

            <Route path='/about' element={<About />} />

            <Route path='/contact' element={<Contact />} />

            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
          <Particles />
        </div>
        <div className='custom-shape-divider-top-1659878004 bg-white'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'>
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              className='shape-fill'></path>
          </svg>
        </div>
        <div className='container h-[100vh] bg-white'>
          <Carousel />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
