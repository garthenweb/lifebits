'use strict';

import React from 'react';

import UserStore from '../stores/UserStore';
import LoginComponent from '../components/LoginComponent';

export default React.createClass({

  render() {
    return (
      <div className="bglg">
        <div className="pattern overlay">
          <h1 className="display-none">Hello World</h1>

          <div data-alert className="alert-box success display-none">
            Success ! <a href="#" className="close">&times;</a>
          </div>

          <div data-alert className="alert-box alert display-none">
            Failure !
            <a href="#" className="close">&times;</a>
          </div>

            <div className="row logoclear">
              <img src="/img/logo.png" className="logo"/>
            </div>

          <div className="row">
            <div className="small-12 small-centered column display-none">
              <div className="panel callout radius visibility-hidden">
                <p className="thepad"></p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="small-5 small-centered column">
              <LoginComponent />
            </div>
          </div>

          <span className="bar"></span>

        </div>
      </div>
    );

  }
});
