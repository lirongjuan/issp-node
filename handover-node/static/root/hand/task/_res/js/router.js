var app = angular.module('task', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.hand.task", {
        url : "/task",
        views : {
            "content@root.hand" : {
                templateUrl : "root/hand/task/_res/html/index.html",
                controller:"taskCtrl"
            },"menu@root.hand" : {
                templateUrl : "root/hand/task/_res/html/menu.html",
                controller:"taskMenuCtrl"
            }
        }
    }).state("root.hand.task.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.hand.task":{
                templateUrl : "root/hand/task/list/_res/html/index.html",
                controller:'taskListCtrl'
            }
        }
    }).state("root.hand.task.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.hand.task":{
                templateUrl : "root/hand/task/add/_res/html/index.html",
                controller:'taskAddCtrl'
            }
        }
    }).state("root.hand.task.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.hand.task":{
                templateUrl : "root/hand/task/edit/_res/html/index.html",
                controller:'taskEditCtrl'
            }
        }
    }).state("root.hand.task.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.hand.task":{
                templateUrl : "root/hand/task/upload/_res/html/index.html",
                controller:'taskUploadCtrl'
            }
        }
    }).state("root.hand.task.view[12]",{
        url:"/view[12]?id=&page=",
        views:{
            "content@root.hand.task":{
                templateUrl : "root/hand/task/view/_res/html/index.html",
                controller:'taskViewCtrl'
            }
        }
    })
});