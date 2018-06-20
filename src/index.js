import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Home from './modules/Home/Home.screen'
import createStore from './redux/createStore'
import registerServiceWorker from './registerServiceWorker'

const { store } = createStore()

const RootApp = (
  <Provider store={store}>
    <Home/>
  </Provider>
)

ReactDOM.render(RootApp, document.getElementById('root'))
registerServiceWorker()
