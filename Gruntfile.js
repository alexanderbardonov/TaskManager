module.exports = function (grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем
        concat: {
            main: {
                src: [
                    'www/scriptsDev/lib/angular.min.js',
                    'www/scriptsDev/lib/angular-ui-router.min.js',
                    '<%= ngmin.controllers.dest %>'
                ],
                dest: 'www/scriptsBuild/scripts.js'
            }
        },

//        Подготавливаем angular файлы
        ngmin: {
            controllers: {
                src: [
                    'www/scriptsDev/app.js',
                    'www/scriptsDev/controllers/*.js'
                ],
                dest: 'www/scriptsBuild/controllers.js'
            }
//            directives: {
//                src: ['scripts/directives/jqueryUiDirectives.js'],
//                dest: 'build/directives.js'
//            }
        },

//        Сжимаем
        uglify: {
            main: {
                files: {
                    // Результат задачи concat
                    'www/scriptsBuild/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        },

//        Запускаем на локальном сервере
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    keepalive: true,
                    open: true,
                    base: [
                        'www'
                    ]
                }
            }
        }
    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['ngmin', 'concat', 'uglify']);
    grunt.registerTask('runapp', ['ngmin', 'concat', 'uglify','connect']);
};