var app = angular.module('public', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.addressList.public", {
        url : "/public",
        views : {
            "content@root.addressList" : {
                templateUrl : "root/addressList/public/_res/html/index.html",
                controller:"publicCtrl"
            },"menu@root.addressList" : {
                templateUrl : "root/addressList/public/_res/html/menu.html",
                controller:"publicMenuCtrl"
            }
        }
    }).state("root.addressList.public.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.addressList.public":{
                templateUrl : "root/addressList/public/list/_res/html/index.html",
                controller:'publicListCtrl'
            }
        }
    }).state("root.addressList.public.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.addressList.public":{
                templateUrl : "root/addressList/public/add/_res/html/index.html",
                controller:'publicAddCtrl'
            }
        }
    }).state("root.addressList.public.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.addressList.public":{
                templateUrl : "root/addressList/public/edit/_res/html/index.html",
                controller:'publicEditCtrl'
            }
        }
    }).state("root.addressList.public.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.addressList.public":{
                templateUrl : "root/addressList/public/import/_res/html/index.html",
                controller:'publicImportCtrl'
            }
        }
    })
});