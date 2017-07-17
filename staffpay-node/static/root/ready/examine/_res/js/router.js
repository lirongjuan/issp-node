var app = angular.module('examine', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ready.examine", {
        url : "/examine",
        views : {
            "content@root.ready" : {
                templateUrl : "root/ready/examine/_res/html/index.html",
                controller:"examineCtrl"
            },"menu@root.ready" : {
                templateUrl : "root/ready/examine/_res/html/menu.html",
                controller:"examineMenuCtrl"
            }
        }
    }).state("root.ready.examine.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.ready.examine":{
                templateUrl : "root/ready/examine/list/_res/html/index.html",
                controller:'examineListCtrl'
            }
        }
    }).state("root.ready.examine.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.ready.examine":{
                templateUrl : "root/ready/examine/add/_res/html/index.html",
                controller:'examineAddCtrl'
            }
        }
    }).state("root.ready.examine.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.ready.examine":{
                templateUrl : "root/ready/examine/edit/_res/html/index.html",
                controller:'examineEditCtrl'
            }
        }
    }).state("root.ready.examine.collect[12]",{
        url:"/collect[12]?id=&page=",
        views:{
            "content@root.ready.examine":{
                templateUrl : "root/ready/examine/collect/_res/html/index.html",
                controller:'examineCollectCtrl'
            }
        }
    })
});