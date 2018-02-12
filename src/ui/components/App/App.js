import React, { Component } from 'react';
import styles from './App.scss'
import Header from './Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className={styles['content']}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

