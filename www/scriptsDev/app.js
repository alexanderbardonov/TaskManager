/**
 * Created by AlexanderBardonov on 7/28/14.
 */
var taskManager = angular.module('taskManager',['ui.router','ui.bootstrap']);

taskManager.config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/main/home');

    $stateProvider
        .state('main',{
            url:'/main',
            templateUrl:'templates/main.html',
            controller:'mainCtrl'
        })
        .state('main.home',{
            url:'/home',
            templateUrl:'templates/home.html',
            controller:'signUp'
        })
        .state('main.authHome',{
            url:'/auth_home',
            views:{
                'preView':{
                    templateUrl:'templates/preView.html',
                    controller:'preView'
                },
                'mainView':{
                    templateUrl:'templates/mainView.html',
                    controller:'mainView'
                }
            }
        })
        .state('main.newTask',{
            url:'/new_task',
            views:{
                'preView':{
                    templateUrl:'templates/preView.html',
                    controller:'mainView'
                },
                'createTask':{
                    templateUrl:'templates/newTask.html',
                    controller:'newTask'
                }
            }
        })
});

taskManager.run(function( $state, $location, SessionService){
//
//    localStorage.clear();
    if (localStorage.getItem("currentUser")){
        var user = JSON.parse(localStorage['currentUser']);
        SessionService.setUserAuthenticated(true,user);
    }
});
