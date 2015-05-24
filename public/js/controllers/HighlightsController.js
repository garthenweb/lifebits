'use strict';

import React from 'react';

import UserStore from '../stores/UserStore';

export default React.createClass({

  getInitialState() {
    return {
      activity: [],
      user: {},
      locations: []
    };
  },

  componentDidMount() {
    UserStore
      .fetchActivity()
      .then((data) => {
        this.setState({
          activity: data.result
        });
      });

    UserStore
      .fetchProfile()
      .then((data) => {
        this.setState({
          user: data.result[0]
        });
      });

    UserStore
      .fetchLocation()
      .then((data) => {
        this.setState({
          locations: data.result
        });
      });
  },

  render() {
    return (
      <div>
        <header className="contain-to-grid">
          <div className="row stage">
            <figure className="stage-background">
              <img className="stage-background-img" src="img/img_czech.png" alt="" />
            </figure>
            <h1 className="stage-headline rotate"><span className="box-shadow"><span>Geil, ein Hackathon! Da bin ich voll dabei!</span></span></h1>
            <figure className="stage-profile small-4">
              <figcaption className="stage-profile-name">{ this.state.user.username }</figcaption>
              <img className="stage-profile-img" src="//lorempixel.com/45/45/people" />
            </figure>
            <div className="stage-player rotate">
              <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="//w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/25440642&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
            </div>
          </div>
        </header>

        <main>
          <div className="row">
            <div className="small-4 small-offset-8 end columns">
              <ul className="log-activity">
                <li className="log-activity-steps">6543<img src="img/ic_steps.png" alt="" /></li>
                <li className="log-activity-sleep">8h<img src="img/ic_sleep.png" alt="" /></li>
                <li className="log-activity-distance">8.2km<img src="img/ic_distance.png" alt="" /></li>
              </ul>
            </div>
          </div>
          <div className="row stream">
            <div className="small-12 columns">
              <ul>
                <li>
                  <span className="time small-11 small-offset-1 end columns">11:30pm</span>
                  <iframe className="small-12 columns" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.0715052044925!2d9.923228999999989!3d53.556490999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18591a7ba85b1%3A0x711b9bb8b7cfc714!2sWerkheim+Hamburg!5e0!3m2!1sde!2sde!4v1432417969029" width="100%" height="450" frameBorder="0"></iframe>
                </li>
                <li>
                <span className="time small-11 small-offset-1 end columns">14.34pm</span>
                  <div className="time small-11 small-offset-1 end columns">
                    Tweet
                  </div>
                </li>
                <li>
                  <span className="time small-11 small-offset-1 end columns">17:01pm</span>
                  <img className="small-11 small-offset-1 end columns" src="img/img_coffee.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    );
  }
});
