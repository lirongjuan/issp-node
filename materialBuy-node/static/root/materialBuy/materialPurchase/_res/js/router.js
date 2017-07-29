var app = angular.module('materialR', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.materialBuy.materialPurchase", {
        url : "/materialPurchase",
        views : {
            "content@root.materialBuy" : {
                templateUrl : "root/materialBuy/materialPurchase/_res/html/index.html",
                controller:"purchaseCtrl"
            },"menu@root.materialBuy" : {
                templateUrl : "root/materialBuy/materialPurchase/_res/html/menu.html",
                controller:"purchaseMenuCtrl"
            }
        }
    }).state("root.materialBuy.materialPurchase.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.materialBuy.materialPurchase":{
                templateUrl : "root/materialBuy/materialPurchase/list/_res/html/index.html",
                controller:'materialListCtrl'
            }
        }
    }).state("root.materialBuy.materialPurchase.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.materialBuy.materialPurchase":{
                templateUrl : "root/materialBuy/materialPurchase/add/_res/html/index.html",
                controller:'purchaseAddCtrl'
            }
        }
    }).state("root.materialBuy.materialPurchase.amend[12]",{
        url:"/amend[12]?id=&page=",
        views:{
            "content@root.materialBuy.materialPurchase":{
                templateUrl : "root/materialBuy/materialPurchase/amend/_res/html/index.html",
                controller:'purchaseEditCtrl'
            }
        }
    }).state("root.materialBuy.materialPurchase.review[12]",{
        url:"/review[12]?id=&page=",
        views:{
            "content@root.materialBuy.materialPurchase":{
                templateUrl : "root/materialBuy/materialPurchase/review/_res/html/index.html",
                controller:'purchaseReviewCtrl'
            }
        }
    }).state("root.materialBuy.materialPurchase.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.materialBuy.materialPurchase":{
                templateUrl : "root/materialBuy/materialPurchase/upload/_res/html/index.html",
                controller:'purchaseUploadCtrl'
            }
        }
    }).state("root.materialBuy.materialPurchase.see[12]",{
        url:"/see[12]?id=&see=",
        views:{
            "content@root.materialBuy.materialPurchase":{
                templateUrl : "root/materialBuy/materialPurchase/see/_res/html/index.html",
                controller:'purchaseSeeCtrl'
            }
        }
    }).state("root.materialBuy.materialPurchase.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.materialBuy.materialPurchase":{
                templateUrl : "root/materialBuy/materialPurchase/view/_res/html/index.html",
                controller:'purchaseViewCtrl'
            }
        }
    })
});