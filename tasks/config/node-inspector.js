'use strict';

module.exports = function(grunt) {
  grunt.config.set('node-inspector', {
    custom: {
      options: {
        'web-port': 1337,
        'web-host': 'localhost'
      }
    }
  });
};
