var app = angular.module('annex', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.annex", {
        url : "/annex",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/annex/_res/html/index.html",
                controller:"annexCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/annex/_res/html/menu.html",
                controller:"annexMenuCtrl"
            }
        }
    }).state("root.file.annex.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.annex":{
                templateUrl : "root/file/annex/list/_res/html/index.html",
                controller:'annexListCtrl'
            }
        }
    }).state("root.file.annex.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.annex":{
                templateUrl : "root/file/annex/add/_res/html/index.html",
                controller:'annexAddCtrl'
            }
        }
    }).state("root.file.annex.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.annex":{
                templateUrl : "root/file/annex/edit/_res/html/index.html",
                controller:'annexEditCtrl'
            }
        }
    })
});