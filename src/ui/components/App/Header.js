import React, { Component } from 'react'
import styles from './Header.scss'
import Typed from 'typed.js';
import { Link } from 'react-router-dom'
import data from '../../data/data.json'

export default class Header extends Component {
  
  componentDidMount() {
  
    var options = {
      strings: ["Wuttinan Chaoyos.", "I'm Developer.", "I Love Coding."],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    }

    this.typed = new Typed(this.el, options);

  }
  render() {
    const { websites } = data
    return (
        <header className={styles['header']}>
        <nav>
          {/* <Link
            to={{ pathname: '/' }}
            className={styles['brand__link']}>
            <i className="fab fa-react fa-2x"></i>
          </Link> */}
          <span className={styles['typing-style']} ref={(el) => { this.el = el; }}/>

          <ul className={styles['menu']}>
            {
              websites.map((data) => 
                <li key={data.type} className={styles['menu__item']}>
                  <a className={styles['menu__link']} href={data.url} target="_blank" rel="noopener noreferrer"><i className={`fab ${data.icon} fa-2x`}></i></a>
                </li>
              )
            }
          </ul>
        </nav>
      </header>
    )
  }
}