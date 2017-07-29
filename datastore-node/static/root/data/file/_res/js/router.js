var app = angular.module('file', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.data.file", {
        url : "/file",
        views : {
            "content@root.data" : {
                templateUrl : "root/data/file/_res/html/index.html",
                controller:"fileCtrl"
            },"menu@root.data" : {
                templateUrl : "root/data/file/_res/html/menu.html",
                controller:"fileMenuCtrl"
            }
        }
    }).state("root.data.file.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.data.file":{
                templateUrl : "root/data/file/add/_res/html/index.html",
                controller:'fileAddCtrl'
            }
        }
    }).state("root.data.file.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.data.file":{
                templateUrl : "root/data/file/edit/_res/html/index.html",
                controller:'fileEditCtrl'
            }
        }
    }).state("root.data.file.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.data.file":{
                templateUrl : "root/data/file/list/_res/html/index.html",
                controller:'fileListCtrl'
            }
        }
    }).state("root.data.file.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.data.file":{
                templateUrl : "root/data/file/upload/_res/html/index.html",
                controller:'fileUploadCtrl'
            }
        }
    }).state("root.data.file.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.data.file":{
                templateUrl : "root/data/file/view/_res/html/index.html",
                controller:'fileViewCtrl'
            }
        }
    })
});