var app = angular.module('deviceType', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.materialBuy.deviceType", {
        url : "/deviceType",
        views : {
            "content@root.materialBuy" : {
                templateUrl : "root/materialBuy/deviceType/_res/html/index.html",
                controller:"deviceCtrl"
            },"menu@root.materialBuy" : {
                templateUrl : "root/materialBuy/deviceType/_res/html/menu.html",
                controller:"deviceMenuCtrl"
            }
        }
    }).state("root.materialBuy.deviceType.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.materialBuy.deviceType":{
                templateUrl : "root/materialBuy/deviceType/list/_res/html/index.html",
                controller:'deviceListCtrl'
            }
        }
    }).state("root.materialBuy.deviceType.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.materialBuy.deviceType":{
                templateUrl : "root/materialBuy/deviceType/add/_res/html/index.html",
                controller:'deviceAddCtrl'
            }
        }
    }).state("root.materialBuy.deviceType.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.materialBuy.deviceType":{
                templateUrl : "root/materialBuy/deviceType/edit/_res/html/index.html",
                controller:'deviceEditCtrl'
            }
        }
    })

});