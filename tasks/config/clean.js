'use strict';

module.exports = function(grunt) {
  grunt.config.set('clean', {
    assets: {
      files: [{
        src: ['<%= pkg.paths.tmp %>/<%= pkg.paths.source %>']
      }]
    }
  });
};
