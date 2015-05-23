'use strict';

import React from 'react';
import Router from 'react-router';

export default React.createClass({
  mixins: [ Router.State ],

  componentDidMount() {
    window.opener.__loginsuccesful__();
    window.close();
  },

  render() {
    return null;
  }
});
