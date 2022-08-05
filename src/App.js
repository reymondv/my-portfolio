import './App.scss';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Particles from './etc/particles.js';

import ScrollToTop from './etc/ScrollToTop.js';
import Home from './components/Home/index.js';
import Header from './components/Header/index.js';
import Works from './components/Works/index.js';
import About from './components/About/index.js';
import Contact from './components/About/index.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ScrollToTop />
        <div className="content-container" >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Particles />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
