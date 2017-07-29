var app = angular.module('account', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.sort.account", {
        url : "/account",
        views : {  
            "content@root.initialize.sort" : {
                templateUrl : "root/initialize/sort/account/_res/html/index.html",
                controller:"accountCtrl"
            },"menu@root.initialize.sort" : {
                templateUrl : "root/initialize/sort/account/_res/html/menu.html",
                controller:"accountMenuCtrl"
            }
        }
    }).state("root.initialize.sort.account.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.initialize.sort.account":{
                templateUrl : "root/initialize/sort/account/list/_res/html/index.html",
                controller:'accountListCtrl'
            }
        }
    }).state("root.initialize.sort.account.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.initialize.sort.account":{
                templateUrl : "root/initialize/sort/account/add/_res/html/index.html",
                controller:'accountAddCtrl'
            }
        }
    }).state("root.initialize.sort.account.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.initialize.sort.account":{
                templateUrl : "root/initialize/sort/account/edit/_res/html/index.html",
                controller:'accountEditCtrl'
            }
        }
    })
});