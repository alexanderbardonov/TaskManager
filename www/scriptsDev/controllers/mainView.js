/**
 * Created by AlexanderBardonov on 7/30/14.
 */
angular.module('taskManager').controller('mainView',
    function ($scope, $state, $modal, SessionService, modelUser) {

        $scope.choseTask = function (item) {
            $scope.setTaskItem(item);
        };

        $scope.upDateTask = function (item) {

            SessionService.update($scope.user, item);
            $scope.numTasks();
        }

    });

