
import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "swiper/css/pagination";
import Card from 'react-bootstrap/Card';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Arduino from './assets/images/arduino.png';
import RaspberryPi from './assets/images/raspberry.png';
import Html5 from './assets/images/html5.png';
import CSS from './assets/images/CSS.png';
import JS from './assets/images/JS.png';
import ReactPic from './assets/images/React.png';
import MySQL from './assets/images/mysql.png';
import Figma from './assets/images/figma.png';
import Linux from './assets/images/linux.png';
import ASM from './assets/images/asm.png';
import EmbededC from './assets/images/embeded-c.png';
import Bootstrap from './assets/images/bootstrap.png';
import C from './assets/images/C.png';
import Cpp from './assets/images/Cpp.png';
import Python from './assets/images/python.png';
import Expressjs from './assets/images/express-js.png';
import Nodejs from './assets/images/nodejs.png';
import MachineLearning from './assets/images/machinlearning.png';
import Datasci from './assets/images/datasci.png';
import Image from './assets/images/image_process.png';
import GenAI from './assets/images/GenAI.png'
import ChatBot from './assets/images/chatbot.png'
import './Myskill.css';

const skills = [
  {
    image: Arduino,
    heading: 'Arduino',
    description: 'Design and implement embedded systems using Arduino, creating innovative hardware projects.',
    status: 'completed',
    domain: 'Embedded Systems & IoT'
  },
  {
    image: RaspberryPi,
    heading: 'Raspberry Pi',
    description: 'Develop IoT solutions with Raspberry Pi, integrating sensors and actuators for smart applications.',
    status: 'completed',
    domain: 'Embedded Systems & IoT'
  },
  {
    image: Html5,
    heading: 'HTML 5',
    description: 'Craft modern web pages with HTML5, ensuring semantic, accessible, and well-structured content.',
    status: 'completed',
    domain: 'Web Development'
  },
  {
    image: CSS,
    heading: 'CSS',
    description: 'Style web applications with CSS, enhancing user experience with responsive and visually appealing designs.',
    status: 'completed',
    domain: 'Web Development'
  },
  {
    image: JS,
    heading: 'JavaScript',
    description: 'Build dynamic and interactive web applications using JavaScript, enabling rich user interfaces.',
    status: 'completed',
    domain: 'Web Development'
  },
  {
    image: ReactPic,
    heading: 'React JS',
    description: 'Develop scalable single-page applications with React JS, leveraging its component-based architecture.',
    status: 'completed',
    domain: 'Web Development'
  },
  {
    image: MySQL,
    heading: 'MySQL',
    description: 'Manage and manipulate databases with MySQL, ensuring efficient data storage and retrieval.',
    status: 'completed',
    domain: 'Web Development'
  },
  {
    image: Figma,
    heading: 'Figma',
    description: 'Design user interfaces and user experiences with Figma, creating prototypes and design systems.',
    status: 'completed',
    domain: 'Web Development'
  },
  {
    image: Linux,
    heading: 'Linux',
    description: 'Utilize Linux for development and deployment, leveraging its robust command-line tools and environments.',
    status: 'completed',
    domain: 'Operating Systems & Development Tools'
  },
  {
    image: ASM,
    heading: 'Assembly Language',
    description: 'Write low-level code with Assembly language, optimizing performance for critical applications.',
    status: 'completed',
    domain: 'Embedded Systems & IoT'
  },
  {
    image: EmbededC,
    heading: 'Embedded C',
    description: 'Develop firmware for embedded systems using Embedded C, ensuring efficient and reliable code.',
    status: 'completed',
    domain: 'Embedded Systems & IoT'
  },
  {
    image: Bootstrap,
    heading: 'BootStrap',
    description: 'Develop responsive, mobile-first websites with Bootstrap, ensuring efficient and reliable designs.',
    status: 'completed',
    domain: 'Web Development'
  },
  {
    image: C,
    heading: 'C',
    description: 'Write low-level code with C, optimizing performance for critical applications.',
    status: 'completed',
    domain: 'Embedded Systems & IoT'
  },
  {
    image: Cpp,
    heading: 'C++',
    description: 'Develop firmware for embedded systems using C++, ensuring efficient and reliable code.',
    status: 'completed',
    domain: 'Embedded Systems & IoT'
  },
  {
    image: Python,
    heading: 'Python',
    description: 'Develop applications with Python, including web development, data analysis, and automation.',
    status: 'completed',
    domain: 'Programming'
  },
  {
    image: Nodejs,
    heading: 'Node.js',
    description: 'Learning to build scalable network applications using Node.js, leveraging its event-driven architecture.',
    status: 'completed',
    domain: 'Web Development'
  },
  {
    image: Expressjs,
    heading: 'Express js',
    description: 'Building scalable network applications with Node.js using Express.js.',
    status: 'completed',
    domain: 'Web Development'
  },
  {
    image: Image,
    heading: 'Computer Vision',
    description: 'Analyzing and transforming images to extract valuable information or enhance visual quality for various applications.',
    status: 'completed',
    domain: 'AI & Data Science'
  },
  {
    image: MachineLearning,
    heading: 'Machine Learning',
    description: 'Studying machine learning algorithms and techniques to develop predictive models and automated decision-making systems.',
    status: 'ongoing',
    domain: 'AI & Data Science'
  },
  {
    image: Datasci,
    heading: 'Data Science',
    description: 'Exploring data analysis methods and statistical techniques to derive insights and solve complex business problems.',
    status: 'ongoing',
    domain: 'AI & Data Science'
  },
  {
    image: ChatBot,
    heading: 'Chatbots',
    description: 'Building AI-driven conversational agents using NLP, machine learning, and deep learning techniques for interactive and automated responses.',
    status: 'ongoing',
    domain: 'AI & Data Science'
},
{
    image: GenAI,
    heading: 'Generative AI',
    description: 'Developing AI models that generate text, images, and videos using deep learning techniques like GANs, transformers, and diffusion models.',
    status: 'ongoing',
    domain: 'AI & Data Science'
}

];

const groupedSkills = skills.reduce((acc, skill) => {
  if (!acc[skill.domain]) acc[skill.domain] = [];
  acc[skill.domain].push(skill);
  return acc;
}, {});

const MyWork = () => {
  return (
    <div id="skills">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="heading"
      style={{ fontFamily: "cocogoose", fontWeight: "bolder", color: "white", fontSize: "2rem" }}
    >
      My Skills
    </motion.div>

    {Object.keys(groupedSkills).map((domain, idx) => {
      const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

      return (
        <motion.div
          key={idx}
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: idx * 0.5 }}
        >
          <h2 className="domain-heading">{domain}</h2>
          <Swiper
              modules={[ Pagination, Autoplay]}
  spaceBetween={7} // Reduced spacing for smoother transition
  slidesPerView={1}
  centeredSlides={true}
  breakpoints={{
    320: { slidesPerView: 1.07, spaceBetween: 1 }, // Mobile view (show part of next/prev slide)
    768: { slidesPerView: 2.4, spaceBetween: 15 }, // Tablet view
    1024: { slidesPerView: 3.8, spaceBetween: 15 }, // Desktop view
  }}
  loop={true}
  
  pagination={{ clickable: true }}
  autoplay={{ delay: 2500, disableOnInteraction: false }} // Reduced delay for continuous smooth motion
  speed={1000} // Slower speed for smoother effect
  freeMode={true} // Allows smooth transitions when manually scrolling
  grabCursor={true} // Makes it feel interactive
  className="skill-swiper"
          >
            {groupedSkills[domain].map((skill, index) => (
              <SwiperSlide key={index} className="d-flex justify-content-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={ skill.status === "completed" ? "completed-card skillCard" : "ongoing-card skillCard"}
                    style={{ width: "18rem", height: "18rem", position: "relative" }}
                  >
                    {skill.status === "ongoing" && (
                      <div className="ribbon-wrapper">
                        <div className="ribbon">Learning</div>
                      </div>
                    )}
                    <Card.Img variant="top" src={skill.image} className="card-img-top container my_skills_cards" />
                    <Card.Body>
                      <Card.Title>{skill.heading}</Card.Title>
                      <Card.Text>{skill.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      );
    })}
  </div>
  );
}

export default MyWork;
