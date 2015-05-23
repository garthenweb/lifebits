'use strict';

module.exports = function(grunt) {
  grunt.config.set('nodemon', {
    dev: {
      script: 'app.js',
      options: {
        nodeArgs: ['--debug'],
        ignore: [
          'node_modules/**',
          '<%= pkg.paths.tmp %>/**',
          '<%= pkg.paths.source %>/**',
          'Gruntfile.js'
        ]
      }
    }
  });
};
