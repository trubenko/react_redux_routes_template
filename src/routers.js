import React from 'react';
import App from './components/App'

import {browserHistory , Router} from 'react-router';

const Tab1 = function () {

    return <div>Tab 1 info</div>
}


const Tab2 = function () {

    return <div>Tab 2 info</div>
}


const Tab3 = function () {

    return <div>Tab 3 info</div>
}


const ComponentRoutes = {
    component: App,
    path: '/',
    indexRoute: {component: Tab1},
    childRoutes: [
        {
            path: '/tab1',
            component: Tab1
        },
        {
            path: '/tab2',
            component: Tab2
        },
        {
            path: '/tab3',
            component: Tab3
        }/*, EXAMPLE ASYNC
        {
            path: '/tab4',
            getComponent(location, cb){
                System.import('./components/App')
                    .then(module=> cb(null, module.default))
            }
        }*/
    ]
}

export default (
    <Router history={ browserHistory } routes={ComponentRoutes }/>
)