import React from 'react'
import ScreenBlock from '../ScreenBlock/ScreenBlock'
import ScrollAnimation from 'react-animate-on-scroll'
import Typed from 'typed.js';
import './HomeBlock.css'
import "animate.css/animate.min.css"

import { AgeFromDateString } from 'age-calculator'




const HomeBlock = ({ style, fullName, headline }) => (
    <ScrollAnimation animateIn="fadeIn" delay={3}>
        <ScreenBlock id="Resume-home" className="ResumeHomeBlock">
            <div className="ResumeHomeBlock-headline-container">
                <div className="ResumeHomeBlock-headline">
                    <h1>
                        {fullName}
                    </h1>
                    <h2>
                        {headline}
                    </h2>
                </div>
            </div>
        </ScreenBlock>
    </ScrollAnimation>
)


export default HomeBlock