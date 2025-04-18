
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { useInView } from 'react-intersection-observer'; 
import Button from 'react-bootstrap/Button';
import Kumbhathon from './assets/images/Kumbhathon.png'
import Todo from './assets/images/Projects/to_do.png'
import Blog from './assets/images/Projects/blog_web.png'
import Spot from './assets/images/Projects/parking_web.png'
import Quiz from './assets/images/Projects/quiz_app.png'
import Weather from './assets/images/Projects/weather_app.png'
import Dyazo from './assets/images/Projects/Dyazo.png'
import News from './assets/images/Projects/news_app.png'
import Text from './assets/images/Projects/text_editor.png'
import Textsaver from './assets/images/Projects/text-saver.png'

import contactApp from './assets/images/Projects/contactapp.png'
import Calculator from './assets/images/Projects/calculator.png'
import Password from './assets/images/Projects/password_manager.png'
import Rock from './assets/images/Projects/rock_paper_scissor.png'
import { motion } from 'framer-motion'; // Import motion from framer-motion
import './Project.css';
import { CardFooter } from 'react-bootstrap';
import React, { useRef } from 'react';

export default function Project() {    

  const front_end_projects = [
    {
      image: Todo,
      heading: 'TO-DO List',
      description: 'A task management app built with HTML, CSS, and JavaScript. Users can add, delete, and prioritize tasks with extra descriptions. The interface is clean and user-friendly, making daily task management seamless.',
      link: "https://pratik2401.github.io/TO-DO-List/",
      tags: 'completed',
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      image: Spot,
      heading: 'Spot Seekers',
      description: 'A ReactJS-based smart parking system that fetches sensor values via XML and updates them in real-time. Uses serial communication, Bootstrap, and useEffect for a smooth user experience. Login: admin/admin.',
      link: "https://projectparking.netlify.app/",
      tags: 'completed',
      tech: ['ReactJS', 'Bootstrap', 'XML', 'useEffect']
    },
    {
      image: Quiz,
      heading: 'Quiz Generator',
      description: 'An interactive quiz app built with HTML, CSS, JSON, and JavaScript. Features typed.js for typing effects and local storage for saving quiz data. Supports multiple question types for an engaging experience.',
      link: "https://pratik2401.github.io/quiz-generator/",
      tags: 'completed',
      tech: ['HTML', 'CSS', 'JavaScript', 'JSON', 'Typed.js', 'LocalStorage']
    },
    {
      image: Blog,
      heading: 'Blog Website',
      description: 'A blogging platform using HTML, CSS, JavaScript, and Bootstrap. It allows multiple users to create, manage, and store blog posts with a simple and elegant interface, utilizing local storage.',
      link: "https://pratik2401.github.io/Blog-Website/",
      tags: 'completed',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'LocalStorage']
    },
    {
      image: Weather,
      heading: 'Weather App',
      description: 'A ReactJS weather app using REST API. Features real-time weather updates with useContext and createContext for state management. Offers a clean, intuitive interface for quick weather insights.',
      link: "https://castingweather.netlify.app/",
      tags: 'completed',
      tech: ['ReactJS', 'REST API', 'Bootstrap', 'useContext', 'createContext']
    },
    {
      image: Dyazo,
      heading: 'Dyazo-Ecommerce',
      description: 'An e-commerce website redesigned with HTML, CSS, JavaScript, and Bootstrap. Implements Soft UI (Neuromorphism) for a modern look and ensures responsive design for a seamless shopping experience.',
      link: "https://dyazo.netlify.app/",
      tags: 'completed',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Soft UI']
    },
    {
      image: News,
      heading: 'News APP',
      description: 'A ReactJS news app fetching the latest news via REST API. Uses createContext and useContext for state management, delivering real-time news updates with a user-friendly layout.',
      link: "https://github.com/Pratik2401/News",
      tags: 'completed',
      tech: ['ReactJS', 'REST API', 'useContext' ]
    },
    {
      image: Text,
      heading: 'Text Editor',
      description: 'A React-based text editor with essential editing features. Offers a smooth and modern interface for writing and formatting text efficiently.',
      link: "https://github.com/Pratik2401/Text_Editor",
      tags: 'completed',
      tech: ['ReactJS', 'JavaScript']
    },
    {
      image: Textsaver,
      heading: 'Text Saver',
      description: 'A MERN stack app allowing users to save text and images with a shareable URL. A convenient solution for quickly storing and sharing notes or content.',
      link: "https://savetext.vercel.app/",
      tags: 'completed',
      tech: ['MongoDB', 'ExpressJS', 'ReactJS', 'Node.js', 'MERN']
    },
    {
      image: contactApp,
      heading: 'Contact Sphere',
      description: 'A MERN stack contact management app featuring JWT authentication, bcrypt encryption, and a React Bootstrap UI. Ensures secure and smooth user experience.',
      link: "https://spherecontact.vercel.app/",
      tags: 'completed',
      tech: ['MongoDB', 'ExpressJS', 'ReactJS', 'Node.js', 'JWT', 'Bcrypt', 'Bootstrap']
    }
  ];
  
  const program_project = [
    {
      image: Rock,
      heading: 'Rock Paper Scissor - Console Based',
      description: 'A Python-based console game implementing the classic Rock Paper Scissors. Features clear instructions and interactive gameplay for an engaging experience.',
      link: "https://github.com/Pratik2401/CodeSoft-Python/blob/main/Rock%20paper%20scissor.py",
      tags: 'completed',
      tech: ['Python']
    },
    {
      image: Password,
      heading: 'Password Generator - Console Based',
      description: 'A Python program that generates secure passwords with varying complexity, helping users create strong, unique passwords for better cybersecurity.',
      link: "https://github.com/Pratik2401/CodeSoft-Python/blob/main/Password%20Generator.py",
      tags: 'completed',
      tech: ['Python']
    },
    {
      image: Calculator,
      heading: 'Calculator - Console Based',
      description: 'A simple Python calculator performing basic arithmetic operations. Designed for easy use in a console interface, making it a great beginner-friendly project.',
      link: "https://github.com/Pratik2401/CodeSoft-Python/blob/main/Calculator.py",
      tags: 'completed',
      tech: ['Python']
    }
  ];
  
  const freelancing = [
    {
      image: Kumbhathon,
      heading: "Kumbhathon",
      description: "Developed a WordPress website for Kumbhathon, gaining hands-on experience in UI design and user experience optimization. Integrated themes, implemented redirects, and explored essential WordPress features. Ensured website responsiveness across devices for an accessible and seamless user experience.",
      link: "https://kumbhathon.com/",
      tags: 'completed',
      tech: ['WordPress', 'UI Design', 'Responsive Design']
    }
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6 
      }
    },
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, x: 50 }, // Start from the right (50px)
    show: {
      opacity: 1,
      x: 0, // Move to its original position
      transition: {
        duration: 0.5,
        staggerChildren: 0.2, // Apply stagger effect to each button individually when showing
      },
    },
    exit: {
      opacity: 0,
      x: 50, // Move to the right again
      transition: {
        duration: 0.5,
      },
    },
  };
  
  return (
    <div id="projects">
      <div className="heading">Projects</div>
      <Container>
      <Row>
    <div className="sub_heading">Web Dev Projects</div>
    {front_end_projects.map((project, index) => {
      const { ref, inView } = useInView({
        triggerOnce: false, // Trigger both on enter and leave
        threshold: 0.65, // Set how much of the element needs to be in view before triggering
      });

      return (
        <Col key={index} md={4} className="mb-4 d-flex justify-content-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'} // Trigger animation when inView is true or false
            variants={cardVariants}
            transition={{
              delay: (index+1) * 1, // Adjust stagger delay based on index
              duration: 0.6,
            }}
          >
            <Card
              className="project_cards"
              style={{ width: '18rem', height: 'auto', position: 'relative' }}
        
            >
              <Card.Img src={project.image} className="project_images" />
              <Card.Body>
                <Card.Title>{project.heading}</Card.Title>
                <div className="tech-tags-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {project.tech.map((tech, idx) => (
                  <motion.div
  key={idx}
  initial="hidden"
  animate={inView ? 'show' : 'hidden'}
  variants={buttonVariants}
  transition={{ delay: idx * 0.2 }} // Stagger the delay based on the index
  style={{
    marginRight: '10px', 
    marginBottom: '10px', 
    display: 'flex', 
    justifyContent: 'center', // Centers buttons horizontally
    alignItems: 'center', // Centers buttons vertically (if needed)
    flexWrap: 'wrap', // Wraps buttons to the next line if they overflow
  }}
>
  <Button className="tech-tag">
    {tech}
  </Button>
</motion.div>
                ))}
              </div>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
              <CardFooter>
                <Button variant="primary" href={project.link} target="_blank" className="project_vist">
                  <strong>Visit</strong>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </Col>
      );
    })}
  </Row>

        <Row>
          <div className="sub_heading">Coding Projects</div>
          {program_project.map((project, index) => {
            const { ref, inView } = useInView({ triggerOnce: false });

            return (
              <Col key={index} md={4} className="mb-4 d-flex justify-content-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'} // Trigger animation when inView is true or false
            variants={cardVariants}
            transition={{
              delay: (index+1) * 1, // Adjust stagger delay based on index
              duration: 0.6,
            }}
          >
            <Card
              className="project_cards"
              style={{ width: '18rem', height: 'auto', position: 'relative' }}
        
            >
              <Card.Img src={project.image} className="project_images" />
              <Card.Body>
                <Card.Title>{project.heading}</Card.Title>
                <div className="tech-tags-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {project.tech.map((tech, idx) => (
                  <motion.div
  key={idx}
  initial="hidden"
  animate={inView ? 'show' : 'hidden'}
  variants={buttonVariants}
  transition={{ delay: idx * 0.2 }} // Stagger the delay based on the index
  style={{
    marginRight: '10px', 
    marginBottom: '10px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', // Centers the content vertically
    width: '100%', // Ensures the div takes up full width
  }}
>
  <Button className="tech-tag">
    {tech}
  </Button>
</motion.div>

                ))}
              </div>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
              <CardFooter>
                <Button variant="primary" href={project.link} target="_blank" className="project_vist">
                  <strong>Visit</strong>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </Col>
            );
          })}
        </Row>

        <Row>
          <div className="sub_heading">Freelancing Projects</div>
          {freelancing.map((project, index) => {
            const { ref, inView } = useInView({ triggerOnce: false });

            return (
              <Col key={index} md={4} className="mb-4 d-flex justify-content-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'} // Trigger animation when inView is true or false
            variants={cardVariants}
            transition={{
              delay: (index+1) * 1, // Adjust stagger delay based on index
              duration: 0.6,
            }}
          >
            <Card
              className="project_cards"
              style={{ width: '18rem', height: 'auto', position: 'relative' }}
        
            >
              <Card.Img src={project.image} className="project_images" />
              <Card.Body>
                <Card.Title>{project.heading}</Card.Title>
                <div className="tech-tags-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {project.tech.map((tech, idx) => (
                  <motion.div
  key={idx}
  initial="hidden"
  animate={inView ? 'show' : 'hidden'}
  variants={buttonVariants}
  transition={{ delay: idx * 0.2 }} // Stagger the delay based on the index
  style={{
    marginRight: '10px', 
    marginBottom: '10px', 
    display: 'flex', 
    justifyContent: 'center', // Centers buttons horizontally
    alignItems: 'center', // Centers buttons vertically (if needed)
    flexWrap: 'wrap', // Wraps buttons to the next line if they overflow
  }}
>
  <Button className="tech-tag">
    {tech}
  </Button>
</motion.div>   ))}
              </div>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
              <CardFooter>
                <Button variant="primary" href={project.link} target="_blank" className="project_vist">
                  <strong>Visit</strong>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}