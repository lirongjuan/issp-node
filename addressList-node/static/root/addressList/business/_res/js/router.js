var app = angular.module('business', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.addressList.business", {
        url : "/business",
        views : {
            "content@root.addressList" : {
                templateUrl : "root/addressList/business/_res/html/index.html",
                controller:"businessCtrl"
            },"menu@root.addressList" : {
                templateUrl : "root/addressList/business/_res/html/menu.html",
                controller:"businessMenuCtrl"
            }
        }
    }).state("root.addressList.business.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.addressList.business":{
                templateUrl : "root/addressList/business/list/_res/html/index.html",
                controller:'businessListCtrl'
            }
        }
    }).state("root.addressList.business.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.addressList.business":{
                templateUrl : "root/addressList/business/add/_res/html/index.html",
                controller:'businessAddCtrl'
            }
        }
    }).state("root.addressList.business.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.addressList.business":{
                templateUrl : "root/addressList/business/edit/_res/html/index.html",
                controller:'businessEditCtrl'
            }
        }
    }).state("root.addressList.business.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.addressList.business":{
                templateUrl : "root/addressList/business/upload/_res/html/index.html",
                controller:'businessUploadCtrl'
            }
        }
    }).state("root.addressList.business.view[12]",{
        url:"/view[12]?id=&page=&view=",
        views:{
            "content@root.addressList.business":{
                templateUrl : "root/addressList/business/view/_res/html/index.html",
                controller:'businessViewCtrl'
            }
        }
    })
});