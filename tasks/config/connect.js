'use strict';

module.exports = function(grunt) {
  grunt.config.set('connect', {
    server: {
      options: {
        port: 8080,
        hostname: '*',
        livereload: true,
        base: {
          path: '<%= pkg.paths.tmp %>/<%= pkg.paths.source %>'
        }
      }
    }
  });
};

