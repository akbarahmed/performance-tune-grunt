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

    grunt.registerTask('server', [], function() {
        grunt.task.run(
            'express:dev',
            'open',
            'watch'
        );
    });
};
