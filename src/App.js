import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './etc/ScrollToTop.js';
import myData from './data/data.json';
import Home from './components/Home/index.js';
import Header from './components/Header/index.js';
import Works from './components/Works/index.js';
import About from './components/About/index.js';
import Contact from './components/About/index.js';
import Footer from './components/Footer/index.js';

function App() {
  return (
    <BrowserRouter>
      <Header json={myData.links} />
      <ScrollToTop />
      <div className='container text-white pt-[calc(50vh-6rem)] h-[100%]'>
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route path='/works' element={<Works json={myData.experience} />} />

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
