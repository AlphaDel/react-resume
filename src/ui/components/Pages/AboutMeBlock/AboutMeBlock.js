import React from 'react'
import ScreenBlock from '../ScreenBlock/ScreenBlock'
import './AboutMeBlock.css';


import { AgeFromDateString } from 'age-calculator'

const AboutMeBlock = ({ style, fullName, headline, summary, pictureUrl, dateOfBirth, emailAddress }) => (
    <ScreenBlock id="Resume-aboutMe" style={style} className="ResumeAboutMeBlock">
        <div className="container">
            <div className="heading">
                <h2>About me</h2>
                <p>A small introduction about myself</p>
            </div>
            <div className="ResumeAboutMeBlock-content">
                <div className="ResumeAboutMeBlock-description">
                    <h3>{fullName}</h3>
                    <h4>{headline}</h4>

                    <p className="Resume-summary" dangerouslySetInnerHTML={{ __html: summary }} />

                    <p>Birth date : {dateOfBirth}</p>
                    <p>Age : {new AgeFromDateString(dateOfBirth).age}</p>

                    <p>contact : wuttinan.wch@gmail.com</p>
                    
                    <a className="ResumeAboutMeBlock-contact-link" href="https://www.github.com/wuttinanDEV" target="blank"><i className="fab fa-github-square fa-3x"></i></a>
                    <a className="ResumeAboutMeBlock-contact-link" href="https://www.fb.me/wuttinan.wch" target="blank"><i className="fab fa-facebook-square fa-3x"></i></a>
                    
                    
                    
                    
                </div>
                <div className="ResumeAboutMeBlock-profilePicture Resume-profilePicture">
                    <img alt="" src={pictureUrl} />
                </div>
            </div>
        </div>
    </ScreenBlock>

)

export default AboutMeBlock