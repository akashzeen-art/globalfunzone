import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import VideoDetail from './pages/VideoDetail';
import IntroAnimation from './components/IntroAnimation';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // Use state to track intro animation. 
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 font-sans">
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      
      <div 
        className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0 h-screen overflow-hidden fixed w-full' : 'opacity-100'}`}
      >
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <ScrollToTop />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/category/:slug" element={<Category />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/ebooks/:id" element={<VideoDetail />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
