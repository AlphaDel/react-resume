import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import ScreenBlock from '../ScreenBlock/ScreenBlock'
import './WorkAndEducationBlock.css';
import IconGit from 'react-devicon/git/original'
const WorkAndEducationBlock = ({ style, positions, educations }) => (

<ScreenBlock id="Resume-work" style={{background: "#e5e5e5"}} className="ResumeWorkAndEducationBlock">
{console.log("style : " , style)}
  <div className="container">
    <div className="heading">
      <h2>Work experience & Education</h2>
    </div>
    
    <VerticalTimeline>
      
      {positions.map((position, i) =>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          key={i}
          date={position.startDate + ' – ' + position.endDate + ' (' + ((position.endDate === 'Today' ? (new Date()).getFullYear() : parseInt(position.endDate, 10)) - parseInt(position.startDate, 10))  + ' years)'}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<i className="fas fa-briefcase fa-lg"></i>}
        >
          <h3 className="vertical-timeline-element-title">{position.company}</h3>
          <h4 className="vertical-timeline-element-subtitle">{position.title}</h4>
          <p>
            <span dangerouslySetInnerHTML={{ __html: position.summary }}></span>
          </p>
        </VerticalTimelineElement>
    )}
    
    <div id="Resume-education">
      {educations.map((education, i) =>

          <VerticalTimelineElement
          className="vertical-timeline-element--education"
          key={i}
          date={education.startDate + ' – ' + education.endDate + ' (' + ((education.endDate === 'Today' ? (new Date()).getFullYear() : parseInt(education.endDate, 10)) - parseInt(education.startDate, 10))  + ' years)'}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<i className="fas fa-graduation-cap fa-lg"></i>}
          >
          <h3 className="vertical-timeline-element-title">{education.schoolName}</h3>
          <h4 className="vertical-timeline-element-subtitle">{education.degree}</h4>
          <p>
            <span dangerouslySetInnerHTML={{ __html: education.activities }}></span>
          </p>
          </VerticalTimelineElement>
      )}
      </div>
    </VerticalTimeline>
    
  </div>

</ScreenBlock>


    

    
)
export default WorkAndEducationBlock

