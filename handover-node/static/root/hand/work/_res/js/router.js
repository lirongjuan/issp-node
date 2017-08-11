var app = angular.module('work', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.hand.work", {
        url : "/work",
        views : {
            "content@root.hand" : {
                templateUrl : "root/hand/work/_res/html/index.html",
                controller:"workCtrl"
            },"menu@root.hand" : {
                templateUrl : "root/hand/work/_res/html/menu.html",
                controller:"workMenuCtrl"
            }
        }
    }).state("root.hand.work.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.hand.work":{
                templateUrl : "root/hand/work/list/_res/html/index.html",
                controller:'workListCtrl'
            }
        }
    }).state("root.hand.work.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.hand.work":{
                templateUrl : "root/hand/work/add/_res/html/index.html",
                controller:'workAddCtrl'
            }
        }
    }).state("root.hand.work.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.hand.work":{
                templateUrl : "root/hand/work/edit/_res/html/index.html",
                controller:'workEditCtrl'
            }
        }
    }).state("root.hand.work.aduit[12]", {
        url : "/aduit[12]?id=&page=",
        views : {
            "content@root.hand.work" : {
                templateUrl : "root/hand/work/aduit/_res/html/index.html",
                controller : 'workAduitCtrl'
            }
        }
    })
});