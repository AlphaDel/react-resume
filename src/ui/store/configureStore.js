import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const composeEnhancers = (process.env.NODE_ENV === 'development') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose : compose

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log('State: ', store.getState().toString())
  })
  

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))