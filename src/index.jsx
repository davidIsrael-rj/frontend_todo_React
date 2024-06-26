import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import App from './main/App'
import rootReducer from './main/reducers'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))