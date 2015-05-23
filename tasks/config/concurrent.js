'use strict';

module.exports = function(grunt) {
  grunt.config.set('concurrent', {
    dev: {
      tasks: ['node-inspector', 'nodemon:dev', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    }
  });
};
