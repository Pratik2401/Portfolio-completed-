import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Meta from './components/Meta';

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

import Textsaver from './assets/images/Projects/text-saver.png'
import Maharashtra from './assets/images/Projects/Maharashtra.jpg'
import BoardGames from './assets/images/Projects/BoardGames.jpg'
import contactApp from './assets/images/Projects/contactapp.png'
import Calculator from './assets/images/Projects/calculator.png'
import Password from './assets/images/Projects/password_manager.png'
import Rock from './assets/images/Projects/rock_paper_scissor.png'
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence from framer-motion
import './Project.css';
import { CardFooter } from 'react-bootstrap';


export default function Project() {    
  // Add JSON-LD structured data for projects
  useEffect(() => {
    const projectsSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": []
    };

    // Add JSON-LD structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(projectsSchema);
    document.head.appendChild(script);
    
    return () => {
      // Clean up
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  const front_end_projects = [
    {
      image: Todo,
      heading: 'TO-DO List',
      description: 'A task management app built with HTML, CSS, and JavaScript. Users can add, delete, and prioritize tasks with extra descriptions. The interface is clean and user-friendly, making daily task management seamless.',
      link: "https://pratik2401.github.io/TO-DO-List/",
      tags: 'completed',
      tech: ['Vanilla JavaScript','LocalStorage','HTML5']
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
      tech: ['CSS3', 'JavaScript', 'Typed.js']
    },
    {
      image: Blog,
      heading: 'Blog Website',
      description: 'A blogging platform using HTML, CSS, JavaScript, and Bootstrap. It allows multiple users to create, manage, and store blog posts with a simple and elegant interface, utilizing local storage.',
      link: "https://pratik2401.github.io/Blog-Website/",
      tags: 'completed',
      tech: ['HTML5', 'JavaScript', 'Bootstrap']
    },
    {
      image: Weather,
      heading: 'Weather App',
      description: 'A ReactJS weather app using REST API. Features real-time weather updates with useContext and createContext for state management. Offers a clean, intuitive interface for quick weather insights.',
      link: "https://castingweather.netlify.app/",
      tags: 'completed',
      tech: ['ReactJS', 'REST API','useContext']
    },
    {
      image: Dyazo,
      heading: 'Dyazo-Ecommerce',
      description: 'An e-commerce website redesigned with HTML, CSS, JavaScript, and Bootstrap. Implements Soft UI (Neuromorphism) for a modern look and ensures responsive design for a seamless shopping experience.',
      link: "https://dyazo.netlify.app/",
      tags: 'completed',
      tech: ['CSS', 'JavaScript', 'Bootstrap', 'Soft UI']
    },
    {
      image: News,
      heading: 'News APP',
      description: 'A ReactJS news app fetching the latest news via REST API. Uses createContext and useContext for state management, delivering news updates with a user-friendly layout.',
      link: "https://github.com/Pratik2401/News",
      tags: 'completed',
      tech: ['ReactJS', 'REST API', 'useContext' ]
    },
   
    {
      image: Textsaver,
      heading: 'Text Saver',
      description: 'A MERN stack app allowing users to save text and images with a shareable URL. A convenient solution for quickly storing and sharing notes or content.',
      link: "https://savetext.vercel.app/",
      tags: 'completed',
      tech: ['MERN', 'Dnyamic Links','Bootstrap']
    },
    {
      image: contactApp,
      heading: 'Contact Sphere',
      description: 'A MERN stack contact management app featuring JWT authentication, bcrypt encryption, and a React Bootstrap UI. Ensures secure and smooth user experience.',
      link: "https://spherecontact.vercel.app/",
      tags: 'completed',
      tech: ['MERN', 'JWT', 'Bcrypt', 'Bootstrap']
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
      heading: 'Python Calculator - Console Based',
      description: 'A simple Python calculator performing basic arithmetic operations. Designed for easy use in a console interface, making it a great beginner-friendly project.',
      link: "https://github.com/Pratik2401/CodeSoft-Python/blob/main/Calculator.py",
      tags: 'completed',
      tech: ['Python']
    }
  ];
  const freelancing = [
  {
    image: BoardGames,
    heading: "Im Board",
    description:
      "An event registration system with full admin control for creating, updating, and deleting events. Features include an admin panel, basic analytics, and automated email alerts triggered on user registration, ensuring smooth event planning and participant tracking.",
    link: "https://events.imboard.in",
    tags: 'completed',
    tech: ['MERN', 'Admin Panel', 'Email Automation']
  },
  {
    image: Maharashtra,
    heading: "Maharashtra Farms",
    description:
      "A fresh produce subscription platform offering weekly deliveries of vegetables, fruits, and salads. Users can manage plans, set delivery dates, and customize orders. Admins control logistics and user data through a clean, intuitive interface designed for rural efficiency.",
    link: "https://maharashtrafarms.com",
    tags: 'completed',
    tech: ['MERN', 'Subscription', 'Delivery Platform']
  },
  {
    image: Kumbhathon,
    heading: "Kumbhathon",
    description:
      "Built a responsive WordPress site for Kumbhathon with focus on UI/UX, mobile accessibility, and layout design. Integrated themes, implemented redirects, and ensured device compatibility. This project strengthened my frontend design and WordPress deployment skills.",
    link: "https://kumbhathon.com/",
    tags: 'completed',
    tech: ['WordPress','Responsive Design']
  }
];
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4 
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    },
  };
  
  const buttonVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  
  return (
    <>
      <Meta 
        title="Projects - Pratik Mali Portfolio"
        description="Explore my portfolio of web development, freelancing, and coding projects including MERN stack applications, responsive websites, and Python programs."
        keywords="Pratik Mali, Web Projects, MERN Stack, Freelance Projects, React Projects, Portfolio"
      />
      <div id="projects">
      <div className="heading">Projects</div>
      <Container>
        <div className="freelance-section">
          <div className="sub_heading">Freelancing Projects</div>
          <div className="freelance-grid">
            {freelancing.map((project, index) => {
              const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial="hidden"
                  animate={inView ? 'show' : 'hidden'}
                  variants={cardVariants}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="freelance-card-wrapper"
                >
                  <div className="freelance-card-new">
                    <div className="freelance-img-container">
                      <img
                        src={project.image}
                        alt={project.heading}
                        className="freelance-img-new"
                        loading="lazy"
                      />
                      <div className="freelance-overlay">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="freelance-visit-btn">
                          <span>Visit Site</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="freelance-content">
                      <div className="freelance-header">
                        <h3 className="freelance-title-new">{project.heading}</h3>
                        <span className="freelance-status">Completed</span>
                      </div>
                      <p className="freelance-desc-new">{project.description}</p>
                      <div className="freelance-tech-stack">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="freelance-tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <Row className='Project-Rows'>
          <div className="sub_heading">Web Dev Projects</div>
          <AnimatePresence>
            {front_end_projects.map((project, index) => {
              const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
              return (
                <Col key={index} md={4} sm={6} xs={12} className="Project-Col mb-4 d-flex justify-content-center">
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    exit="exit"
                    variants={cardVariants}
                    transition={{ delay: 0.05 * index, duration: 0.4 }}
                  >
                    <Card className="project_cards" style={{ width: '280px', maxWidth: '100%' }}>
                      <Card.Img src={project.image} className="project_images" alt={project.heading} loading="lazy" />
                      <Card.Body>
                        <Card.Title>{project.heading}</Card.Title>
                        <div className="tech-tags-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                          {project.tech.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
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
          </AnimatePresence>
        </Row>

        
      </Container>
    </div>
    </>
  );
}