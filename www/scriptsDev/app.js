/**
 * Created by AlexanderBardonov on 7/28/14.
 */
var taskManager = angular.module('taskManager',['ui.router']);

taskManager.config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/main');

    $stateProvider
        .state('main',{
            url:'/main',
            templateUrl:'templates/main.html',
            controller:'mainCtrl'
        })
});
