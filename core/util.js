'use strict';

module.exports = {

  promisify: function(fn) {
    return new Promise(function(resolve, reject) {
      var cb = function(err, response) {
        if(err) {
          reject(err);
        } else {
          resolve(response);
        }
      };
      cb.resolve = resolve;
      cb.reject  = reject;
      fn(cb);
    });

  },

  createURLHelper: function(routes) {
    let RouteParser = require('route-parser');
    // url helper function
    return function url(ref, params) {
      let path;
      // find one with same ref
      for(let key in routes) {
        let route = routes[key];
        if(route.ref === ref) {
          // remove methode and keep path
          path = key.split(' ')[1];
          break;
        }
      }
      let route = new RouteParser(path);
      return route.reverse(params);
    };
  }
};
