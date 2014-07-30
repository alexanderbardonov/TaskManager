/**
 * Created by AlexanderBardonov on 7/30/14.
 */
angular.module('taskManager').controller('newTask',
    function ($scope, $state, modelUser, SessionService) {

        $scope.task = modelUser.getTask();
        $scope.task.state = 'In Progress';


        $scope.createTask = function(){
            $scope.nameEmpty = false;
            if($scope.task.name == ''){
                $scope.nameEmpty = true;
                $scope.errorMessage = 'Feel the Name of Task'
            }else{
                SessionService.addTaskUser($scope.user,$scope.task);
                $scope.authHome();
            }
        }
    });
