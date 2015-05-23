'use strict';

module.exports = function(grunt) {
  grunt.config.set('autoprefixer', {
    dev: {
      src: '<%= pkg.paths.tmp %>/<%= pkg.paths.source %>/css/main.css'
    }
  });
};

