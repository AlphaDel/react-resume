import React from 'react';

import styles from './Portfolio.scss'

const AboutMe = () => (

<div className={styles['container']}>
    <div className={styles['container_aboutMe']}>
    <div className={styles['content__aboutMe']}>
        <div className={styles['title']}>
            About Me
        </div>
        <div className={styles['sub_title']}>
            A small introduction about myself
        </div>
        <br/>
        <img className={styles['img']} src ="https://www.w3schools.com/howto/img_avatar.png" alt="my profile"/>

            <h1>Wuttinan Chaoyos</h1>
            <h3>Web developer</h3>
            <h4>      
                Graduated from Suranaree University Of Technology, bachelor of Computer Engineering
                <br/>
                Currently working at GENERAL ELECTRONIC COMMERCE SERVICES CO.,LTD. as "Programmer"
                <br/>
                Skilled in AngularJS, React, PHP, Mysql, MSSQL
                <br/>
                My favourite stack : Angular, React, Docker    
            </h4>
        </div>
    </div>
</div>
    
)
export default AboutMe