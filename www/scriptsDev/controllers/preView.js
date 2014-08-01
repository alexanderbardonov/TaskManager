/**
 * Created by AlexanderBardonov on 7/30/14.
 */
angular.module('taskManager').controller('preView',
    function ($scope, $state, $modal, SessionService, modelUser) {

        $scope.task = modelUser.getTask();

        if (!$scope.isAuth()) {
            $state.go('main.home');
        }

        $scope.newTask = function () {
            $state.go('main.newTask');
        };

        $scope.numTasks();

        $scope.groupTasks = function (task) {
            var tasks = [];
            $scope.user.tasks.forEach(function (item) {
                if (item.state == task) {
                    tasks.push(item);
                }
            });
            $scope.setTasksDisplay(tasks);
        };

        $scope.taskDisplay = function (task) {
            switch (task) {
                case 1:
                {
                    $scope.groupTasks('In Progress');
                    $scope.setMessage(' Tasks In Progress displaying');
                    break;
                }
                case 2:
                {
                    $scope.groupTasks('Pending');
                    $scope.setMessage(' Tasks Pending displaying');
                    break;
                }
                case 3:
                {
                    $scope.groupTasks('Completed');
                    $scope.setMessage(' Tasks Completed displaying');
                    break;
                }
            }
        };

        $scope.search = function () {
            if ($scope.task.name && $scope.task.name != "") {
                var tasks = [];
                $scope.setMessage(' Result Search by "' + $scope.task.name + '" displaying');
                $scope.user.tasks.forEach(function (item) {
                    if (item.name.toUpperCase().indexOf($scope.task.name.toUpperCase()) >= 0) {
                        tasks.push(item);
                    }
                });
                $scope.setTasksDisplay(tasks);
                $state.go('main.authHome');
            }

        }
        $scope.clear = function () {
            $scope.task.name = '';
            $scope.authHome();
        }

    });

