var app = angular.module('currency', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.setting.currency", {
        url : "/currency",
        views : {  
            "content@root.initialize.setting" : {
                templateUrl : "root/initialize/setting/currency/_res/html/index.html",
                controller:"currencyCtrl"
            },"menu@root.initialize.setting" : {
                templateUrl : "root/initialize/setting/currency/_res/html/menu.html",
                controller:"currencyMenuCtrl"
            }
        }
    }).state("root.initialize.setting.currency.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.initialize.setting.currency":{
                templateUrl : "root/initialize/setting/currency/list/_res/html/index.html",
                controller:'currencyListCtrl'
            }
        }
    }).state("root.initialize.setting.currency.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.initialize.setting.currency":{
                templateUrl : "root/initialize/setting/currency/add/_res/html/index.html",
                controller:'currencyAddCtrl'
            }
        }
    }).state("root.initialize.setting.currency.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.initialize.setting.currency":{
                templateUrl : "root/initialize/setting/currency/edit/_res/html/index.html",
                controller:'currenyEditCtrl'
            }
        }
    })
});