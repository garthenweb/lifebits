'use strict';

var mongoose = require('mongoose');

module.exports = function(app, config) {
  var url = config.local.database;

  mongoose.connect(url);

  var db = mongoose.connection;
  db.on('error', function() {
    gweb.log.error(arguments);
  });
};
