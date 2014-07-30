/**
 * Created by AlexanderBardonov on 7/30/14.
 */
angular.module('taskManager').controller('mainView',
    function ($scope, $state, $modal, SessionService, modelUser) {
        $scope.newTask = function(){
            $state.go('main.newTask');
        }
    });

