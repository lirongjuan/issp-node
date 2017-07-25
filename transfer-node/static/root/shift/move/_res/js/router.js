var app = angular.module('move', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.shift.move", {
        url : "/move",
        views : {
            "content@root.shift" : {
                templateUrl : "root/shift/move/_res/html/index.html",
                controller:"moveCtrl"
            },"menu@root.shift" : {
                templateUrl : "root/shift/move/_res/html/menu.html",
                controller:"moveMenuCtrl"
            }
        }
    }).state("root.shift.move.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.shift.move":{
                templateUrl : "root/shift/move/list/_res/html/index.html",
                controller:'moveListCtrl'
            }
        }
    }).state("root.shift.move.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.shift.move":{
                templateUrl : "root/shift/move/add/_res/html/index.html",
                controller:'moveAddCtrl'
            }
        }
    }).state("root.shift.move.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.shift.move":{
                templateUrl : "root/shift/move/edit/_res/html/index.html",
                controller:'moveEditCtrl'
            }
        }
    }).state("root.shift.move.confirm[12]",{
        url:"/confirm[12]?id=&page=",
        views:{
            "content@root.shift.move":{
                templateUrl : "root/shift/move/confirm/_res/html/index.html",
                controller:'moveConfirmCtrl'
            }
        }
    }).state("root.shift.move.verify[12]",{
        url:"/verify[12]?id=&page=",
        views:{
        "content@root.shift.move":{
            templateUrl : "root/shift/move/verify/_res/html/index.html",
                controller:'moveVerifyCtrl'
        }
    }
    }).state("root.shift.move.aduit[12]", {
        url : "/aduit[12]?id=&page=",
        views : {
            "content@root.shift.move" : {
                templateUrl : "root/shift/move/aduit/_res/html/index.html",
                controller : 'moveAduitCtrl'
            }
        }
    })
});