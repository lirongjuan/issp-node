var app = angular.module('problemAccepted', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectProcessed.problemAccepted", {
        url : "/problemAccepted",
        views : {
            "content@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/problemAccepted/_res/html/index.html",
                controller:"problemCtrl"
            },"menu@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/problemAccepted/_res/html/menu.html",
                controller:"problemMenuCtrl"
            }
        }
    }).state("root.projectProcessed.problemAccepted.list[12]",{
        url:"/list[12]?id=&name=&page=&internalProjectName=&projectType=",
        views:{
            "content@root.projectProcessed.problemAccepted":{
                templateUrl : "root/projectProcessed/problemAccepted/list/_res/html/index.html",
                controller:'problemListCtrl'
            }
        }
    }).state("root.projectProcessed.problemAccepted.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectProcessed.problemAccepted":{
                templateUrl : "root/projectProcessed/problemAccepted/add/_res/html/index.html",
                controller:'problemAddCtrl'
            }
        }
    }).state("root.projectProcessed.problemAccepted.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectProcessed.problemAccepted":{
                templateUrl : "root/projectProcessed/problemAccepted/edit/_res/html/index.html",
                controller:'problemEditCtrl'
            }
        }
    }).state("root.projectProcessed.problemAccepted.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.projectProcessed.problemAccepted":{
                templateUrl : "root/projectProcessed/problemAccepted/export/_res/html/index.html",
                controller:'problemExportCtrl'
            }
        }
    }).state("root.projectProcessed.problemAccepted.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.projectProcessed.problemAccepted":{
                templateUrl : "root/projectProcessed/problemAccepted/upload/_res/html/index.html",
                controller:'problemUploadCtrl'
            }
        }
    }).state("root.projectProcessed.problemAccepted.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.projectProcessed.problemAccepted":{
                templateUrl : "root/projectProcessed/problemAccepted/view/_res/html/index.html",
                controller:'problemViewCtrl'
            }
        }
    })
});