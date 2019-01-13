import React from 'react';

import 'react-vertical-timeline-component/style.min.css'
import Card, { CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import ScrollAnimation from 'react-animate-on-scroll'
import ScreenBlock from '../ScreenBlock/ScreenBlock'
import appTheme from '../../../theme/theme'

import './SkillsBlock.css'
import "animate.css/animate.min.css"

const SkillsBlock = ({ style, skills, tools }) => (
  
<ScrollAnimation animateIn="fadeIn">
<ScreenBlock id="Resume-skills" style={style} className="ResumeSkillsBlock">
  <div className="container">
    <div className="heading ResumeSkillsBlock-skills-heading">
      <h2>My Skills</h2>  
    </div>
    
    <div className="ResumeSkillsBlock-skills">
      {skills.map((skillCategory, i) =>
            
            <Card key={i} className="ResumeSkillsBlock-card">
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
</ScrollAnimation>

    

    
)
export default SkillsBlock

