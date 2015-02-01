'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          watch: [
          'example','index.html'
          ],
          ignore: ['bower_components']
        }
      }
    }
  });
  grunt.registerTask('default', [
    'server'
    ]);

  grunt.registerTask('server', [
    'nodemon'
    ]);

};
