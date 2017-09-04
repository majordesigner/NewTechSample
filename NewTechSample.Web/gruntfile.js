module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    paths: ['Content/css'],
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "Content/css/views/general.css": "Content/css/views/general.less" // destination file and source file
                }
            }
        },
        /*uglify: {
            my_target: {
                files: [{
                    dest: 'Scripts/output.min.js',
                    src: ['Scripts/system/*.js', '!Scripts/system/*.min.js', 'Scripts/views/general.js']
                }]
            }
        },*/
        uglify: {
            my_target: {
                files: [{
                    dest: 'Scripts/output.min.js',
                    src: [
                        'Scripts/system/jquery-1.10.2.js',
                        'Scripts/system/jquery.validate.js',
                        'Scripts/system/jquery.validate.unobtrusive.js',
                        'Scripts/system/modernizr-2.6.2.js',
                        'Scripts/system/bootstrap.js',
                        'Scripts/views/general.js'
                    ]
                }]
            }
        },
        watch: {
            styles: {
                files: ['Content/css/views/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            script: {
                files: ['Scripts/**/*.js'],
                tasks: ['uglify'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    
    grunt.event.on('watch', function (action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
    

    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['less', 'uglify', 'watch']);
};