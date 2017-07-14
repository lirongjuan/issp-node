var app = angular.module('registered', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.Industrial.registered", {
        url : "/registered",
        views : {
            "content@root.Industrial" : {
                templateUrl : "root/Industrial/registered/_res/html/index.html",
                controller:"registeredCtrl"
            },"menu@root.Industrial" : {
                templateUrl : "root/Industrial/registered/_res/html/menu.html",
                controller:"registeredMenuCtrl"
            }
        }
    }).state("root.Industrial.registered.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.Industrial.registered":{
                templateUrl : "root/Industrial/registered/list/_res/html/index.html",
                controller:'registeredListCtrl'
            }
        }
    }).state("root.Industrial.registered.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.Industrial.registered":{
                templateUrl : "root/Industrial/registered/add/_res/html/index.html",
                controller:'registeredAddCtrl'
            }
        }
    }).state("root.Industrial.registered.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.Industrial.registered":{
                templateUrl : "root/Industrial/registered/edit/_res/html/index.html",
                controller:'registeredEditCtrl'
            }
        }
    }).state("root.Industrial.registered.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.Industrial.registered":{
                templateUrl : "root/Industrial/registered/upload/_res/html/index.html",
                controller:'registeredUploadCtrl'
            }
        }
    }).state("root.Industrial.registered.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.Industrial.registered":{
                templateUrl : "root/Industrial/registered/view/_res/html/index.html",
                controller:'registeredViewCtrl'
            }
        }
     })
});