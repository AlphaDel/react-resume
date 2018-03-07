import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.scss'

export default class Header extends Component {
  render() {

    var linkGithub = <a className={styles['menu__link']} href="https://github.com/wuttinanDEV" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square fa-2x"></i></a>
    return (
        <header className={styles['header']}>
        <nav>
          <Link
            to={{ pathname: '/' }}
            className={styles['brand__link']}>
            <i className="fab fa-github-square fa-2x"></i>
          </Link>
          <ul className={styles['menu']}>
            <li className={styles['menu__item']}>
              <Link
                to={{ pathname: '/pages' }}
                className={styles['menu__link']}>
                All pages
              </Link>
            </li>
            <li className={styles['menu__item']}>
              <Link
                to={{ pathname: '/' }}
                className={styles['menu__link']}>
                About us
              </Link>
            </li>
            <li className={styles['menu__item']}>
              <Link
                to={{ pathname: '/portfolio' }}
                className={styles['menu__link']}>
                Portfolio
              </Link>
            </li>
            <li className={styles['menu__item']}>
              {linkGithub}
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}