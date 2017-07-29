var app = angular.module('resources', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.resources", {
        url : "/resources",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/resources/_res/html/index.html",
                controller:"resourcesCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/resources/_res/html/menu.html",
                controller:"resourcesMenuCtrl"
            }
        }
    }).state("root.file.resources.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.resources":{
                templateUrl : "root/file/resources/list/_res/html/index.html",
                controller:'resourcesListCtrl'
            }
        }
    }).state("root.file.resources.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.resources":{
                templateUrl : "root/file/resources/add/_res/html/index.html",
                controller:'resourcesAddCtrl'
            }
        }
    }).state("root.file.resources.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.resources":{
                templateUrl : "root/file/resources/edit/_res/html/index.html",
                controller:'resourcesEditCtrl'
            }
        }
    })
});