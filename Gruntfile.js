module.exports = function (grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем
        concat: {
            main: {
                src: [
                    'www/scriptsDev/lib/angular.min.js',
                    'www/scriptsDev/lib/angular-ui-router.min.js',
                    'www/scriptsDev/lib/ui-bootstrap-tpls-0.11.0.min.js',
                    'www/scriptsDev/lib/jquery-1.11.0.min.js',
                    'www/scriptsDev/test_user.js',
                    '<%= ngmin.controllers.dest %>',
                    '<%= ngmin.services.dest %>',
                    '<%= ngmin.directives.dest %>'
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
            },
            directives: {
                src: [
                    'www/scriptsDev/directives/*.js'
                ],
                dest: 'www/scriptsBuild/directives.js'
            },
            services: {
                src: [
                    'www/scriptsDev/services/*.js'
                ],
                dest: 'www/scriptsBuild/services.js'
            }
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
                    protocol: 'http',
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