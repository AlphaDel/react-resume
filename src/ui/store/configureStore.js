import { createStore } from 'redux'
import rootReducer from '../reducers'

const promise = (store) => {
  const next = store.dispatch

  return (action) => {
    if (typeof action.then === 'function')
      return action.then(next)
    return next(action)
  }
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState)
  store.dispatch = promise(store)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}