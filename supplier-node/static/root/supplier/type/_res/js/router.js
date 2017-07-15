var app = angular.module('type', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.supplier.type", {
        url : "/type",
        views : {
            "content@root.supplier" : {
                templateUrl : "root/supplier/type/_res/html/index.html",
                controller:"typeCtrl"
            },"menu@root.supplier" : {
                templateUrl : "root/supplier/type/_res/html/menu.html",
                controller:"typeMenuCtrl"
            }
        }
    }).state("root.supplier.type.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.supplier.type":{
                templateUrl : "root/supplier/type/list/_res/html/index.html",
                controller:'typeListCtrl'
            }
        }
    }).state("root.supplier.type.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.supplier.type":{
                templateUrl : "root/supplier/type/add/_res/html/index.html",
                controller:'typeAddCtrl'
            }
        }
    }).state("root.supplier.type.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.supplier.type":{
                templateUrl : "root/supplier/type/edit/_res/html/index.html",
                controller:'typeEditCtrl'
            }
        }
    })
});