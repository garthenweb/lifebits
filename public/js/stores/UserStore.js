'use strict';

function json(response) {
  return response.json();
}

const PROFILE_URL   = '/v1/users/me';
const ACTIVITIY_URL = '/v1/users/me/activities';
const LOCATIONS_URL = '/v1/users/me/locations';
let UserStore = {

  fetchActivity() {
    return window.fetch(ACTIVITIY_URL).then(json);
  },

  fetchProfile() {
    return window.fetch(PROFILE_URL).then(json);
  },

  fetchLocation() {
    return window.fetch(LOCATIONS_URL).then(json);
  }

};

export default UserStore;
