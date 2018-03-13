import React from 'react'

import 'react-vertical-timeline-component/style.min.css'
import Card, { CardContent } from 'material-ui/Card'
import ScrollAnimation from 'react-animate-on-scroll'
import ScreenBlock from '../ScreenBlock/ScreenBlock'

import './HobbiesBlock.css'
import "animate.css/animate.min.css"

const HobbiesBlock = ({ hobbies, hobbyCardStyle, style }) => (

  <ScrollAnimation animateIn="fadeIn" delay={3}>
    <ScreenBlock id="Resume-hobbies" style={style} className="ResumeHobbiesBlock">
      <div className="container">
        <div className="heading ResumeHobbiesBlock-heading">
          <h2>
            Hobbies
        </h2>
        </div>
        <div className="ResumeHobbiesBlock-hobbies">
          {hobbies.map((hobby, i) =>
            <Card key={i} style={hobbyCardStyle} className="ResumeHobbiesBlock-hobby">
              <CardContent>

                <i className={`fas fa-${hobby.icon} fa-5x`}></i>
                <h4>{hobby.name}</h4>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </ScreenBlock>
  </ScrollAnimation>

)
export default HobbiesBlock

