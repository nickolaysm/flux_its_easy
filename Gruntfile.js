module.exports = function (grunt) {
    grunt.file.defaultEncoding = 'utf8';    

	//@Optional Выдает сколько времени занимает каждая задача и общая сборка. 
	require('time-grunt')(grunt);
    var transform = [
        /*['babelify', {optional: ["react", "reactCompat", "validation.react"]}], //Для компиляции в React 0.10 */        
        /*["browserify-replace", {replace:[{from:"__DEV__", to:"false"}]}],*/
        ['babelify'],
        ['browserify-shim']
    ];

    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        config: {
            files: ['./src/main/**/*.{es6,jsx}'],
            dist: './dist/',
            bundle: '<%= config.dist %>/<%= pkg.name%>'
        },
        clean: ['<%= config.dist %>'],
        browserify: {
            options: {
                extensions: ['.jsx', '.es6'],
                transform: transform
            },
            /*Полная установка с пожатием*/
            dist: {
                options: {
                    transform: transform.concat(['uglifyify'])
                },
                src: '<%= config.files %>',
                dest: '<%= config.bundle %>.js'
            },
            debug: {
                options: {
                    browserifyOptions: {
                        debug: true
                    }
                },
                src: '<%= config.files %>',
                dest: '<%= config.bundle %>.js'
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-browserify');


    grunt.registerTask('default', ['clean', 'browserify:debug']);

};
