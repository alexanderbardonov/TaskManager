/**
 * Created by AlexanderBardonov on 7/28/14.
 */
angular.module('taskManager').controller('mainCtrl',
    function ($scope, $state, $modal, SessionService, modelUser) {

        $scope.user = modelUser.getUser();

        $scope.isAuth = function () {
            return SessionService.getUserAuthenticated();
        }

        $scope.logIn = function () {
//            $scope.user = modelUser.getUser();
            $modal.open({
                templateUrl: "templates/modalLogIn.html",
                controller: 'modalCtrl',
                scope:$scope
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

        $scope.authHome = function() {
            $scope.user = SessionService.getCurrentUser();
            $state.go('main.authHome');
        };

        if ($scope.isAuth()) {
            $scope.authHome();
        }else{
            $scope.home();
        }
    });
