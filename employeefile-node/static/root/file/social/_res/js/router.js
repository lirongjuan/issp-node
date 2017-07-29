var app = angular.module('social', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.social", {
        url : "/social",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/social/_res/html/index.html",
                controller:"socialCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/social/_res/html/menu.html",
                controller:"socialMenuCtrl"
            }
        }
    }).state("root.file.social.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.social":{
                templateUrl : "root/file/social/list/_res/html/index.html",
                controller:'socialListCtrl'
            }
        }
    }).state("root.file.social.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.social":{
                templateUrl : "root/file/social/add/_res/html/index.html",
                controller:'socialAddCtrl'
            }
        }
    }).state("root.file.social.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.social":{
                templateUrl : "root/file/social/edit/_res/html/index.html",
                controller:'socialEditCtrl'
            }
        }
    })
});