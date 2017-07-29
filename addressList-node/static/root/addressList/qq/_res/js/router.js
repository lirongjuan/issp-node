var app = angular.module('qq', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.addressList.qq", {
        url : "/qq",
        views : {
            "content@root.addressList" : {
                templateUrl : "root/addressList/qq/_res/html/index.html",
                controller:"qqCtrl"
            },"menu@root.addressList" : {
                templateUrl : "root/addressList/qq/_res/html/menu.html",
                controller:"qqMenuCtrl"
            }
        }
    }).state("root.addressList.qq.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.addressList.qq":{
                templateUrl : "root/addressList/qq/list/_res/html/index.html",
                controller:'qqListCtrl'
            }
        }
    }).state("root.addressList.qq.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.addressList.qq":{
                templateUrl : "root/addressList/qq/add/_res/html/index.html",
                controller:'qqAddCtrl'
            }
        }
    }).state("root.addressList.qq.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.addressList.qq":{
                templateUrl : "root/addressList/qq/edit/_res/html/index.html",
                controller:'qqEditCtrl'
            }
        }
    }).state("root.addressList.qq.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.addressList.qq":{
                templateUrl : "root/addressList/qq/import/_res/html/index.html",
                controller:'qqImportCtrl'
            }
        }
    })
});