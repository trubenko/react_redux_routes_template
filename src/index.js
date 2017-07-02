import React from 'react'
import ReactDOM , { Component } from 'react-dom'
import App from './components/App'

import reducer from './reducers/index'
import { applyMiddleware , createStore} from 'redux';
import { Provider } from 'react-redux'
import logger from 'redux-logger'

const store = createStore(reducer,{}, applyMiddleware(logger));

import {browserHistory , Router} from 'react-router';
import routes from './routers'

ReactDOM.render(
    <Provider store={store} >
        <Router history={ browserHistory } routes={ routes }/>
    </Provider>,
    document.getElementById('root')
)