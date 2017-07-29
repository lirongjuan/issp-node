var app = angular.module('task', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.handover.task", {
        url : "/task",
        views : {
            "content@root.handover" : {
                templateUrl : "root/handover/task/_res/html/index.html",
                controller:"taskCtrl"
            },"menu@root.handover" : {
                templateUrl : "root/handover/task/_res/html/menu.html",
                controller:"taskMenuCtrl"
            }
        }
    }).state("root.handover.task.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.handover.task":{
                templateUrl : "root/handover/task/add/_res/html/index.html",
                controller:'taskAddCtrl'
            }
        }
    }).state("root.handover.task.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.handover.task":{
                templateUrl : "root/handover/task/edit/_res/html/index.html",
                controller:'taskEditCtrl'
            }
        }
    }).state("root.handover.task.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.handover.task":{
                templateUrl : "root/handover/task/upload/_res/html/index.html",
                controller:'taskUploadCtrl'
            }
        }
    }).state("root.handover.task.download[12]",{
        url:"/download[12]?id=",
        views:{
            "content@root.handover.task":{
                templateUrl : "root/handover/task/download/_res/html/index.html",
                controller:'taskDownloadCtrl'
            }
        }
    })
});