import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';

import ScreenBlock from '../ScreenBlock/ScreenBlock'

import appTheme from '../../../theme/theme';
import './ProjectBlock.css';
import IconGit from 'react-devicon/git/original'

const ProjectBlock = ({ projects }) => (

<ScreenBlock id="Resume-projects" className="ResumeProjectsBlock">
    <div className="container">
      <div className="heading">
        <h2>
            My Projects
        </h2>
      </div>

      <VerticalTimeline>
        {projects.map((project, i) =>
          <VerticalTimelineElement
            style={{ borderTop: '3px solid ' + appTheme[project.subcategory + 'Color'].border }}
            className={"ResumeProjectsBlock " + appTheme[project.subcategory + 'Color'].className}
            key={i}
            icon={appTheme[project.subcategory + 'Color'].iconTag}
            iconStyle={appTheme[project.subcategory + 'Color'].style}
            date={project.date}
          >
          {console.log('project.subcategory')}
            <div className="ResumeProjectsBlock-technologies">
              {project.technologies.map((technology, j) =>
                <Chip
                  key={j}
                  label={technology.name}
                />
              )}
            </div>
            <h3 className="vertical-timeline-element-title">{project.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{project.subtitle}</h4>
            <p>
              <span dangerouslySetInnerHTML={{ __html: project.content }}></span>
            </p>
            <br />
            <div className="ResumeProjectsBlock-links">
              {project.links.map((link, i) =>
                <Button key={i} raised color="default" target="_blank" href={link.url}>{link.text}</Button>
              )}
            </div>
          </VerticalTimelineElement>
        )}
      </VerticalTimeline>
    </div>
  </ScreenBlock>


    

    
)
export default ProjectBlock

