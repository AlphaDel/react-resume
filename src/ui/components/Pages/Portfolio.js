import React, { Component } from 'react';
import WorkAndEducationBlock from './WorkAndEducationBlock/WorkAndEducationBlock'
import AboutMe from './AboutMeBlock/AboutMeBlock'
import SkillsBlock from './SkillsBlock/SkillsBlock'
import ProjectBlock from './ProjectBlock/ProjectBlock'
import Hobbies from './HobbiesBlock/HobbiesBlock'
import appTheme from '../../theme/theme';
import './Portfolio.css'

class Portfolio extends Component {

    getSkillsByLanguages() {
        const { skills } = this.props
        console.log("const : skill : ". skills);
        const skillsByLanguages = skills.reduce(function (obj, item) {
            if (item.language) {
                obj[item.language.name] = obj[item.language.name] || [];
                obj[item.language.name].push(item)
            }
            return obj
        }, {})

        return Object.keys(skillsByLanguages).map(function (key) {
            return skillsByLanguages[key]
        })
    }
    
    render () {
        const skills = this.getSkillsByLanguages();
        const formatDate = 'ddMMyy'
        const styles = {background: "#2196f3", color: "#fff"}
        let fullName = `${this.props.firstName} ${this.props.lastName}`;
        return (
            <div className="Resume">
                <AboutMe 
                    style={appTheme.phpColor.style}
                    fullName={fullName}
                    headline={this.props.headline}
                    summary={this.props.summary}
                    pictureUrl={this.props.pictureUrl}
                    dateOfBirth={this.props.dateOfBirth}
                    emailAddress={this.props.emailAddress}
                />
                <WorkAndEducationBlock 
                    style={appTheme.phpColor.style}
                    positions={this.props.positions}
                    educations={this.props.educations}
                />
                <SkillsBlock
                    skills={skills}
                    tools={this.props.tools}
                />
                <ProjectBlock 
                    projects={this.props.projects}
                />
                <Hobbies
                    hobbies={this.props.hobbies}
                    hobbyCardStyle={styles}
                />
                
            </div>
        )
    }
}

Portfolio.defaultProps = {
  firstName: 'Wuttinan',
  lastName: 'Chaoyos',
  emailAddress: 'wuttinan.wch@gmail.com',
  headline: 'Web Developer',
  summary: 'Graduated from Suranaree University Of Technology, bachelor of Computer Engineering. Currently working at GENERAL ELECTRONIC COMMERCE SERVICES CO.,LTD. as \"Programmer\". Skilled in AngularJS, React, PHP, Mysql, MSSQL. My favourite stack : Angular, React, Docker',
  pictureUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAYqAAAAJGQ0YjYxNDI0LTEwOTMtNGVkNC1hNDIxLWYyNzNkMTYzNDMzNg.jpg',
  dateOfBirth: '1994-10-17',
  mainAddress: 'Bangkok Thailand',
  websites: [],
  phoneNumbers: [],
  imAccounts: [],
  locations: [],
  positions: [],
  interests: '',
  languages: [],
  skills: [],
  educations: [],
  volunteer: [],
  hobbies: [],
  projects: [],
}



export default Portfolio