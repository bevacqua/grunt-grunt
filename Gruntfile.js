'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            everything: ['tasks/**/*.js', 'Gruntfile.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['jshint']);
};
