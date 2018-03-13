import React from 'react'

import 'react-vertical-timeline-component/style.min.css'
import Card, { CardContent } from 'material-ui/Card'
import ScrollAnimation from 'react-animate-on-scroll'
import ScreenBlock from '../ScreenBlock/ScreenBlock'

import './ContactBlock.css'
import "animate.css/animate.min.css"

const HobbiesBlock = ({ hobbies, hobbyCardStyle, style }) => (

  <ScrollAnimation animateIn="fadeIn" delay={3}>
    <ScreenBlock id="Resume-languages" style={style} className="ResumeContactBlock">
      <div className="container">
        <div className="heading ResumeContactBlock-heading">
          <h2>
            Contact
        </h2>
        </div>
        <div className="ResumeContactBlock-hobbies">
          {hobbies.map((hobby, i) =>
            <Card key={i} style={hobbyCardStyle} className="ResumeContactBlock-hobby">
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

