import React, { Component } from 'react';
import './App.css';
import Header from './Header'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* section header */}
          <Header/>
        {/* section main */}

        {/* section footer */}
        <p>APP HERE !</p>
      </div>
    )
  }
}

