'use strict';

import React from 'react';
import Router from 'react-router';

import LoginComponent from '../components/LoginComponent';

const CLIENT_ID = '0jJsLOOxJ452tdZRkyfdKMHejK90zbSq';
const SCOPE     = ['lifelog.profile.read', 'lifelog.activities.read', 'lifelog.locations.read'].join('+');
const AUTH_URL  = `https://platform.lifelog.sonymobile.com/oauth/2/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;

export default React.createClass({
  mixins: [ Router.State ],

  _openAuth() {
    window.open(AUTH_URL);
    window.__loginsuccesful__ = () => {
      this.context.router.transitionTo('highlights');
    };
  },

  render() {
    return (
      <button className="button expand radius" onClick={this._openAuth}>Login</button>
    );
  }
});
