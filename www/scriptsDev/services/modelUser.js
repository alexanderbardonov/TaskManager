/**
 * Created by AlexanderBardonov on 7/30/14.
 */
angular.module('taskManager').service('modelUser', function(){

    var user = {};
    var task = {};

    this.getUser = function(){
        user = {
            pass: "",
            email: "",
            confPass: "",
            firstName: "",
            secondName: "",
            tasks:[]
        };
        return user;
    };

    this.getTask = function(){
        task = {
            name:'',
            description:'',
            state:''
        };
        return task;
    }

});
