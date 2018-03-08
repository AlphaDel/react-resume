import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Card, { CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import ScreenBlock from '../ScreenBlock/ScreenBlock'
import IconLinux from 'react-devicon/linux/original' 
import appTheme from '../../../theme/theme';
import './SkillsBlock.css';

const SkillsBlock = ({ skills, tools }) => (
  

<ScreenBlock id="Resume-skills" className="ResumeSkillsBlock">
  <div className="container">
    <div className="heading">
      <h2>My Skill</h2>  
    </div>

    <div className="ResumeSkillsBlock-skills">
      {skills.map((skillCategory, i) =>
            
            <Card key={i}>
              <CardContent>
                <Avatar style={{
                  ...appTheme[`${skillCategory[0].language.style}Color`].style,
                  width: 100,
                  height: 100,
                  margin: '0 auto'
                }}>
                  {appTheme[`${skillCategory[0].language.style}Color`].icon}
                </Avatar>
                <h3 style={{ color: appTheme[`${skillCategory[0].language.style}Color`].style.background }}>
                  {skillCategory[0].language.name}
                </h3>
                {skillCategory.map((skill, j) =>
                  <div key={j}>
                    {skill.name}
                  </div>
                )}
              </CardContent>
            </Card>
          )}
    </div>

  </div>

</ScreenBlock>


    

    
)
export default SkillsBlock

