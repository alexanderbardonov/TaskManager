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
    };

    this.setCurrentUser = function(user){
        localStorage['currentUser'] = JSON.stringify(user);
        currentUser = user;
    };

    this.findeElement = function(array,target){
        var elm = JSON.stringify(target);
        for (var i = 0; i<array.length ;i++){
            if(JSON.stringify(array[i]) == elm){
                return i;
            }
        }
        return -1;
    };

    this.addTaskUser = function(user,task){
        if(localStorage[user.email]){
            user.tasks.push(task);
            localStorage[user.email] = JSON.stringify(user);
            this.setCurrentUser(user);
        }
    };
    this.update = function(user,task){
        user.tasks[task.ind].state = task.state;
        user.tasks[task.ind].description = task.description;
        localStorage[user.email] = JSON.stringify(user);
        this.setCurrentUser(user);
    };
    this.deleteTask = function(user,task){
        user.tasks.splice(task.ind,1);
        localStorage[user.email] = JSON.stringify(user);
        this.setCurrentUser(user);
    }
});
