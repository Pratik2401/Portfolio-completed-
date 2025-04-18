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
import { Analytics } from "@vercel/analytics/react"
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
function App() {
  return (
    <>
    
    <ParticlesBackground/>
    <Analytics/>
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/" element={
          <>
            <Navbar/>
            <Home/>
            <Education />
            <Myskill />
            <Project />
            <Certification />
            <About />
            <Contact />
          </>
        } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
