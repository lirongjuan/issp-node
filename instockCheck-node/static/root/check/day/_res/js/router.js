var app = angular.module('day', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.check.day", {
        url : "/day",
        views : {
            "content@root.check" : {
                templateUrl : "root/check/day/_res/html/index.html",
                controller:"dayCtrl"
            },"menu@root.check" : {
                templateUrl : "root/check/day/_res/html/menu.html",
                controller:"dayMenuCtrl"
            }
        }
    }).state("root.check.day.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.check.day":{
                templateUrl : "root/check/day/list/_res/html/index.html",
                controller:'dayListCtrl'
            }
        }
    }).state("root.check.day.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.check.day":{
                templateUrl : "root/check/day/add/_res/html/index.html",
                controller:'dayAddCtrl'
            }
        }
    }).state("root.check.day.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.check.day":{
                templateUrl : "root/check/day/edit/_res/html/index.html",
                controller:'dayEditCtrl'
            }
        }
    }).state("root.check.day.confirm[12]",{
        url:"/confirm[12]?id=&page=",
        views:{
            "content@root.check.day":{
                templateUrl : "root/check/day/confirm/_res/html/index.html",
                controller:'dayconfirmCtrl'
            }
        }
    }).state("root.check.day.verify[12]",{
        url:"/verify[12]?id=&page=",
        views:{
        "content@root.check.day":{
            templateUrl : "root/check/day/verify/_res/html/index.html",
                controller:'dayverifyCtrl'
        }
    }
    }).state("root.check.day.aduit[12]", {
        url : "/aduit[12]?id=&page=",
        views : {
            "content@root.check.day" : {
                templateUrl : "root/check/day/aduit/_res/html/index.html",
                controller : 'dayaduitCtrl'
            }
        }
    })
});