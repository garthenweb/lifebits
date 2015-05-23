'use strict';

module.exports = function(grunt) {
  grunt.registerTask('default', [
    // 'shell:mongodb',
    'clean:assets',
    'copy:vendor',
    'sync:dev',
    // 'connect',
    // 'karma:dev:start',
    'concurrent:dev'
  ]);
};
