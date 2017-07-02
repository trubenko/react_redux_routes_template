import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import App from './components/App'

const Tab1 = function () {

    return <div>Tab 1 info</div>
}


const Tab2 = function () {

    return <div>Tab 2 info</div>
}


const Tab3 = function () {

    return <div>Tab 3 info</div>
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Tab1}/>
        <Route path="/tab1" component={Tab1}/>
        <Route path="/tab2" component={Tab2}/>
        <Route path="/tab3" component={Tab3}/>
    </Route>
)