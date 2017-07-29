var app = angular.module('wait', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.out.wait", {
        url : "/wait",
        views : {
            "content@root.out" : {
                templateUrl : "root/out/wait/_res/html/index.html",
                controller:"waitCtrl"
            },"menu@root.out" : {
                templateUrl : "root/out/wait/_res/html/menu.html",
                controller:"waitMenuCtrl"
            }
        }
    }).state("root.out.wait.pay[12]",{
        url:"/pay[12]?id=&page=",
        views:{
            "content@root.out.wait":{
                templateUrl : "root/out/wait/pay/_res/html/index.html",
                controller:'payAddCtrl'
            }
        }
    }).state("root.out.wait.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.out.wait":{
                templateUrl : "root/out/wait/list/_res/html/index.html",
                controller:'waitListCtrl'
            }
        }
    })
});