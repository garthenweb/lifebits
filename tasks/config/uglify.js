'use strict';

module.exports = function(grunt) {
  grunt.config.set('uglify', {
    options: {
      sourceMap: true,
      screwIE8: true,
      compress: {
        'dead_code': true,
        'drop_debugger': true,
        'drop_console': true,
        unused: true,
        properties: true,
        sequences: true
      }
    },
    deps: {
      files: {
        '<%= pkg.paths.tmp %>/<%= pkg.paths.source %>/js/build.js': [
          '<%= pkg.paths.source %>/js/main.js'
        ]
      }
    }
  });
};
