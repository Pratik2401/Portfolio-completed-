import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import './Navbar.css';

const CustomNavbar = () => {
  const [navbarClass, setNavbarClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarClass('scrolled-navbar');
      } else {
        setNavbarClass('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`justify-content-between sticky-top ${navbarClass}`}>
      <Container>
        <Navbar.Brand
          as={ScrollLink}
          to="home"
          smooth={true}
          duration={500}
          className="fs-1 text-light"
        >
          Pratik <span className="surname">Mali</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-light" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="fs-4">
            {['home', 'education', 'skills', 'projects', 'certification', 'about', 'contact'].map(
              (section) => (
                <Nav.Link
                  key={section}
                  as={ScrollLink}
                  to={section}
                  smooth={true}
                  duration={100}
                  spy={true}
                  exact="true"
                  activeClass="active-link"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <motion.div className="navbar-background" />
    </Navbar>
  );
};

export default CustomNavbar;
