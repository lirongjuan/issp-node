var app = angular.module('outer', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.addressList.outer", {
        url : "/outer",
        views : {
            "content@root.addressList" : {
                templateUrl : "root/addressList/outer/_res/html/index.html",
                controller:"outerCtrl"
            },"menu@root.addressList" : {
                templateUrl : "root/addressList/outer/_res/html/menu.html",
                controller:"outMenuCtrl"
            }
        }
    }).state("root.addressList.outer.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.addressList.outer":{
                templateUrl : "root/addressList/outer/list/_res/html/index.html",
                controller:'outListCtrl'
            }
        }
    }).state("root.addressList.outer.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.addressList.outer":{
                templateUrl : "root/addressList/outer/add/_res/html/index.html",
                controller:'outAddCtrl'
            }
        }
    }).state("root.addressList.outer.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.addressList.outer":{
                templateUrl : "root/addressList/outer/edit/_res/html/index.html",
                controller:'outEditCtrl'
            }
        }
    }).state("root.addressList.outer.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.addressList.outer":{
                templateUrl : "root/addressList/outer/import/_res/html/index.html",
                controller:'outImportCtrl'
            }
        }
    })
});