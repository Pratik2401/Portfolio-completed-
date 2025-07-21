import React, { useState, useEffect } from 'react';
import ParticlesBackground from './Particle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import Admin from './Admin';
import Home from './Home';
import Education from './Education';
import Myskill from './Myskill';
import MouseTrail from './Mouse';
import Project from './Project';
import Certification from './Certification';
import About from './About';
import Contact from './Contact';
import { Analytics } from "@vercel/analytics/react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { Container } from 'react-bootstrap';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HelmetProvider>
      <div className="wrapper">
        <ParticlesBackground />
        <Analytics />
        <Router>
          <Navbar /> {/* Keep Navbar outside the Routes for global visibility */}
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Education />
                  <Myskill />
                  <Project />
                  <Certification />
                  <About />
                  <Contact />
                </>
              }
            />
          </Routes>
        </Router>
        {showGoToTop && (
          <button className="go-to-top" onClick={scrollToTop}>
            ↑
          </button>
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;