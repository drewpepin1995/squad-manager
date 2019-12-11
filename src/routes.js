import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './components/App2';
import Schedule from './components/Schedule/schedule.js';
import EventDetails from './components/Event-Details/event.js';
import TeamDetails from './components/Team-Details/team.js';


/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
    <Route path="/" component={App}>
        <IndexRoute component={index} />
        <Route path="/sm/schedule" component={Schedule} />
        <Route path="/sm/eventdetails" component={EventDetails} />
        <Route path="/sm/team" component={Team} />
    </Route>
);