var app = angular.module('artificial', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.cost.artificial", {
        url : "/artificial",
        views : {
            "content@root.cost" : {
                templateUrl : "root/cost/artificial/_res/html/index.html",
                controller:"artificialCtrl"
            },"menu@root.cost" : {
                templateUrl : "root/cost/artificial/_res/html/menu.html",
                controller:"artificialMenuCtrl"
            }
        }
    }).state("root.cost.artificial.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.cost.artificial":{
                templateUrl : "root/cost/artificial/add/_res/html/index.html",
                controller:'artificialAddCtrl'
            }
        }
    }).state("root.cost.artificial.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.cost.artificial":{
                templateUrl : "root/cost/artificial/edit/_res/html/index.html",
                controller:'artificialEditCtrl'
            }
        }
    }).state("root.cost.artificial.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.cost.artificial":{
                templateUrl : "root/cost/artificial/list/_res/html/index.html",
                controller:'artificialListCtrl'
            }
        }
    }).state("root.cost.artificial.actual[12]",{
        url:"/actual[12]?id=&page=",
        views:{
            "content@root.cost.artificial":{
                templateUrl : "root/cost/artificial/actual/_res/html/index.html",
                controller:'artActualCtrl'
            }
        }
    })
});