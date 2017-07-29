var app = angular.module('taskList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.handover.task.list",{
        url:"/list",
        views:{
            "content@root.handover.task":{
                templateUrl : "root/handover/task/list/_res/html/index.html",
                controller:'taskListCtrl'
            }
        }
    }).state("root.handover.task.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.handover.task.list":{
                templateUrl : "root/handover/task/list/delete/_res/html/index.html",
                controller:'taskDeleteCtrl'
            }
        }
    })
});