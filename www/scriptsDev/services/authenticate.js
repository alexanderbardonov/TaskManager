/**
 * Created by AlexanderBardonov on 7/30/14.
 */

angular.module('taskManager').service('SessionService', function(){

    var currentUser = null;
    var userIsAuthenticated = false;

    this.setUserAuthenticated = function(auth,user){
        if(auth){
            if(user!=null && localStorage[user.email]){
                currentUser = user;
                localStorage['currentUser'] = JSON.stringify(user);
                userIsAuthenticated = true;
                return userIsAuthenticated;
            }else{
                currentUser = null;
                userIsAuthenticated = false;
                return userIsAuthenticated;
            }
        }else{
            currentUser = null;
            localStorage.removeItem('currentUser');
            userIsAuthenticated = false;
            return userIsAuthenticated;
        }
    };

    this.getUserAuthenticated = function(){
        return userIsAuthenticated;
    };

    this.getCurrentUser = function(){
        return currentUser;
    }
});
