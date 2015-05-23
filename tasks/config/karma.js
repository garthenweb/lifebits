'use strict';

module.exports = function(grunt) {
  grunt.config.set('karma', {
    options: {
      configFile: 'tasks/config/extended/karma.js'
    },

    dev: {
      reporters: 'dots',
      background: true,
      singleRun: false
    },

    test: {
      // reporters: 'coverage',
      singleRun: true
    }
  });
};
