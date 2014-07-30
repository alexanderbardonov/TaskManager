/**
 * Created by AlexanderBardonov on 7/28/14.
 */
angular.module('taskManager').controller('modalCtrl',
    function ($scope, $state, $modalInstance, SessionService) {

        $scope.submitLogIn = false;
        $scope.loginEmail = '';
        $scope.loginPassword = '';

        $scope.LogIn = function () {
            $scope.errorMessage = "Missing or inaccurate information, check form";
            $scope.submitLogIn = true;

            if ($scope.logInForm.$valid) {
                if (localStorage[$scope.loginEmail]) {
                    var user = JSON.parse(localStorage[$scope.loginEmail]);
                    if ($scope.loginPassword == user.pass) {
                        SessionService.setUserAuthenticated(true, user);
                    } else {
                        $scope.logInForm.$valid = false;
                        $scope.logInForm.password.$invalid = true;
                        $scope.loginPassword = '';
                        $scope.errorMessage = "Invalid Password";
                    }
                } else {
                    $scope.logInForm.$valid = false;
                    $scope.logInForm.email.$invalid = true;
                    $scope.errorMessage = "This Login not exist";
                }
            }

            if ($scope.isAuth()){
                $scope.authHome();
                $modalInstance.close();
            }



        }

    });