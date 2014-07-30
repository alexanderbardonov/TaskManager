/**
 * Created by AlexanderBardonov on 7/30/14.
 */
angular.module('taskManager').service('modelUser', function(){

    var user = {}

    this.getUser = function(){
        user = {
            pass: "",
            email: "",
            confPass: "",
            firstName: "",
            secondName: ""
        };
        return user;
    }

});
