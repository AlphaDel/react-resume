import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import logger from 'redux-logger'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const middlewares = [thunk, apiMiddleware]
  if(process.env.NODE_ENV !== 'production')
    middlewares.push(logger)

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}