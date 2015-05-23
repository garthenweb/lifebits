'use strict';

module.exports = function(grunt) {
  grunt.config.set('sync', {
    dev: {
      files: [{
        cwd: '<%= pkg.paths.source %>/',
        src: [
          '{,*/}*.{ico,png,txt,html,json}',
          'js/**/*.{js,json,html}',
          'img/**/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        dest: '<%= pkg.paths.tmp %>/<%= pkg.paths.source %>'
      }]
    }
  });
};
