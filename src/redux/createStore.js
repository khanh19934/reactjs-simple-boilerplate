import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { persistStore, persistReducer } from 'redux-persist'

import rootReducer from './reducer'

const middleware = [
  thunk,
  promiseMiddleware({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']
  })
]


export default (initialValue = {}) => {
  const store = createStore(
    rootReducer,
    initialValue,
    applyMiddleware(...middleware)
  )
  return { store }
}
