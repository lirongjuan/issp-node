var app = angular.module('wait', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.money.wait", {
        url : "/wait",
        views : {
            "content@root.money" : {
                templateUrl : "root/money/wait/_res/html/index.html",
                controller:"waitCtrl"
            },"menu@root.money" : {
                templateUrl : "root/money/wait/_res/html/menu.html",
                controller:"waitMenuCtrl"
            }
        }
    }).state("root.money.wait.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.money.wait":{
                templateUrl : "root/money/wait/list/_res/html/index.html",
                controller:'waitListCtrl'
            }
        }
    }).state("root.money.wait.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.money.wait":{
                templateUrl : "root/money/wait/add/_res/html/index.html",
                controller:'waitAddCtrl'
            }
        }
    }).state("root.money.wait.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.money.wait":{
                templateUrl : "root/money/wait/edit/_res/html/index.html",
                controller:'waitEditCtrl'
            }
        }
    })
});