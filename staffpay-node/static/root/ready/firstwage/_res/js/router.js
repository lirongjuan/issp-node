var app = angular.module('firstwage', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ready.firstwage", {
        url : "/firstwage",
        views : {
            "content@root.ready" : {
                templateUrl : "root/ready/firstwage/_res/html/index.html",
                controller:"firstwageCtrl"
            },"menu@root.ready" : {
                templateUrl : "root/ready/firstwage/_res/html/menu.html",
                controller:"firstwageMenuCtrl"
            }
        }
    }).state("root.ready.firstwage.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.ready.firstwage":{
                templateUrl : "root/ready/firstwage/list/_res/html/index.html",
                controller:'firstwageListCtrl'
            }
        }
    })
});