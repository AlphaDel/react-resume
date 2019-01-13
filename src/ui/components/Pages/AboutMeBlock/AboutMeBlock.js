import React from 'react'
import ScreenBlock from '../ScreenBlock/ScreenBlock'
import ScrollAnimation from 'react-animate-on-scroll'

import './AboutMeBlock.css'
import "animate.css/animate.min.css"
import { GITHUB, FACEBOOK } from '../../../constants/websiteType'
import { AgeFromDateString } from 'age-calculator'

const AboutMeBlock = ({ style, fullName, headline, summary, pictureUrl, dateOfBirth, emailAddress, websites }) => (
    <ScrollAnimation animateIn="fadeIn" delay={3}>
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

                        <p>contact : {emailAddress}</p>

                        {
                            websites.map((data) => 
                                <a className="ResumeAboutMeBlock-contact-link" key={data.type} href={data.url} target="blank"><i className={`fab ${data.icon} fa-3x`}></i></a>
                            )           
                        }
                    </div>
                    <div className="ResumeAboutMeBlock-profilePicture Resume-profilePicture">
                        <img alt="" src={pictureUrl} />
                    </div>
                </div>
            </div>
        </ScreenBlock>
    </ScrollAnimation>
)
export default AboutMeBlock