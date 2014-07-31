/**
 * Created by AlexanderBardonov on 7/31/14.
 */
angular.module('taskManager').directive('activeitem', function () {
    return {
        restrict: 'A',
        link : function(scope, element) {

//            $(element[0]).click(function(){
//
//                switch (scope.taskItem.state){
//                    case 'In Progress':{
//                        element.css('background','#adff30');
//                        break;
//                    }
//                }
//            });

        }
    };
});

angular.module('taskManager').directive('calculatetasks', function () {
    return {
        restrict: 'A',
        link : function(scope, element) {
            var progress = 0, pending = 0, completed = 0;
            var maxTasks = Math.max(scope.numProgress,scope.numPending,scope.numCompleted);

            if(scope.numProgress == maxTasks){
                progress = 95;
                pending = Math.round(95/scope.numProgress*scope.numPending);
                completed = Math.round(95/scope.numProgress*scope.numCompleted);
            }

            if(scope.numPending == maxTasks){
                pending = 95;
                progress = Math.round(95/scope.numPending*scope.numProgress);
                completed = Math.round(95/scope.numPending*scope.numCompleted);
            }

            if(scope.numCompleted == maxTasks){
                completed = 95;
                pending = Math.round(95/scope.numCompleted*scope.numPending);
                progress = Math.round(95/scope.numCompleted*scope.numProgress);
            }

            $('.prev_progress .prev_line').css('width', (5+progress)+'px');
            $('.prev_pending .prev_line').css('width', (5+pending)+'px');
            $('.prev_completed .prev_line').css('width', (5+completed)+'px');
        }
    };
});
