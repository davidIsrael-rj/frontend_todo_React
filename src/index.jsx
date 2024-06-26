import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import App from './main/App'
import rootReducer from './main/reducers'
import { Provider } from 'react-redux'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))