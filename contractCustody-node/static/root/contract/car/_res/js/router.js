var app = angular.module('car', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.contract.car", {
        url : "/car",
        views : {
            "content@root.contract" : {
                templateUrl : "root/contract/car/_res/html/index.html",
                controller:"carCtrl"
            },"menu@root.contract" : {
                templateUrl : "root/contract/car/_res/html/menu.html",
                controller:"carMenuCtrl"
            }
        }
    }).state("root.contract.car.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.contract.car":{
                templateUrl : "root/contract/car/list/_res/html/index.html",
                controller:'carListCtrl'
            }
        }
    }).state("root.contract.car.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.contract.car":{
                templateUrl : "root/contract/car/add/_res/html/index.html",
                controller:'carAddCtrl'
            }
        }
    }).state("root.contract.car.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.contract.car":{
                templateUrl : "root/contract/car/edit/_res/html/index.html",
                controller:'carEditCtrl'
            }
        }
    }).state("root.contract.car.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.contract.car":{
                templateUrl : "root/contract/car/upload/_res/html/index.html",
                controller:'carUploadCtrl'
            }
        }
    }).state("root.contract.car.view[12]",{
        url:"/view[12]?id=&page=",
        views:{
            "content@root.contract.car":{
                templateUrl : "root/contract/car/view/_res/html/index.html",
                controller:'carViewCtrl'
            }
        }
    })
});