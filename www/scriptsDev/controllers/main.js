/**
 * Created by AlexanderBardonov on 7/28/14.
 */
angular.module('taskManager').controller('mainCtrl',
    function ($scope, $state, $modal, SessionService, modelUser) {

        $scope.user = modelUser.getUser();
        $scope.displayMessage = 'All '+$scope.user.tasks.length+' Tasks displaying';
        $scope.tasksDisplay = [];
        $scope.taskItem = modelUser.getTask();
        $scope.touchTask = 0;

        $scope.setTouchTask = function(item){
            $scope.touchTask = item
        };

        $scope.switchTask = function(index){
            $('.item_switch .item_task').eq($scope.touchTask).css('border','1px solid grey');
            $('.item_switch .item_task').eq(index).css('border','2px solid #000000');
            $scope.setTouchTask(index);
        }

        $scope.setTaskItem = function(item){
            $scope.taskItem = jQuery.extend(true, {}, item);
            $scope.taskItem.ind = SessionService.findeElement($scope.user.tasks,item);
        };

        $scope.setMessage = function(message){
          $scope.displayMessage = message;
        };

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
            $scope.tasksDisplay = [];
            $scope.displayMessage = 'All 0 Tasks displaying';
            $scope.home();
        };

        $scope.home = function () {
            $state.go('main.home');
        };

        $scope.authHome = function () {
            $scope.user = SessionService.getCurrentUser();
            $scope.setTasksDisplay($scope.user.tasks);
            $scope.displayMessage = 'All '+$scope.user.tasks.length+' Tasks displaying';
            $state.go('main.authHome');
        };
        $scope.setTasksDisplay = function (tasks) {
            $scope.tasksDisplay = tasks;
            $scope.setTaskItem($scope.tasksDisplay[0]);
            $scope.switchTask(0);
        };
        $scope.getTasksDisplay = function(){
            return $scope.tasksDisplay;
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

        $scope.newTask = function () {
            $state.go('main.newTask');
        };
    });
