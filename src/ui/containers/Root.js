import React, { Component } from 'react'
import { Provider } from 'react-redux'
import routes from '../routes'
import configureStore from '../store/configureStore'

export default class Root extends Component {
  
  render() {
    const { initialState } = this.props
    const store = configureStore(initialState)
    
    return (
      <Provider store={store} key='provider'>
        {routes()}
      </Provider>
    )
  }
}