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

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose
    
const enhance = composeEnhancers( applyMiddleware(...middleware))

export default (initialValue = {}) => {
  const store = createStore(
    rootReducer,
    initialValue,
    enhance
  )
  return { store }
}
