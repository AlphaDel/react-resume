import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './Portfolio.scss'

import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';


const WorkAndEducation = () => (

<div className={styles['container']}>
  <div className={styles['container_workEdu']}>
    <div className={styles['title']}>
      Work experience & Education
    </div>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<i class="fas fa-briefcase fa-lg"></i>}
      >
        <h3 className="vertical-timeline-element-title">GENERAL ELECTRONIC COMMERCE SERVICES</h3>
        <h4 className="vertical-timeline-element-subtitle">Bangkok Thailand</h4>
        <p>
          Font-end and Back-end developer
        </p>
        <p>
          AngularJS | Java (Spring boot framework) | MSSQL | MYSQL
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016 - 2017"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<i class="fas fa-briefcase fa-lg"></i>}
      >
        <h3 className="vertical-timeline-element-title">Trainee At GENERAL ELECTRONIC COMMERCE SERVICES</h3>
        <h4 className="vertical-timeline-element-subtitle">Bangkok Thailand</h4>
        <p>
        AngularJS | Java (JPA) | Robot framework | Agile Scrum
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<i class="fas fa-graduation-cap fa-lg"></i>}
      >
        <h3 className="vertical-timeline-element-title">Suranaree University Of Technology</h3>
        <h4 className="vertical-timeline-element-subtitle">Nakhon Ratchasima</h4>
        <p>
          Bachelor of Computer Engineering
        </p>
      </VerticalTimelineElement>
      
    </VerticalTimeline>
    </div>
</div>
    
)
export default WorkAndEducation