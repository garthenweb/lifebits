'use strict';

module.exports = function(app, config) {

  var names = Object.keys(config.routes);
  names.forEach(function(name) {
    var options = config.routes[name];
    var path    = getPath(name);
    var method  = getMethod(name);

    app[method](path, handleRequest(options));

  });

};

function getController(controller) {
  if(typeof controller !== 'string') {
    return controller;
  }
  var controllers;
  var split = controller.split('/');
  var file  = split[0];
  var key   = split[1];

  try {
    controllers = require('../api/controllers/' + file);
  } catch(e) {
    gweb.log.error(e);
  }

  if(controllers && controllers[key]) {
    return controllers[key];
  } else {
    gweb.log.warn(`Controller ${controller} could not be found`);
  }
}

function getMethod(str) {
  return str.split(' ')[0];
}

function getPath(str) {
  return str.split(' ')[1];
}

function handleRequest(options) {
  var controller = getController(options.controller);
  return function(req, res, next) {
    var promise = new Promise(function(resolve, reject) {
      if(typeof controller === 'function') {
        controller(req, res, next).then(resolve, reject);
      } else {
        resolve({});
      }
    });

    promise.then(function(data) {
      if(options.view) {
        res.render(options.view, data);
      } else {
        res.send(data);
      }
    });

    promise.catch(function(err) {
      gweb.log.error(err);
      switch(err) {
        case '404':
          res.status(404);
          res.render('404');
        break;
        default:
          res.status(500);
          res.render('500');
      }
    });

  };
}
