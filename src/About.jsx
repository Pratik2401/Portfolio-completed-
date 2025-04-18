import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "react-bootstrap/Image";

// Images
import aboutMe from './assets/images/about_me.jpg';
import aboutJourney from './assets/images/about_journey.jpg';
import aboutGoals from './assets/images/about_goals.jpg';
import aboutHobby from './assets/images/about_hooby.jpg';
import aboutWho from './assets/images/about_who_I.jpg';
import aboutConnect from './assets/images/about_connect.jpg';

const sections = [
  {
    id: "about_me",
    title: "About Me",
    text: "Hi, I’m Pratik Mali. I’m a passionate and driven individual currently pursuing a degree in technology-related fields at MET Institute of Engineering. Originally from Nashik, I’ve always been fascinated by technology and innovation, which led me to where I am today.",
    image: aboutMe,
  },
  {
    id: "journey",
    title: "My Journey",
    text: "From an early age, I’ve been captivated by the world of technology and its magical ability to automate tasks and conjure up innovative solutions. This fascination soon bloomed into a full-blown passion that propels me to dive headfirst into fields like IoT, web development, and sensor technology.",
    image: aboutJourney,
  },
  {
    id: "who_i_am",
    title: "Who I Am",
    text: "I’ve come to believe that perseverance, creativity, and strong leadership are not just professional virtues but essential qualities that enrich every aspect of life. Those who know me best describe me as dedicated, innovative, collaborative, and a natural leader.",
    image: aboutWho,
  },
  {
    id: "looking_ahead",
    title: "Looking Ahead",
    text: "My ultimate goal is to blaze a trail as a leading engineer in the tech industry. I’m driven by a passion to revolutionize the field through groundbreaking technologies that enhance efficiency and automate processes, paving the way for a brighter future.",
    image: aboutGoals,
  },
  {
    id: "beyond_books",
    title: "Beyond Books",
    text: "Outside of my academic and professional pursuits, I enjoy gaming and listening to music. These activities help me stay balanced and energized. Whether it’s immersing myself in the latest video games or discovering new music genres, I find joy in exploring diverse interests.",
    image: aboutHobby,
  },
  {
    id: "connect",
    title: "Let's Connect",
    text: "I’m always eager to connect with like-minded individuals and explore new opportunities. Feel free to reach out to me at pratikmali242005@gmail.com or connect with me on LinkedIn.",
    image: aboutConnect,
  },
];

export default function About() {
  return (
    <div id="about">
      <div
        className="heading"
        style={{
          fontFamily: "cocogoose",
          fontWeight: "bolder",
          color: "white",
          fontSize: "2rem",
        }}
      >
        Get to Know <span className="home_name">Pratik Mali</span>
      </div>

      <Container>
        {sections.map((section, index) => {
          // Use the hook outside the map function
          const [ref, inView] = useInView({ threshold: 0.65, triggerOnce: false });

          return (
            <Row
              key={section.id}
              ref={ref}
              as={motion.div}
              initial={{ opacity: 0, x: index % 2 === 0 ? -700 : 700 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, y: 0, x: index % 2 === 0 ? -300 : 300 }}
              transition={{ duration: 1 }}
            >
              {index % 2 === 0 ? (
                <>
                  {/* Text first, image second */}
                  <Col md={6}>
                    <div className="grid-item d-flex justify-content-center">
                      <div className="about_subheading">
                        <motion.p
                          className="head"
                          initial={{ opacity: 0, y: 30 }}
                          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                          style={{
                            fontFamily: "cocogoose",
                            fontWeight: "bolder",
                            fontSize: "2rem",
                            color: "#cd0ff9",
                          }}
                        >
                          {section.title}
                        </motion.p>
                        <motion.p
                          className="info"
                          initial={{ opacity: 0, y: 30 }}
                          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        >
                          {section.text}
                        </motion.p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="grid-item d-flex justify-content-center">
                      <motion.div
                        initial={{ opacity: 0.8, scale: 0.1 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.1 }}
                        transition={{ duration: 1,delay:0.4 }}
                      >
                        <Image
                          src={section.image}
                          alt={section.title}
                          className="img-fluid rounded-circle about_img_size"
                        />
                      </motion.div>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  {/* Image first, text second */}
                  <Col md={6}>
                    <div className="grid-item d-flex justify-content-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={section.image}
                          alt={section.title}
                          className="img-fluid rounded-circle about_img_size"
                        />
                      </motion.div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="grid-item d-flex justify-content-center">
                      <div className="about_subheading">
                        <motion.p
                          className="head"
                          initial={{ opacity: 0, y: 30 }}
                          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                          style={{
                            fontFamily: "cocogoose",
                            fontWeight: "bolder",
                            fontSize: "2rem",
                            color: "#cd0ff9",
                          }}
                        >
                          {section.title}
                        </motion.p>
                        <motion.p
                          className="info"
                          initial={{ opacity: 0, y: 30 }}
                          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        >
                          {section.text}
                        </motion.p>
                      </div>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          );
        })}
      </Container>
    </div>
  );
}
