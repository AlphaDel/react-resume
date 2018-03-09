import React from 'react';

import 'react-vertical-timeline-component/style.min.css';
import Card, { CardContent } from 'material-ui/Card';

import ScreenBlock from '../ScreenBlock/ScreenBlock'
import './HobbiesBlock.css';

const HobbiesBlock = ({ hobbies, hobbyCardStyle }) => (

<ScreenBlock id="Resume-languages" style={{background: "#FFF"}} className="ResumeHobbiesBlock">
    <div className="container">
      <div className="heading">
        <h2>
            Interests
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


    

    
)
export default HobbiesBlock

