import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.scss'

export default class Header extends Component {
  render() {
    return (
        <div className={styles['header']}>
            <nav>
                <Link to={{ pathname: '/' }} className={styles['brand']} >
                    Hello
                </Link>
            </nav>
        </div>
    )
  }
}