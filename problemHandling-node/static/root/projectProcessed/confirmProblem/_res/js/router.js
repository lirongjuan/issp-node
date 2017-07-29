var app = angular.module('confirmProblem', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectProcessed.confirmProblem", {
        url : "/confirmProblem",
        views : {
            "content@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/confirmProblem/_res/html/index.html",
                controller:"confirmCtrl"
            },"menu@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/confirmProblem/_res/html/menu.html",
                controller:"confirmMenuCtrl"
            }
        }
    }).state("root.projectProcessed.confirmProblem.list[12]",{
        url:"/list[12]?id=&name=&page=&internalProjectName=&projectType=&problemObject=",
        views:{
            "content@root.projectProcessed.confirmProblem":{
                templateUrl : "root/projectProcessed/confirmProblem/list/_res/html/index.html",
                controller:'confirmListCtrl'
            }
        }
    }).state("root.projectProcessed.confirmProblem.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectProcessed.confirmProblem":{
                templateUrl : "root/projectProcessed/confirmProblem/add/_res/html/index.html",
                controller:'confirmAddCtrl'
            }
        }
    }).state("root.projectProcessed.confirmProblem.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectProcessed.confirmProblem":{
                templateUrl : "root/projectProcessed/confirmProblem/edit/_res/html/index.html",
                controller:'confirmEditCtrl'
            }
        }
    }).state("root.projectProcessed.confirmProblem.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.projectProcessed.confirmProblem":{
                templateUrl : "root/projectProcessed/confirmProblem/export/_res/html/index.html",
                controller:'confirmExportCtrl'
            }
        }
    }).state("root.projectProcessed.confirmProblem.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.projectProcessed.confirmProblem":{
                templateUrl : "root/projectProcessed/confirmProblem/upload/_res/html/index.html",
                controller:'confirmUploadCtrl'
            }
        }
    }).state("root.projectProcessed.confirmProblem.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.projectProcessed.confirmProblem":{
                templateUrl : "root/projectProcessed/confirmProblem/view/_res/html/index.html",
                controller:'confirmViewCtrl'
            }
        }
    })
});