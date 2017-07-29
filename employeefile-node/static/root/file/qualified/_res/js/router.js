var app = angular.module('qualified', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.qualified", {
        url : "/qualified",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/qualified/_res/html/index.html",
                controller:"qualifiedCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/qualified/_res/html/menu.html",
                controller:"qualifiedMenuCtrl"
            }
        }
    }).state("root.file.qualified.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.qualified":{
                templateUrl : "root/file/qualified/list/_res/html/index.html",
                controller:'qualifiedListCtrl'
            }
        }
    }).state("root.file.qualified.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.qualified":{
                templateUrl : "root/file/qualified/add/_res/html/index.html",
                controller:'qualifiedAddCtrl'
            }
        }
    }).state("root.file.qualified.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.qualified":{
                templateUrl : "root/file/qualified/edit/_res/html/index.html",
                controller:'qualifiedEditCtrl'
            }
        }
    }).state("root.file.qualified.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.file.qualified":{
                templateUrl : "root/file/qualified/upload/_res/html/index.html",
                controller:'qualifiedUploadCtrl'
            }
        }
    }).state("root.file.qualified.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.file.qualified":{
                templateUrl : "root/file/qualified/view/_res/html/index.html",
                controller:'qualifiedViewCtrl'
            }
        }
    })
});