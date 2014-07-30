/**
 * Created by AlexanderBardonov on 7/30/14.
 */
angular.module('taskManager').controller('preView',
    function ($scope, $state, $modal, SessionService, modelUser) {
        if(!$scope.isAuth()){
            $state.go('main.home');
        }

    });

