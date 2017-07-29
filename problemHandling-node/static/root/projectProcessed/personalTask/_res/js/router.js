var app = angular.module('personalTask', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectProcessed.personalTask", {
        url : "/personalTask",
        views : {
            "content@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/personalTask/_res/html/index.html",
                controller:"taskCtrl"
            },"menu@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/personalTask/_res/html/menu.html",
                controller:"taskMenuCtrl"
            }
        }
    }).state("root.projectProcessed.personalTask.list[12]",{
        url:"/list[12]?id=&name=&page=&internalProjectName=&handler=",
        views:{
            "content@root.projectProcessed.personalTask":{
                templateUrl : "root/projectProcessed/personalTask/list/_res/html/index.html",
                controller:'taskListCtrl'
            }
        }
    }).state("root.projectProcessed.personalTask.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectProcessed.personalTask":{
                templateUrl : "root/projectProcessed/personalTask/add/_res/html/index.html",
                controller:'taskAddCtrl'
            }
        }
    }).state("root.projectProcessed.personalTask.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectProcessed.personalTask":{
                templateUrl : "root/projectProcessed/personalTask/edit/_res/html/index.html",
                controller:'taskEditCtrl'
            }
        }
    }).state("root.projectProcessed.personalTask.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.projectProcessed.personalTask":{
                templateUrl : "root/projectProcessed/personalTask/export/_res/html/index.html",
                controller:'taskExportCtrl'
            }
        }
    }).state("root.projectProcessed.personalTask.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.projectProcessed.personalTask":{
                templateUrl : "root/projectProcessed/personalTask/upload/_res/html/index.html",
                controller:'taskUploadCtrl'
            }
        }
    }).state("root.projectProcessed.personalTask.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.projectProcessed.personalTask":{
                templateUrl : "root/projectProcessed/personalTask/view/_res/html/index.html",
                controller:'taskViewCtrl'
            }
        }
    })
});