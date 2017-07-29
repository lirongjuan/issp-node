var app = angular.module('businessVip', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.addressList.businessVip", {
        url : "/businessVip",
        views : {
            "content@root.addressList" : {
                templateUrl : "root/addressList/businessVip/_res/html/index.html",
                controller:"businessVipCtrl"
            },"menu@root.addressList" : {
                templateUrl : "root/addressList/businessVip/_res/html/menu.html",
                controller:"businessVipMenuCtrl"
            }
        }
    }).state("root.addressList.businessVip.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.addressList.businessVip":{
                templateUrl : "root/addressList/businessVip/list/_res/html/index.html",
                controller:'businessVipListCtrl'
            }
        }
    }).state("root.addressList.businessVip.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.addressList.businessVip":{
                templateUrl : "root/addressList/businessVip/add/_res/html/index.html",
                controller:'businessVipAddCtrl'
            }
        }
    }).state("root.addressList.businessVip.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.addressList.businessVip":{
                templateUrl : "root/addressList/businessVip/edit/_res/html/index.html",
                controller:'businessVipEditCtrl'
            }
        }
    }).state("root.addressList.businessVip.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.addressList.businessVip":{
                templateUrl : "root/addressList/businessVip/upload/_res/html/index.html",
                controller:'businessVipUploadCtrl'
            }
        }
    }).state("root.addressList.businessVip.view[12]",{
        url:"/view[12]?id=&page=",
        views:{
            "content@root.addressList.businessVip":{
                templateUrl : "root/addressList/businessVip/view/_res/html/index.html",
                controller:'businessVipViewCtrl'
            }
        }
    })
});