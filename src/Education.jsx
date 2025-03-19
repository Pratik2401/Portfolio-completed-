import './Education.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useState, useEffect, useRef } from 'react';

export default function Education() {
  const elementsRef = useRef([]); // Array of element references
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = elementsRef.current.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])]); // Track visible indexes
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is in view
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const timelineData = [
    { 
        date: "2015 - 2020", 
        title: "Higher Secondary", 
        subtitle: "ST. Francis High School", 
        text: "Participated in various extracurricular activities including olympaids of maths and science, winning several olympaids competitions."
    },
    { 
        date: "2022 - 2024", 
        title: "Junior College", 
        subtitle: "MET Institute of Science and Commerce", 
        text: `Completed higher secondary education at MET Institute of Science and Commerce with a major in Science and optional subject as Information Technology. Developed a passion for programming. 
               <br /> 
               <a href="https://metbhujbalknowledgecity.ac.in/metjrclg/" class='contact_me' target="_blank">Institute Website</a>`
    },
    { 
        date: "Sept 24 - Ongoing", 
        title: "Open Source/IoT Lead", 
        subtitle: "Google Developers Group", 
        text: `In charge of leading the GDG MET student club's open source and IoT projects. Leads initiatives, encourages teamwork, and interacts with the public to further technology advancement. 
               <br />
               <a href="https://gdg.community.dev/gdg-on-campus-met-institute-of-engineering-bhujbal-knowledge-city-nashik-india/" class='contact_me' target="_blank">Organization Website</a>`
    },
    { 
        date: "Jan 25 - Ongoing", 
        title: "Internship", 
        subtitle: "CHRP Technologies", 
        text: `As an AI/Data Intern at CHRP Technologies, I optimized the annotator UI, making it three times faster for a smoother user experience. I am currently working on converting bounding box coordinates to polygon coordinates to improve annotation precision. Alongside this, I am exploring and learning about training computer vision models to enhance automation and accuracy in annotation tasks.
               <br />
               <a href="https://chrptech.com/" class='contact_me' target="_blank">Organization Website</a>`
    },
    { 
        date: "2022 - 2026", 
        title: "Bachelor's Degree", 
        subtitle: "MET Institute of Engineering", 
        text: `Currently pursuing a Bachelor's Degree in Artificial Intelligence & Data Science at MET Institute of Engineering.
               <br />
               <a href="https://metbkcengg.ac.in/" class='contact_me' target="_blank">Institute Website</a>`
    }
];


  return (
    <div id='education'>
      <div className="heading" style={{
        fontFamily: 'cocogoose',
        fontWeight: 'bolder',
        color: 'white',
        fontSize: '2rem',
      }}>
        Education
      </div>

      <VerticalTimeline lineColor="#cd0ff9"> 
        {timelineData.map((item, index) => (
          <VerticalTimelineElement 
            key={index}
            className="vertical-timeline-element--work positions"
            date={item.date}
          >
            {/* Wrap content in a div and assign ref */}
            <div
              ref={(el) => (elementsRef.current[index] = el)}
              className={`timeline-element ${visibleIndexes.includes(index) ? "visible" : ""}`}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
              <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
