var app = angular.module('collect', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.collect", {
        url : "/collect",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/collect/_res/html/index.html",
                controller:"collectCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/collect/_res/html/menu.html",
                controller:"collectMenuCtrl"
            }
        }
    }).state("root.file.collect.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.collect":{
                templateUrl : "root/file/collect/list/_res/html/index.html",
                controller:'collectListCtrl'
            }
        }
    }).state("root.file.collect.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.collect":{
                templateUrl : "root/file/collect/add/_res/html/index.html",
                controller:'collectAddCtrl'
            }
        }
    }).state("root.file.collect.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.collect":{
                templateUrl : "root/file/collect/edit/_res/html/index.html",
                controller:'collectEditCtrl'
            }
        }
    }).state("root.file.collect.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.file.collect":{
                templateUrl : "root/file/collect/upload/_res/html/index.html",
                controller:'collectUploadCtrl'
            }
        }
    }).state("root.file.collect.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.file.collect":{
                templateUrl : "root/file/collect/view/_res/html/index.html",
                controller:'collectViewCtrl'
            }
        }
    })
});