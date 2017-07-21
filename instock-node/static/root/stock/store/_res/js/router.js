var app = angular.module('store', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.stock.store", {
        url : "/store",
        views : {
            "content@root.stock" : {
                templateUrl : "root/stock/store/_res/html/index.html",
                controller:"storeCtrl"
            },"menu@root.stock" : {
                templateUrl : "root/stock/store/_res/html/menu.html",
                controller:"storeMenuCtrl"
            }
        }
    }).state("root.stock.store.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.stock.store":{
                templateUrl : "root/stock/store/list/_res/html/index.html",
                controller:'storeListCtrl'
            }
        }
    }).state("root.stock.store.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.stock.store":{
                templateUrl : "root/stock/store/add/_res/html/index.html",
                controller:'storeAddCtrl'
            }
        }
    }).state("root.stock.store.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.stock.store":{
                templateUrl : "root/stock/store/edit/_res/html/index.html",
                controller:'storeEditCtrl'
            }
        }
    }).state("root.stock.store.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.stock.store":{
                templateUrl : "root/stock/store/upload/_res/html/index.html",
                controller:'storeUploadCtrl'
            }
        }
    }).state("root.stock.store.view[12]",{
        url:"/view[12]?id=&page=",
        views:{
            "content@root.stock.store":{
                templateUrl : "root/stock/store/view/_res/html/index.html",
                controller:'storeViewCtrl'
            }
        }
    }).state("root.stock.store.detail[12]",{
        url:"/detail[12]?id=&page=",
        views:{
            "content@root.stock.store":{
                templateUrl : "root/stock/store/detail/_res/html/index.html",
                controller:'storedetailCtrl'
            }
        }
    })
});