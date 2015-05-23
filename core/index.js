'use strict';

var express    = require('express');
var morgan     = require('morgan');
var logger     = require('captains-log');
var _          = require('lodash');
var bodyParser = require('body-parser');
var slashes    = require('connect-slashes');

var routing  = require('./routing');
var database = require('./database');
var util     = require('./util');
var config   = {
  views: require('../config/views'),
  routes: require('../config/routes'),
  local: require('../config/local'),
  assets: require('../config/assets'),
  bootstrap: require('../config/bootstrap')
};

module.exports = function(customConfig) {
  var app  = express();
  var gweb = global.gweb = {
    app: app,
    viewEngine: {},
    express: express,
    config: config,
    log: logger(),
    util: util
  };

  app.use(morgan('combined'));

  // configure template engine
  app.engine(config.views.fileExtension, config.views.engine);
  app.set('view engine', config.views.fileExtension);
  app.set('views', config.views.fileDir);

  if(typeof config.views.initialize === 'function') {
    gweb.viewEngine = config.views.initialize(app, config) || gweb.viewEngine;
  }

  // configure asset handling
  app.use(express.static(config.assets.path));
  app.use(slashes());

  // for accessing post body
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // start routing
  routing(app, config);
  database(app, config);

  // start server
  app.listen(config.local.port);

  // start custom bootstrap functions
  var customBootConf;
  for(var bootFnName in config.bootstrap) {
    if(config.bootstrap.hasOwnProperty(bootFnName)) {
      customBootConf = _.result(customConfig, bootFnName);
      // check if boot function config has a truthy value
      // to ensure it is intendet do start
      if(customBootConf) {
        config.bootstrap[bootFnName](app, customBootConf);
      }
    }
  }

  return gweb;
};
