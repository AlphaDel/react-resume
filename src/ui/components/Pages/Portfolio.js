import React, { Component } from 'react';

import HomeBlock from './HomeBlock/HomeBlock'
import AboutMeBlock from './AboutMeBlock/AboutMeBlock'
import WorkAndEducationBlock from './WorkAndEducationBlock/WorkAndEducationBlock'
import SkillsBlock from './SkillsBlock/SkillsBlock'
import ProjectBlock from './ProjectBlock/ProjectBlock'
import Hobbiesblock from './HobbiesBlock/HobbiesBlock'
import ContactBlock from './ContactBlock/ContactBlock'
import appTheme from '../../theme/theme';
import './Portfolio.css'

class Portfolio extends Component {

    getSkillsByLanguages() {
        const { skills } = this.props
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
        const styles = {background: "#2196f3", color: "#fff"}
        let fullName = `${this.props.firstName} ${this.props.lastName}`;
        return (
            <div className="Resume">
                <HomeBlock 
                    style={appTheme.aboutMeColor.style}
                    fullName={fullName}
                    headline={this.props.headline}
                />
                <AboutMeBlock 
                    style={appTheme.aboutMeColor.style}
                    fullName={fullName}
                    headline={this.props.headline}
                    summary={this.props.summary}
                    pictureUrl={this.props.pictureUrl}
                    dateOfBirth={this.props.dateOfBirth}
                    emailAddress={this.props.emailAddress}
                />
                <WorkAndEducationBlock 
                    style={appTheme.workEduColor.style}
                    positions={this.props.positions}
                    educations={this.props.educations}
                />
                <SkillsBlock
                    style={appTheme.skillColor.style}
                    skills={skills}
                    tools={this.props.tools}
                />
                <ProjectBlock 
                    style={appTheme.projectColor.style}
                    projects={this.props.projects}
                />
                <Hobbiesblock
                    style={appTheme.hobbiesColor.style}
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
  summary: 'Graduated from Suranaree University Of Technology, bachelor of Computer Engineering. Currently working at GENERAL ELECTRONIC COMMERCE SERVICES CO.,LTD. as "Programmer". Skilled in AngularJS, React, PHP, Mysql, MSSQL. My favourite stack : Angular, React, Docker',
  pictureUrl: 'https://lh3.googleusercontent.com/eVI5vpJOWdNRuquUObj0VM0e3xd_YnG0SqT6_ylbIEeqRqXInpjoJuXq-US8x27K0yFj2SjkaMEP7VkDIyYOmICI2unRQDyNOFbQHNyfh2KVCRo-46_ST34t_3aWXE-k889ctUyjSA=s339-no',
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
