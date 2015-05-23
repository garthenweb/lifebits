'use strict';

module.exports = function(grunt) {
  grunt.config.set('copy', {

    build: {
      files: [{
        expand: true,
        cwd: '<%= pkg.paths.source %>',
        src: [
          '{,*/}*.{ico,png,txt,html,json}',
          'img/**/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        dest: '<%= pkg.paths.tmp %>/<%= pkg.paths.source %>'
      }]
    },

    vendor: {
      files: [
        {
          expand: true,
          cwd: '<%= pkg.paths.source %>/bower_components',
          src: [
            '**/*.{js,json,html,css,scss,sass,png,jpg,jpeg,gif,webp,svg,map}'
          ],
          dest: '<%= pkg.paths.tmp %>/<%= pkg.paths.source %>/bower_components'
        }
      ]
    }

  });
};
