var app = angular.module('detailed', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.detailed", {
        url : "/detailed",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/detailed/_res/html/index.html",
                controller:"detailedCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/detailed/_res/html/menu.html",
                controller:"detailedMenuCtrl"
            }
        }
    }).state("root.file.detailed.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.detailed":{
                templateUrl : "root/file/detailed/list/_res/html/index.html",
                controller:'detailedListCtrl'
            }
        }
    }).state("root.file.detailed.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.detailed":{
                templateUrl : "root/file/detailed/add/_res/html/index.html",
                controller:'detailedAddCtrl'
            }
        }
    }).state("root.file.detailed.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.detailed":{
                templateUrl : "root/file/detailed/edit/_res/html/index.html",
                controller:'detailedEditCtrl'
            }
        }
    }).state("root.file.detailed.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.file.detailed":{
                templateUrl : "root/file/detailed/upload/_res/html/index.html",
                controller:'detailedUploadCtrl'
            }
        }
    }).state("root.file.detailed.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.file.detailed":{
                templateUrl : "root/file/detailed/view/_res/html/index.html",
                controller:'detailedViewCtrl'
            }
        }
    })
});