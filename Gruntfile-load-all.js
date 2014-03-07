'use strict';

module.exports = function(grunt) {
    require('time-grunt')(grunt);

    process.env.NODE_PATH = __dirname + '/node_modules';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        express: {
            options: {
                port: process.env.PORT || 3000
            },
            dev: {
                options: {
                    debug: true,
                    script: 'server.js'
                }
            }
        },

        open: {
            server: {
                url: 'http://localhost:<%= express.options.port %>'
            }
        },

        watch: {
            express: [
                'server.js'
            ],
            tasks: ['refresh'],
            options: {
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Load all of the Grunt related packages. This is a representative list
    // of the number of modules that a production Grunt file uses.
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-node-inspector');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('server', [], function() {
        grunt.task.run(
            'express:dev',
            'open',
            'watch'
        );
    });
};
