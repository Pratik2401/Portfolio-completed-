import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Neural from './assets/images/neural.png'
import JsCertificate from './assets/images/hackerrank-js.png'
import PyCertificate from './assets/images/hackerrank-python.png'
import googleCloud from './assets/images/googlecloud.png'
import JIT from './assets/images/jit.png'
import Cod_py from './assets/images/codsoft-cpp.jpg'
import Cod_cpp from './assets/images/codsoft-cpp.jpg'
import nptelMicrocontroller from './assets/images/nptlMicro.jpg'
import mlIntern from './assets/images/mlIntern.png'
import npteldatasci from './assets/images/npteldatasci.png'
import Hyperparameter from './assets/images/hyperparameter.png'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './Certification.css';
import { CardFooter } from 'react-bootstrap';

const certification = [
  {
    image: JsCertificate,
    link: "https://www.linkedin.com/posts/pratikmali24_hackerrank-javascript-codingskills-activity-7216135921153286145-ZQ5F?utm_source=share&utm_medium=member_desktop",
    heading: "Hackerrank JavaScript Basics",
    description: "Completed JavaScript challenges on Hackerrank, demonstrating proficiency in fundamental concepts like variables, loops, functions, and arrays.",
    category: "Programming Language"
  },
  {
    image: PyCertificate,
    link: "https://www.linkedin.com/posts/pratikmali24_python-hackerrank-certified-activity-7165201825493716992-DaR-?utm_source=share&utm_medium=member_desktop",
    heading: "Hackerrank Python Basics",
    description: "Completed Python challenges on Hackerrank, showcasing skills in variables, loops, functions, and data structures.",
    category: "Programming Language"
  },
  {
    image: JIT,
    link: "https://www.linkedin.com/posts/pratikmali24_python-hackerrank-certified-activity-7165201825493716992-DaR-?utm_source=share&utm_medium=member_desktop",
    heading: "JIT C Hackathon",
    description: "Participated in a C programming hackathon at JIT, applying algorithmic problem-solving and low-level programming skills.",
    category: "Hackathon"
  },
  {
    image: Cod_cpp,
    link: "https://www.linkedin.com/posts/pratikmali24_c-internship-codsoftexperience-activity-7128638657225273345-uAmO?utm_source=share&utm_medium=member_desktop",
    heading: "Codsoft C++ Internship",
    description: "Gained hands-on experience in C++ development, working on real-world projects and learning software development methodologies.",
    category: "Programming Language"
  },
  {
    image: Cod_py,
    link: "https://www.linkedin.com/posts/pratikmali24_codsoft-activity-7124074043850244096-5bYB?utm_source=share&utm_medium=member_desktop",
    heading: "Codsoft Python Internship",
    description: "Worked on Python projects, improving skills in scripting, automation, and software development during the internship.",
    category: "Programming Language"
  },
  {
    image: googleCloud,
    link: "https://www.linkedin.com/posts/pratikmali24_googlestudentclub-googlecloud-learningjourney-activity-7121788306316570625--5H_?utm_source=share&utm_medium=member_desktop",
    heading: "Google Cloud Certification",
    description: "Certified in Google Cloud, demonstrating proficiency in cloud services, deployment, and infrastructure management.",
    category: "Cloud"
  },
  {
    image: nptelMicrocontroller,
    link: "https://www.linkedin.com/posts/pratikmali24_embeddedsystems-microcontrollers-iitb-activity-7227575130330132480-ecHJ?utm_source=share&utm_medium=member_desktop",
    heading: "NPTEL Microcontroller Certificate",
    description: "Certified in microcontrollers and embedded systems, learning Embedded C, Assembly Language, and real-world applications.",
    category: "IoT"
  },
  {
    image: mlIntern,
    link: "https://www.linkedin.com/posts/pratikmali24_ai-machinelearning-tensorflow-activity-7240973293015515136-qG-h?utm_source=share&utm_medium=member_desktop",
    heading: "Virtual Internship AI/ML by EduSkills",
    description: "Completed an AI/ML internship covering object detection, TensorFlow, and real-world applications, supported by Google for Developers.",
    category: "AI"
  },
  {
    image: npteldatasci,
    link: "https://www.linkedin.com/posts/pratikmali24_nptel-datasciencemastery-pythonexpertise-activity-7247437225905319936-pxRT?utm_source=share&utm_medium=member_desktop",
    heading: "Python With Data Science",
    description: "Studied Python for data science, covering NumPy, Pandas, Matplotlib, and data manipulation techniques.",
    category: "Data Science"
  },
  {
    image: Neural,
    link: "https://www.coursera.org/account/accomplishments/verify/5XTTZSBEFFBY",
    heading: "Neural Networks and Deep Learning",
    description: "Learned deep learning fundamentals, neural networks, backpropagation, and optimization with hands-on TensorFlow implementation.",
    category: "AI"
  },
  {
    image: Hyperparameter,
    link: "https://www.coursera.org/account/accomplishments/verify/HSA412BPRY8I",
    heading: "Improving Deep Neural Networks",
    description: "Studied hyperparameter tuning, batch normalization, dropout, and optimization techniques like Adam and RMSprop to improve deep learning models.",
    category: "AI"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const MyCertifications = () => {
  const categories = [...new Set(certification.map((item) => item.category))];

  return (
    <div id='certification'>
    
    <div className="heading">Certifications</div>
      {categories.map((category, idx) => {
        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

        return (
          <motion.div
            key={idx}
            ref={ref}
            variants={containerVariant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            
          >
          
            <Container className='mb-5'>
              <motion.h3 className='sub_heading mb-4' variants={fadeInUp}>
                {category}
              </motion.h3>
              <Row>
                {certification
                  .filter((item) => item.category === category)
                  .map((skill, index) => (
                    <Col key={index} className="d-flex justify-content-center mb-4">
                      <motion.div variants={fadeInUp}>
                        <Card style={{ width: '18rem', height: 'auto', position: 'relative' }} className='certificates_card'>
                          <Card.Img variant="top" src={skill.image} className="card-img-top container certificates_card_img" />
                          <Card.Body>
                            <Card.Title>{skill.heading}</Card.Title>
                            <Card.Text>{skill.description}</Card.Text>
                          </Card.Body>
                          <CardFooter>
                            <Button href={skill.link} target="_blank" className='project_vist'>
                              <strong>See Certificate</strong>
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    </Col>
                  ))}
              </Row>
            </Container>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MyCertifications;
