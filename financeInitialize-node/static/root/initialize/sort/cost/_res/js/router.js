var app = angular.module('cost', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.sort.cost", {
        url : "/cost",
        views : {  
            "content@root.initialize.sort" : {
                templateUrl : "root/initialize/sort/cost/_res/html/index.html",
                controller:"costCtrl"
            },"menu@root.initialize.sort" : {
                templateUrl : "root/initialize/sort/cost/_res/html/menu.html",
                controller:"costMenuCtrl"
            }
        }
    }).state("root.initialize.sort.cost.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.initialize.sort.cost":{
                templateUrl : "root/initialize/sort/cost/list/_res/html/index.html",
                controller:'costListCtrl'
            }
        }
    }).state("root.initialize.sort.cost.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.initialize.sort.cost":{
                templateUrl : "root/initialize/sort/cost/add/_res/html/index.html",
                controller:'costAddCtrl'
            }
        }
    }).state("root.initialize.sort.cost.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.initialize.sort.cost":{
                templateUrl : "root/initialize/sort/cost/edit/_res/html/index.html",
                controller:'costEditCtrl'
            }
        }
    })
});