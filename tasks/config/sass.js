'use strict';

module.exports = function(grunt) {
  grunt.config.set('sass', {
    options: {
      includePaths: ['public/bower_components'],
      // sourceMap: './main.css.map',
      // sourceComments: 'map'
    },
    dev: {
      files: {
        '<%= pkg.paths.tmp %>/<%= pkg.paths.source %>/css/main.css': '<%= pkg.paths.source %>/scss/main.scss'
      }
    },
    prod: {
      options: {
        outputStyle: 'compressed'
      },
      files: '<%= sass.dev.files %>'
    }
  });
};

