import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { smoothScrollTo } from './scroll'; 
import { Link } from 'react-router-dom';
import './Navbar.css';

const CustomNavbar = () => {
  const [navbarBg, setNavbarBg] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setNavbarBg('#857d7d54');
      } else {
        setNavbarBg('transparent'); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTo = (elementId) => {
    smoothScrollTo(elementId);
  };

  return (
    <Navbar expand="lg" className="justify-content-between sticky-top" style={{ backgroundColor: navbarBg }}>
  <Container>
  <Navbar.Brand as={Link} to="/admin" className="fs-1 text-light">
          Pratik <span className="surname">Mali</span>
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-light" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="fs-4">
        <Nav.Link onClick={() => handleScrollTo('home')}>
          Home
        </Nav.Link>
        <Nav.Link onClick={() => handleScrollTo('education')}>
          Education
        </Nav.Link>
        <Nav.Link onClick={() => handleScrollTo('skills')}>
          MySkills
        </Nav.Link>
        <Nav.Link onClick={() => handleScrollTo('projects')}>
          Projects
        </Nav.Link>
        <Nav.Link onClick={() => handleScrollTo('certification')}>
          Certification
        </Nav.Link>
        <Nav.Link onClick={() => handleScrollTo('about')}>
          About
        </Nav.Link>
        <Nav.Link onClick={() => handleScrollTo('contact')}>
          Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default CustomNavbar;
