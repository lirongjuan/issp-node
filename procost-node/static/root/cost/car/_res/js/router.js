var app = angular.module('car', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.cost.car", {
        url : "/car",
        views : {
            "content@root.cost" : {
                templateUrl : "root/cost/car/_res/html/index.html",
                controller:"carCtrl"
            },"menu@root.cost" : {
                templateUrl : "root/cost/car/_res/html/menu.html",
                controller:"carMenuCtrl"
            }
        }
    }).state("root.cost.car.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.cost.car":{
                templateUrl : "root/cost/car/add/_res/html/index.html",
                controller:'carAddCtrl'
            }
        }
    }).state("root.cost.car.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.cost.car":{
                templateUrl : "root/cost/car/edit/_res/html/index.html",
                controller:'carEditCtrl'
            }
        }
    }).state("root.cost.car.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.cost.car":{
                templateUrl : "root/cost/car/list/_res/html/index.html",
                controller:'carListCtrl'
            }
        }
    }).state("root.cost.car.actual[12]",{
        url:"/actual[12]?id=&page=",
        views:{
            "content@root.cost.car":{
                templateUrl : "root/cost/car/actual/_res/html/index.html",
                controller:'carActualCtrl'
            }
        }
    })
});