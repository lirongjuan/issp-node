var app = angular.module('work', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.leave.work", {
        url : "/work",
        views : {
            "content@root.leave" : {
                templateUrl : "root/leave/work/_res/html/index.html",
                controller:"workCtrl"
            },"menu@root.leave" : {
                templateUrl : "root/leave/work/_res/html/menu.html",
                controller:"workMenuCtrl"
            }
        }
    }).state("root.leave.work.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.leave.work":{
                templateUrl : "root/leave/work/list/_res/html/index.html",
                controller:'workListCtrl'
            }
        }
    }).state("root.leave.work.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.leave.work":{
                templateUrl : "root/leave/work/add/_res/html/index.html",
                controller:'workAddCtrl'
            }
        }
    }).state("root.leave.work.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.leave.work":{
                templateUrl : "root/leave/work/edit/_res/html/index.html",
                controller:'workEditCtrl'
            }
        }
    }).state("root.leave.work.people[12]",{
        url:"/people[12]?id=&page=",
        views:{
            "content@root.leave.work":{
                templateUrl : "root/leave/work/people/_res/html/index.html",
                controller:'workPeopleCtrl'
            }
        }
    }).state("root.leave.work.head[12]",{
        url:"/head[12]?id=&page=",
        views:{
            "content@root.leave.work":{
                templateUrl : "root/leave/work/head/_res/html/index.html",
                controller:'workHeadCtrl'
            }
        }
    }).state("root.leave.work.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.leave.work":{
                templateUrl : "root/leave/work/upload/_res/html/index.html",
                controller:'workUploadCtrl'
            }
        }
    }).state("root.leave.work.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.leave.work":{
                templateUrl : "root/leave/work/view/_res/html/index.html",
                controller:'workViewCtrl'
            }
        }
    })
});