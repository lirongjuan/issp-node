var app = angular.module('wait', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.card.wait", {
        url : "/wait",
        views : {
            "content@root.card" : {
                templateUrl : "root/card/wait/_res/html/index.html",
                controller:"waitCtrl"
            },"menu@root.card" : {
                templateUrl : "root/card/wait/_res/html/menu.html",
                controller:"waitMenuCtrl"
            }
        }
    }).state("root.card.wait.pay[12]",{
        url:"/pay[12]?id=&page=",
        views:{
            "content@root.card.wait":{
                templateUrl : "root/card/wait/pay/_res/html/index.html",
                controller:'payAddCtrl'
            }
        }
    }).state("root.card.wait.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.card.wait":{
                templateUrl : "root/card/wait/list/_res/html/index.html",
                controller:'waitListCtrl'
            }
        }
    })
});