var app = angular.module('archives', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.archives", {
        url : "/archives",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/archives/_res/html/index.html",
                controller:"archivesCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/archives/_res/html/menu.html",
                controller:"archivesMenuCtrl"
            }
        }
    }).state("root.file.archives.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.archives":{
                templateUrl : "root/file/archives/list/_res/html/index.html",
                controller:'archivesListCtrl'
            }
        }
    }).state("root.file.archives.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.archives":{
                templateUrl : "root/file/archives/add/_res/html/index.html",
                controller:'archivesAddCtrl'
            }
        }
    }).state("root.file.archives.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.archives":{
                templateUrl : "root/file/archives/edit/_res/html/index.html",
                controller:'archivesEditCtrl'
            }
        }
    }).state("root.file.archives.review[12]",{
        url:"/review[12]?id=&page=",
        views:{
            "content@root.file.archives":{
                templateUrl : "root/file/archives/review/_res/html/index.html",
                controller:'archivesReviewCtrl'
            }
        }
    })
});