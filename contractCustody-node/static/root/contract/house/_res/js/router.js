var app = angular.module('house', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.contract.house", {
        url : "/house",
        views : {
            "content@root.contract" : {
                templateUrl : "root/contract/house/_res/html/index.html",
                controller:"houseCtrl"
            },"menu@root.contract" : {
                templateUrl : "root/contract/house/_res/html/menu.html",
                controller:"houseMenuCtrl"
            }
        }
    }).state("root.contract.house.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.contract.house":{
                templateUrl : "root/contract/house/list/_res/html/index.html",
                controller:'houseListCtrl'
            }
        }
    }).state("root.contract.house.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.contract.house":{
                templateUrl : "root/contract/house/add/_res/html/index.html",
                controller:'houseAddCtrl'
            }
        }
    }).state("root.contract.house.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.contract.house":{
                templateUrl : "root/contract/house/edit/_res/html/index.html",
                controller:'houseEditCtrl'
            }
        }
    }).state("root.contract.house.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.contract.house":{
                templateUrl : "root/contract/house/upload/_res/html/index.html",
                controller:'houseUploadCtrl'
            }
        }
    }).state("root.contract.house.view[12]",{
        url:"/view[12]?id=&page=",
        views:{
            "content@root.contract.house":{
                templateUrl : "root/contract/house/view/_res/html/index.html",
                controller:'houseViewCtrl'
            }
        }
    })
});