var app = angular.module('basic', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.basic", {
        url : "/basic",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/basic/_res/html/index.html",
                controller:"basicCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/basic/_res/html/menu.html",
                controller:"basicMenuCtrl"
            }
        }
    }).state("root.file.basic.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.basic":{
                templateUrl : "root/file/basic/list/_res/html/index.html",
                controller:'basicListCtrl'
            }
        }
    }).state("root.file.basic.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.basic":{
                templateUrl : "root/file/basic/add/_res/html/index.html",
                controller:'basicAddCtrl'
            }
        }
    }).state("root.file.basic.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.basic":{
                templateUrl : "root/file/basic/edit/_res/html/index.html",
                controller:'basicEditCtrl'
            }
        }
    })
});