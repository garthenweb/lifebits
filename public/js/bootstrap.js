'use strict';

import React from 'react';
import Router from 'react-router';

import Login from './controllers/LoginController';
import LoginSuccess from './controllers/LoginSuccessController';
import Highlights from './controllers/HighlightsController';

let Route        = Router.Route;
let DefaultRoute = Router.DefaultRoute;
let RouteHandler = Router.RouteHandler;

let App = React.createClass({
  render() {
    return <RouteHandler/>;
  }
});

var routes = (
  <Route handler={App}>
    <Route path="/" name="landingpage" handler={Login} />
    <Route path="/login" name="login" handler={LoginSuccess} />
    <Route path="/highlights" name="highlights" handler={Highlights} />
    <DefaultRoute handler={Login} />
  </Route>
);

let router = Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler/>, document.querySelector('body'));
});
