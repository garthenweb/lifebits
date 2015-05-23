/* jshint node: true */
'use strict';

module.exports = function(grunt) {

  var includeAll = require('include-all');

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // include package.json for configuration
  grunt.config.set('pkg', grunt.file.readJSON('package.json'));


  // Load task functions
  var taskConfigurations = loadTasks('./tasks/config'),
      registerDefinitions = loadTasks('./tasks/register');

  // (ensure that a default task exists)
  if (!registerDefinitions.default) {
    registerDefinitions.default = function (grunt) {
      grunt.registerTask('default', []);
    };
  }

  // Run task functions to configure Grunt.
  invokeConfigFn(taskConfigurations);
  invokeConfigFn(registerDefinitions);

  /**
   * Invokes the function from a Grunt configuration module with
   * a single argument - the `grunt` object.
   */
  function invokeConfigFn(tasks) {
    for (var taskName in tasks) {
      if (tasks.hasOwnProperty(taskName)) {
        tasks[taskName](grunt);
      }
    }
  }

  /**
   * Loads Grunt configuration modules from the specified
   * relative path. These modules should export a function
   * that, when run, should either load/configure or register
   * a Grunt task.
   */
  function loadTasks(relPath) {
    return includeAll({
      dirname: require('path').resolve(__dirname, relPath),
      filter: /(.+)\.js$/,
      excludeDirs :  /^extended$/
    }) || {};
  }

};
