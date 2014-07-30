/**
 * Created by AlexanderBardonov on 7/28/14.
 */
angular.module('taskManager').controller('signUp',
    function ($scope,$state,SessionService) {

        $scope.submitSignUp = false;

        $scope.signUp = function () {
            $scope.errorMessage = "Missing or inaccurate information, check form";
            $scope.submitSignUp = true;
            if ($scope.user.pass != $scope.user.confPass) {
                $scope.signUpForm.$valid = false;
                $scope.signUpForm.password.$invalid = true;
                $scope.signUpForm.repeatPassword.$invalid = true;
                $scope.user.pass = '';
                $scope.user.confPass = '';
                $scope.errorMessage = "Password not equals with confirm password";
                return;
            }
            if ($scope.signUpForm.$valid) {
                if (localStorage.getItem($scope.user.email)) {
                    $scope.signUpForm.$valid = false;
                    $scope.signUpForm.email.$invalid = true;
                    $scope.errorMessage = "This Login already exist";
                }else{
                    localStorage.setItem($scope.user.email, JSON.stringify($scope.user));
                    SessionService.setUserAuthenticated(true,$scope.user);
                    $state.go('main.authHome');
                }
            }
        };

        if($scope.isAuth()){
            $state.go('main.authHome');
        }
    });
