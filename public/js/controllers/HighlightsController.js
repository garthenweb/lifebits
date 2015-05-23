'use strict';

import React from 'react';

import UserStore from '../stores/UserStore';

export default React.createClass({

  componentDidMount() {
    UserStore.fetchActivity();
  },

  render() {
    return <div>Highlights</div>;
  }
});
