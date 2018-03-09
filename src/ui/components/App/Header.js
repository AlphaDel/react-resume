import React, { Component } from 'react'
import styles from './Header.scss'
import Typed from 'typed.js';
import { Link } from 'react-router-dom'

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

    var linkGithub = <a className={styles['menu__link']} href="https://github.com/wuttinanDEV" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square fa-2x"></i></a>
    var linkFacebook = <a className={styles['menu__link']} href="https://fb.me/wuttinan.wch" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square fa-2x"></i></a>
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
            <li className={styles['menu__item']}>
              {linkGithub}
            </li>
            <li className={styles['menu__item']}>
              {linkFacebook}
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}