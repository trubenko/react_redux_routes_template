import React from 'react'
import ReactDOM , { Component } from 'react-dom'
import App from './components/App'

import reducer from './reducers/index'
import { applyMiddleware , createStore} from 'redux';
import { Provider } from 'react-redux'
import logger from 'redux-logger'

const store = createStore(reducer,{}, applyMiddleware(logger));

import routes from './routers'

ReactDOM.render(
    <Provider store={store} >
        { routes }
    </Provider>,
    document.getElementById('root')
)