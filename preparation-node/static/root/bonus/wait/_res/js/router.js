var app = angular.module('wait', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.bonus.wait", {
        url : "/wait",
        views : {
            "content@root.bonus" : {
                templateUrl : "root/bonus/wait/_res/html/index.html",
                controller:"waitCtrl"
            },"menu@root.bonus" : {
                templateUrl : "root/bonus/wait/_res/html/menu.html",
                controller:"waitMenuCtrl"
            }
        }
    }).state("root.bonus.wait.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.bonus.wait":{
                templateUrl : "root/bonus/wait/list/_res/html/index.html",
                controller:'waitListCtrl'
            }
        }
    }).state("root.bonus.wait.pay[12]",{
        url:"/pay[12]?id=&page=",
        views:{
            "content@root.bonus.wait":{
                templateUrl : "root/bonus/wait/pay/_res/html/index.html",
                controller:'waitEditCtrl'
            }
        }
    }).state("root.bonus.wait.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.bonus.wait":{
                templateUrl : "root/bonus/wait/export/_res/html/index.html",
                controller:'waitExportCtrl'
            }
        }
    })
});