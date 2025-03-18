
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Education() {
  return (
    
    <div id='education'>
      <div className="heading" style={{
    fontFamily: 'cocogoose',
    fontWeight: 'bolder',
    color: 'white',
    fontSize: '2rem',
}}>Education</div>
      <VerticalTimeline lineColor="#cd0ff9">
      <VerticalTimelineElement className="vertical-timeline-element--work positions" date="2015 - 2020">
    
    <h3 className="vertical-timeline-element-title">Higher Secondary</h3>
    <h4 className="vertical-timeline-element-subtitle">ST.Francis High School</h4>
    <p>
Participated in various extracurricular activities including olympaids of maths and science, winning several olympaids competitions.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work positions"
    date="2022 - 2024"
    
  >
    <h3 className="vertical-timeline-element-title">Junior College</h3>
    <h4 className="vertical-timeline-element-subtitle">Mumbai Educational Trust Institute of Science and Commerce</h4>
    <p>
    Completed higher secondary education at MET Institute of Science and Commerce with a major in Science and optional subject as Information Technology. Developed a passion for programming.
    <br />
    <a href="https://metbhujbalknowledgecity.ac.in/metjrclg/" className='contact_me'>Institute Website</a>
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work positions"
    date="Sept 24 - Ongoing"
   
  > 
   <h3 className="vertical-timeline-element-title">Open Source/IoT Lead</h3>
  <h4 className="vertical-timeline-element-subtitle">Google Developers Group</h4>
  <p>
  In charge of leading the GDG MET student club&apos;s open source and IoT projects. leads initiatives, encourages teamwork, and interacts with the public to further technology advancement.
  <br />
  <a href="https://gdg.community.dev/gdg-on-campus-met-institute-of-engineering-bhujbal-knowledge-city-nashik-india/" className='contact_me'>Organization Website</a>
</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work positions"
    date="Jan 25- Ongoing"
  > 
   <h3 className="vertical-timeline-element-title">Internship</h3>
  <h4 className="vertical-timeline-element-subtitle">CHRP Technologies</h4>
  <p>
  As an AI/Data Intern at CHRP Technologies, I optimized the annotator UI, making it three times faster for a smoother user experience. I am currently working on converting bounding box coordinates to polygon coordinates to improve annotation precision. Alongside this, I am exploring and learning about training computer vision models to enhance automation and accuracy in annotation tasks.
  <br></br>
  <a href="https://chrptechnologies.com/" className='contact_me'>Organization Website</a>
</p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work positions"
    date="2022 - 2026"
   
  > 
    <h3 className="vertical-timeline-element-title">Bachelor&apos;s Degree</h3>
    <h4 className="vertical-timeline-element-subtitle">Mumbai Educational Trust Institute of Engineering</h4>
    <p>
    Completed higher secondary education at MET Institute of Science and Commerce with a major in Science and optional subject as Information Technology. Developed a passion for programming.
    <br />
    <a href="https://metbkcengg.ac.in/" className='contact_me'>Institute Website</a>
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>
    </div>
  )
}
