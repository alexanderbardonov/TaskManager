/**
 * Created by AlexanderBardonov on 7/30/14.
 */
angular.module('taskManager').controller('mainView',
    function ($scope, $state, $modal, SessionService, modelUser) {
//        $scope.taskState = modelUser.getTask();
//        $scope.taskState.state = $scope.tasksDisplay[0].state;

        $scope.choseTask = function(item){
            $scope.taskItem = item;
        }

    });

