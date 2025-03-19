import {React,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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

import './Project.css';

export default function Project() {    
  useEffect(() => {
    const handleMouseMove = (event) => {
        const card = event.currentTarget;
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;

        const mouseX = event.clientX - cardCenterX;
        const mouseY = event.clientY - cardCenterY;

        const rotateX = (mouseY / cardRect.height) * 15;
        const rotateY = (mouseX / cardRect.width) * -15;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const handleMouseLeave = (event) => {
        const card = event.currentTarget;
        card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    const handleMouseDown = (event) => {
        const card = event.currentTarget;
        card.style.transform = `rotateX(0deg) rotateY(0deg) scale(0.97)`;
    };

    const handleMouseUp = (event) => {
        const card = event.currentTarget;
        card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1.05)`;
    };

    const projectCards = document.querySelectorAll('.project_cards');

    projectCards.forEach((card) => {
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
        card.addEventListener('mousedown', handleMouseDown);
        card.addEventListener('mouseup', handleMouseUp);
    });

    return () => {
        projectCards.forEach((card) => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
            card.removeEventListener('mousedown', handleMouseDown);
            card.removeEventListener('mouseup', handleMouseUp);
        });
    };
}, []);

const front_end_projects = [
  {
    image: Todo,
    heading: 'TO-DO List',
    description: 'A task management app built with HTML, CSS, and JavaScript. Users can add, delete, and prioritize tasks with extra descriptions. The interface is clean and user-friendly, making daily task management seamless.',
    link: "https://pratik2401.github.io/TO-DO-List/",
    tags: 'completed',
  },
  {
    image: Spot,
    heading: 'Spot Seekers',
    description: 'A ReactJS-based smart parking system that fetches sensor values via XML and updates them in real-time. Uses serial communication, Bootstrap, and useEffect for a smooth user experience. Login: admin/admin.',
    link: "https://projectparking.netlify.app/",
    tags: 'completed',
  },
  {
    image: Quiz,
    heading: 'Quiz Generator',
    description: 'An interactive quiz app built with HTML, CSS, JSON, and JavaScript. Features typed.js for typing effects and local storage for saving quiz data. Supports multiple question types for an engaging experience.',
    link: "https://pratik2401.github.io/quiz-generator/",
    tags: 'completed',
  },
  {
    image: Blog,
    heading: 'Blog Website',
    description: 'A blogging platform using HTML, CSS, JavaScript, and Bootstrap. It allows multiple users to create, manage, and store blog posts with a simple and elegant interface, utilizing local storage.',
    link: "https://pratik2401.github.io/Blog-Website/",
    tags: 'completed',
  },
  {
    image: Weather,
    heading: 'Weather App',
    description: 'A ReactJS weather app using REST API. Features real-time weather updates with useContext and createContext for state management. Offers a clean, intuitive interface for quick weather insights.',
    link: "https://castingweather.netlify.app/",
    tags: 'completed',
  },
  {
    image: Dyazo,
    heading: 'Dyazo-Ecommerce',
    description: 'An e-commerce website redesigned with HTML, CSS, JavaScript, and Bootstrap. Implements Soft UI (Neuromorphism) for a modern look and ensures responsive design for a seamless shopping experience.',
    link: "https://dyazo.netlify.app/",
    tags: 'completed',
  },
  {
    image: News,
    heading: 'News APP',
    description: 'A ReactJS news app fetching the latest news via REST API. Uses createContext and useContext for state management, delivering real-time news updates with a user-friendly layout.',
    link: "https://github.com/Pratik2401/News",
    tags: 'completed',
  },
  {
    image: Text,
    heading: 'Text Editor',
    description: 'A React-based text editor with essential editing features. Offers a smooth and modern interface for writing and formatting text efficiently.',
    link: "https://github.com/Pratik2401/Text_Editor",
    tags: 'completed',
  },
  {
    image: Textsaver,
    heading: 'Text Saver',
    description: 'A MERN stack app allowing users to save text and images with a shareable URL. A convenient solution for quickly storing and sharing notes or content.',
    link: "https://savetext.vercel.app/",
    tags: 'completed',
  },
  {
    image: contactApp,
    heading: 'Contact Sphere',
    description: 'A MERN stack contact management app featuring JWT authentication, bcrypt encryption, and a React Bootstrap UI. Ensures secure and smooth user experience.',
    link: "https://spherecontact.vercel.app/",
    tags: 'completed',
  }
];

let program_project = [
  {
    image: Rock,
    heading: 'Rock Paper Scissor - Console Based',
    description: 'A Python-based console game implementing the classic Rock Paper Scissors. Features clear instructions and interactive gameplay for an engaging experience.',
    link: "https://github.com/Pratik2401/CodeSoft-Python/blob/main/Rock%20paper%20scissor.py",
    tags: 'completed',
  },
  {
    image: Password,
    heading: 'Password Generator - Console Based',
    description: 'A Python program that generates secure passwords with varying complexity, helping users create strong, unique passwords for better cybersecurity.',
    link: "https://github.com/Pratik2401/CodeSoft-Python/blob/main/Password%20Generator.py",
    tags: 'completed',
  },
  {
    image: Calculator,
    heading: 'Calculator - Console Based',
    description: 'A simple Python calculator performing basic arithmetic operations. Designed for easy use in a console interface, making it a great beginner-friendly project.',
    link: "https://github.com/Pratik2401/CodeSoft-Python/blob/main/Calculator.py",
    tags: 'completed',
  }
];

  return (
    <div id="projects">
      <div className="heading">Projects</div>
      <Container id='skills'>
        <Row>
          <div className="sub_heading">FrontEnd Projects</div>
          {front_end_projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4 d-flex justify-content-center">
              <Card className='project_cards' style={{ width: '18rem', height: 'auto', position: 'relative' }}>
                <Card.Img variant="top" src={project.image} className="card-img-top project_images" />
                <Card.Body>
                  <Card.Title>{project.heading}</Card.Title>
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                  <Button variant="primary" href={project.link} target="_blank" className='project_vist'><strong>Vist</strong></Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <div className="sub_heading">Coding Projects</div>
          {program_project.map((project, index) => (
            <Col key={index} md={4} className="mb-4 d-flex justify-content-center">
              <Card className='project_cards' style={{ width: '18rem', height: 'auto', position: 'relative' }}>
                <Card.Img variant="top" src={project.image} className="card-img-top project_images" />
                <Card.Body>
                  <Card.Title>{project.heading}</Card.Title>
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                  <Button variant="primary" href={project.link} target="_blank" className='project_vist'><strong>Vist</strong></Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
