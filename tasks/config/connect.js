'use strict';

module.exports = function(grunt) {
  grunt.config.set('connect', {
    server: {
      options: {
        protocol: 'https',
        key: grunt.file.read('server.key').toString(),
        cert: grunt.file.read('server.crt').toString(),
        ca: grunt.file.read('ca.crt').toString(),
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

