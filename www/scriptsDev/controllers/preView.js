/**
 * Created by AlexanderBardonov on 7/30/14.
 */
angular.module('taskManager').controller('preView',
    function ($scope, $state, $modal, SessionService, modelUser) {
        if (!$scope.isAuth()) {
            $state.go('main.home');
        }

        $scope.newTask = function () {
            $state.go('main.newTask');
        }

        $scope.numTasks();

        $scope.groupTasks = function (task) {
            var tasks = [];
            $scope.user.tasks.forEach(function(item){
                if(item.state == task){
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
                    break;
                }
                case 2:
                {
                    $scope.groupTasks('Pending');
                    break;
                }
                case 3:
                {
                    $scope.groupTasks('Completed');
                    break;
                }
            }
        }

    });

