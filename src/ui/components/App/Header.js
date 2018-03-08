import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.scss'

export default class Header extends Component {
  render() {

    var linkGithub = <a className={styles['menu__link']} href="https://github.com/wuttinanDEV" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square fa-2x"></i></a>
    var linkFacebook = <a className={styles['menu__link']} href="https://fb.me/wuttinan.wch" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square fa-2x"></i></a>
    return (
        <header className={styles['header']}>
        <nav>
          <Link
            to={{ pathname: '/' }}
            className={styles['brand__link']}>
            <i className="fab fa-react fa-2x"></i>
          </Link>
          <ul className={styles['menu']}>
            <li className={styles['menu__item']}>
              <Link
                to={{ pathname: '/portfolio' }}
                className={styles['menu__link']}>
                Resume
              </Link>
            </li>
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