import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './etc/ScrollToTop.js';
import myData from './data/data.json';
import Home from './components/Home/index.js';
import Header from './components/Header/index.js';
import Works from './components/Works/index.js';
import About from './components/About/index.js';
import Contact from './components/Contact/index.js';
import Footer from './components/Footer/index.js';

function App() {
  const { projects } = myData;

  return (
    <BrowserRouter>
      <Header json={myData.links} />
      <ScrollToTop />
      <div className='container text-white pt-[20%] xl:pt-[30%] h-[100%] overflow-hidden'>
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route path='/works' element={<Works json={projects} />} />

          <Route path='/about' element={<About />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
