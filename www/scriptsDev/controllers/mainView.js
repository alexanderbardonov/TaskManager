/**
 * Created by AlexanderBardonov on 7/30/14.
 */
angular.module('taskManager').controller('mainView',
    function ($scope, $state, $modal, SessionService, $timeout) {

        $scope.choseTask = function (item) {
            $scope.setTaskItem(item);
        };

        $scope.upDateTask = function (item) {

            SessionService.update($scope.user, item);
            $scope.numTasks();
        };

        $scope.deleteTaskItem = function(item){
            SessionService.deleteTask($scope.user, item)
            $scope.numTasks();
            $scope.home();
        };

        $timeout(function () {
            $scope.switchTask($scope.touchTask)
        }, 0, false);
    });

