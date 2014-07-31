/**
 * Created by AlexanderBardonov on 7/28/14.
 */
angular.module('taskManager').controller('mainCtrl',
    function ($scope, $state, $modal, SessionService, modelUser) {

        $scope.user = modelUser.getUser();
        $scope.displayMessage = 'All Tasks displaying';
        $scope.tasksDisplay = [];
        $scope.taskItem = modelUser.getTask();

        $scope.setDisplayMessage = function (message) {
            $scope.displayMessage = message;
        };

        $scope.isAuth = function () {
            return SessionService.getUserAuthenticated();
        };

        $scope.logIn = function () {
            $scope.user = modelUser.getUser();
            $modal.open({
                templateUrl: "templates/modalLogIn.html",
                controller: 'modalCtrl',
                scope: $scope
            });
        };

        $scope.logOut = function () {
            SessionService.setUserAuthenticated(false);
            $scope.user = modelUser.getUser();
            $scope.home();
        };

        $scope.home = function () {
            $state.go('main.home');
        };

        $scope.authHome = function () {
            $scope.user = SessionService.getCurrentUser();
            $scope.setTasksDisplay($scope.user.tasks);
            $state.go('main.authHome');
        };
        $scope.setTasksDisplay = function (tasks) {
            $scope.tasksDisplay = tasks;
            $scope.taskItem = $scope.tasksDisplay[0];
            $scope.taskState = $scope.taskItem.state;
        };

        if ($scope.isAuth()) {
            $scope.authHome();
        } else {
            $scope.home();
        }

        $scope.numProgress = 0;
        $scope.numPending = 0;
        $scope.numCompleted = 0;

        $scope.numTasks = function () {
            $scope.numProgress = 0;
            $scope.numPending = 0;
            $scope.numCompleted = 0;
            $scope.user.tasks.forEach(function (item) {
                switch (item.state) {
                    case 'In Progress':
                    {
                        $scope.numProgress++;
                        break;
                    }
                    case 'Pending':
                    {
                        $scope.numPending++;
                        break;
                    }
                    case 'Completed':
                    {
                        $scope.numCompleted++;
                        break;
                    }
                }
            })
        }
    });
