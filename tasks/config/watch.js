'use strict';

module.exports = function(grunt) {
  grunt.config.set('watch', {

    sync: {
      files: [
        '<%= pkg.paths.source %>/{,*/}*.{ico,png,txt,html}',
        '<%= pkg.paths.source %>/img/**/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
      ],
      tasks: ['sync:dev'],
      options: { livereload: true, atBegin: true, spawn: false }
    },

    // js: {
    //   files: '<%= pkg.paths.tmp %>/<%= pkg.paths.source %>/js/{,*/}*.js',
    //   options: { livereload: true, spawn: false }
    // },

    sass: {
      files: '<%= pkg.paths.source %>/scss/{,*/}*.scss',
      tasks: ['sass:dev', 'autoprefixer:dev'],
      options: { atBegin: true }
    },

    css: {
      files: '<%= pkg.paths.tmp %>/<%= pkg.paths.source %>/css/{,*/}*.css',
      options: { livereload: true, spawn: false }
    }
  });
};
