import React, { Component } from 'react'
import { Provider } from 'react-redux'
import routes from '../routes'
import configureStore from '../store/configureStore'

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore() } key='provider'>
        {routes()}
      </Provider>
    )
  }
}