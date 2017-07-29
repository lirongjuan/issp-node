var app = angular.module('control', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.cost.control", {
        url : "/control",
        views : {
            "content@root.cost" : {
                templateUrl : "root/cost/control/_res/html/index.html",
                controller:"controlCtrl"
            },"menu@root.cost" : {
                templateUrl : "root/cost/control/_res/html/menu.html",
                controller:"controlMenuCtrl"
            }
        }
    }).state("root.cost.control.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.cost.control":{
                templateUrl : "root/cost/control/add/_res/html/index.html",
                controller:'controlAddCtrl'
            }
        }
    }).state("root.cost.control.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.cost.control":{
                templateUrl : "root/cost/control/edit/_res/html/index.html",
                controller:'controlEditCtrl'
            }
        }
    }).state("root.cost.control.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.cost.control":{
                templateUrl : "root/cost/control/list/_res/html/index.html",
                controller:'controlListCtrl'
            }
        }
    }).state("root.cost.control.actual[12]",{
        url:"/actual[12]?id=&page=",
        views:{
            "content@root.cost.control":{
                templateUrl : "root/cost/control/actual/_res/html/index.html",
                controller:'controlActualCtrl'
            }
        }
    }).state("root.cost.control.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.cost.control":{
                templateUrl : "root/cost/control/summary/_res/html/index.html",
                controller:'controlSummaryCtrl'
            }
        }
    })
});