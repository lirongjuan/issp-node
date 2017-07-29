var app = angular.module('demandProject', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.materialBuy.materialDemand", {
        url : "/materialDemand",
        views : {
            "content@root.materialBuy" : {
                templateUrl : "root/materialBuy/materialDemand/_res/html/index.html",
                controller:"demandCtrl"
            },"menu@root.materialBuy" : {
                templateUrl : "root/materialBuy/materialDemand/_res/html/menu.html",
                controller:"demandMenuCtrl"
            }
        }
    }).state("root.materialBuy.materialDemand.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.materialBuy.materialDemand":{
                templateUrl : "root/materialBuy/materialDemand/list/_res/html/index.html",
                controller:'demandListCtrl'
            }
        }
    }).state("root.materialBuy.materialDemand.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.materialBuy.materialDemand":{
                templateUrl : "root/materialBuy/materialDemand/add/_res/html/index.html",
                controller:'demandAddCtrl'
            }
        }
    }).state("root.materialBuy.materialDemand.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.materialBuy.materialDemand":{
                templateUrl : "root/materialBuy/materialDemand/edit/_res/html/index.html",
                controller:'demandEditCtrl'
            }
        }
    }).state("root.materialBuy.materialDemand.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.materialBuy.materialDemand":{
                templateUrl : "root/materialBuy/materialDemand/audit/_res/html/index.html",
                controller:'demAuditCtrl'
            }
        }
    }).state("root.materialBuy.materialDemand.view[12]",{
        url:"/view[12]?id=&page=",
        views:{
            "content@root.materialBuy.materialDemand":{
                templateUrl : "root/materialBuy/materialDemand/view/_res/html/index.html",
                controller:'demandViewCtrl'
            }
        }
    })
});