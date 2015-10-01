module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            main: {
                options : {},
                src: 'www/index.js',
                dest: 'www/build.js'
            }
        },

        /*
         * Watch
         */
        watch : {
            browserify : {
                files : ['www/index.*'],
                tasks : ['browserify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['browserify']);
};

