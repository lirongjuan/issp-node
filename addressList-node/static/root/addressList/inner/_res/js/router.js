var app = angular.module('inner', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.addressList.inner", {
        url : "/inner",
        views : {
            "content@root.addressList" : {
                templateUrl : "root/addressList/inner/_res/html/index.html",
                controller:"innerCtrl"
            },"menu@root.addressList" : {
                templateUrl : "root/addressList/inner/_res/html/menu.html",
                controller:"basicMenuCtrl"
            }
        }
    }).state("root.addressList.inner.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.addressList.inner":{
                templateUrl : "root/addressList/inner/list/_res/html/index.html",
                controller:'basicListCtrl'
            }
        }
    }).state("root.addressList.inner.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.addressList.inner":{
                templateUrl : "root/addressList/inner/add/_res/html/index.html",
                controller:'basicAddCtrl'
            }
        }
    }).state("root.addressList.inner.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.addressList.inner":{
                templateUrl : "root/addressList/inner/edit/_res/html/index.html",
                controller:'basicEditCtrl'
            }
        }
    }).state("root.addressList.inner.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.addressList.inner":{
                templateUrl : "root/addressList/inner/import/_res/html/index.html",
                controller:'basicImportCtrl'
            }
        }
    })
});