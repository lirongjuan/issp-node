var app = angular.module('ready', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.bonus.ready", {
        url : "/ready",
        views : {
            "content@root.bonus" : {
                templateUrl : "root/bonus/ready/_res/html/index.html",
                controller:"readyCtrl"
            },"menu@root.bonus" : {
                templateUrl : "root/bonus/ready/_res/html/menu.html",
                controller:"readyMenuCtrl"
            }
        }
    }).state("root.bonus.ready.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.bonus.ready":{
                templateUrl : "root/bonus/ready/add/_res/html/index.html",
                controller:'readyAddCtrl'
            }
        }
    }).state("root.bonus.ready.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.bonus.ready":{
                templateUrl : "root/bonus/ready/edit/_res/html/index.html",
                controller:'readyEditCtrl'
            }
        }
    }).state("root.bonus.ready.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.bonus.ready":{
                templateUrl : "root/bonus/ready/list/_res/html/index.html",
                controller:'readyListCtrl'
            }
        }
    }).state("root.bonus.ready.month[12]",{
        url:"/month[12]",
        views:{
            "content@root.bonus.ready":{
                templateUrl : "root/bonus/ready/month/_res/html/index.html",
                controller:'readyMonthCtrl'
            }
        }
    }).state("root.bonus.ready.year[12]",{
        url:"/year[12]",
        views:{
            "content@root.bonus.ready":{
                templateUrl : "root/bonus/ready/year/_res/html/index.html",
                controller:'readyYearCtrl'
            }
        }
    }).state("root.bonus.ready.contrast[12]",{
        url:"/contrast[12]",
        views:{
            "content@root.bonus.ready":{
                templateUrl : "root/bonus/ready/contrast/_res/html/index.html",
                controller:'readyContrastCtrl'
            }
        }
    }).state("root.bonus.ready.project[12]",{
        url:"/project[12]",
        views:{
            "content@root.bonus.ready":{
                templateUrl : "root/bonus/ready/project/_res/html/index.html",
                controller:'readyProjectCtrl'
            }
        }
    })
});