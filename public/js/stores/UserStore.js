'use strict';
let url = require('url');
let querystring = require('querystring');

function json(response) {
  return response.json();
}

const ACTIVITIY_URL = '/v1/users/me/activities';
let UserStore = {

  fetchActivity() {
    // url.format({
    //   href: ACTIVITIY_URL,
    //   query: querystring.stringify()
    // })
    // console.log(getAuthHeader());
    return window.fetch(ACTIVITIY_URL, {
      // headers: getAuthHeader(),
      // mode: 'cors'
    });
  }

};

export default UserStore;
