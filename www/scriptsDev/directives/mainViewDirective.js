/**
 * Created by AlexanderBardonov on 7/31/14.
 */
angular.module('taskManager').directive('activeitem', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {

//            $(element[0]).click(function(){
//
////                alert(JSON.stringify($("#tasks").find(".item_task")));
//               $($("#tasks").find(".item_task")[1]).css('background','#000000');
//
////               alert(JSON.stringify(element[0].children('.item_task')[0]));
//            });
////            element[0].children('.item_task')[0].css('background','#000000');

        }
    };
});

angular.module('taskManager').directive('calculatetasks', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            var chsge = function () {
                var progress = 0, pending = 0, completed = 0;
                var maxTasks = Math.max(scope.numProgress, scope.numPending, scope.numCompleted);

                if (scope.numProgress == maxTasks && maxTasks!=0) {
                    progress = 95;
                    pending = Math.round(95 / scope.numProgress * scope.numPending);
                    completed = Math.round(95 / scope.numProgress * scope.numCompleted);
                }

                if (scope.numPending == maxTasks && maxTasks!=0) {
                    pending = 95;
                    progress = Math.round(95 / scope.numPending * scope.numProgress);
                    completed = Math.round(95 / scope.numPending * scope.numCompleted);
                }

                if (scope.numCompleted == maxTasks && maxTasks!=0) {
                    completed = 95;
                    pending = Math.round(95 / scope.numCompleted * scope.numPending);
                    progress = Math.round(95 / scope.numCompleted * scope.numProgress);
                }

                $('.prev_progress .prev_line').css('width', (5 + progress) + 'px');
                $('.prev_pending .prev_line').css('width', (5 + pending) + 'px');
                $('.prev_completed .prev_line').css('width', (5 + completed) + 'px');
            };

            $('.prev_progress .prev_wrapper').bind("DOMSubtreeModified", function () {
                chsge();
            });

            $('.prev_pending .prev_wrapper').bind("DOMSubtreeModified", function () {
                chsge();
            });

            $('.prev_completed .prev_wrapper').bind("DOMSubtreeModified", function () {
                chsge();
            });
        }
    };
});
