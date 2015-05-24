'use strict';

import React from 'react';

import UserStore from '../stores/UserStore';

function loadMap(state) {

  let location = state && state.locations[0];
  if(!location) {
    return;
  }

  let lat = location.position.latitude;
  let long = location.position.longitude;
  let latlong = lat + ',' + long;
  let zoom = 18;
  let mapApi = `https://maps.googleapis.com/maps/api/staticmap?center=${latlong}&zoom=${zoom}&size=800x450&maptype=roadmap&markers=${latlong}`;

  return <img className="small-12 columns" src={ mapApi } />;

}

function renderTrack(track) {
  if(!track || !track.id) {
    return;
  }
  console.log(track);
  let trackId = track.id;
  let url = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false`;
  let style = { display: 'none' };
  let frame = <iframe width="100%" height="450" scrolling="no" frameborder="no" src={url} style={style} ref="sctrack"></iframe>;
  return frame;
}

export default React.createClass({

  getInitialState() {
    return {
      activity: [],
      user: {},
      locations: [],
      track: {}
    };
  },

  componentDidMount() {
    // find all sounds of buskers licensed under 'creative commons share alike'
    SC.get('/tracks', { genres: 'HipHop', bpm: { from: 80, to: 90 } }, (tracks) => {
      this.setState({
        track: tracks[0]
      });
    });

    UserStore
      .fetchActivity()
      .then((data) => {
        console.log('activity', data.result);
        this.setState({
          activity: data.result
        });
      });

    UserStore
      .fetchProfile()
      .then((data) => {
        console.log('user', data.result[0]);
        this.setState({
          user: data.result[0]
        });
      });

    UserStore
      .fetchLocation()
      .then((data) => {
        console.log('locations', data.result);
        this.setState({
          locations: data.result
        });
      });
  },

  _playTrack() {
    let ref = this.refs.sctrack;
    let node = React.findDOMNode(ref);

    let SCWidget = SC.Widget(node);
    SCWidget.toggle();
  },

  render() {
    return (
      <div>
        <header className="contain-to-grid">
          <div className="row stage">
            <figure className="stage-background">
              <img className="stage-background-img" src="img/img_czech.png" alt="" />
            </figure>
            <h1 className="stage-headline rotate"><span className="box-shadow"><span className="lines">Geil, ein Hackathon!<br />Da bin ich dabei!</span></span></h1>
            <figure className="stage-profile small-4">
              <figcaption className="stage-profile-name">{ this.state.user.username }</figcaption>
              <img className="stage-profile-img" src="//lorempixel.com/45/45/people" />
            </figure>
            <div className="stage-player">
            <div className="rotate">
                <img src="img/img_soundcloud_wave2.png" alt="" />
                <div className="play-button" onClick={ this._playTrack.bind(this) }></div>
                { renderTrack(this.state.track) }
            </div>
            </div>
          </div>
        </header>

        <main>
          <div className="row">
            <div className="small-12 columns">
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
                  { loadMap(this.state) }
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
