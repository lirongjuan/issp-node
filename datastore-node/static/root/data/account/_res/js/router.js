var app = angular.module('account', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.data.account", {
        url : "/account",
        views : {
            "content@root.data" : {
                templateUrl : "root/data/account/_res/html/index.html",
                controller:"accountCtrl"
            },"menu@root.data" : {
                templateUrl : "root/data/account/_res/html/menu.html",
                controller:"accountMenuCtrl"
            }
        }
    }).state("root.data.account.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.data.account":{
                templateUrl : "root/data/account/add/_res/html/index.html",
                controller:'accountAddCtrl'
            }
        }
    }).state("root.data.account.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.data.account":{
                templateUrl : "root/data/account/edit/_res/html/index.html",
                controller:'accountEditCtrl'
            }
        }
    }).state("root.data.account.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.data.account":{
                templateUrl : "root/data/account/list/_res/html/index.html",
                controller:'accountListCtrl'
            }
        }
    }).state("root.data.account.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.data.account":{
                templateUrl : "root/data/account/upload/_res/html/index.html",
                controller:'accountUploadCtrl'
            }
        }
    }).state("root.data.account.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.data.account":{
                templateUrl : "root/data/account/view/_res/html/index.html",
                controller:'accountViewCtrl'
            }
        }
    })
});