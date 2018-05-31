/*
 * @Author: 0easy-23
 * @Date:   2018-05-29 14:42:05
 * @Last Modified by:   0easy-23
 * @Last Modified time: 2018-05-29 15:14:15
 */
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import Loading from '../common/Loading';
import About from '../components/About';
import Events from '../components/Events';
import Home from '../components/Home';

const MyLoadingComponent = ({isLoading, error}) => {

    if (isLoading) {
        return <Loading/>
    } else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    } else {
        return null;
    }
};


// const AsyncHome = Loadable({
//     loader: () => import('../components/Home'),
//     loading: MyLoadingComponent
// });
// const AsyncAbout = Loadable({
//     loader: () => import('../components/About'),
//     loading: MyLoadingComponent
// });
// const AsyncEvents = Loadable({
//     loader: () => import('../components/Events'),
//     loading: MyLoadingComponent
// });


const Routes = () => (
    <Router>
        <div>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/events">Events</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/events" component={Events}/>
        </div>
    </Router>

);

export default Routes;