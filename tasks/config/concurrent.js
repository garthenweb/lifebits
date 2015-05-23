'use strict';

module.exports = function(grunt) {
  grunt.config.set('concurrent', {
    dev: {
      tasks: ['nodemon:dev', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    }
  });
};
