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
                'server.js',
                'client/*.txt'
            ],
            tasks: ['refresh'],
            options: {
                livereload: true
            }
        },

        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'client',
                    src: [
                        '**/*.txt'
                    ],
                    dest: 'build-development'
                }]
            }
        }
    });


    grunt.registerTask('server', [], function() {
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-express-server');
        grunt.loadNpmTasks('grunt-open');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-newer');

        grunt.task.run(
            'newer:copy',
            'express:dev',
            'open',
            'watch'
        );
    });

    //grunt.registerTask('copy', [], function() 


    grunt.registerTask('someOtherTask', [], function() {
        // In reality we would have a number of small subtasks, then our main
        // tasks would call each subtask. However, for this example we have
        // simply loaded all plugins unrelated to the 'server' task within
        // 'someOtherTask'.
        grunt.loadNpmTasks('grunt-angular-templates');
        grunt.loadNpmTasks('grunt-concurrent');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-compass');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-htmlmin');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-ngmin');
        grunt.loadNpmTasks('grunt-node-inspector');
        grunt.loadNpmTasks('grunt-preprocess');
        grunt.loadNpmTasks('grunt-rev');
        grunt.loadNpmTasks('grunt-usemin');

    });
};
