var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.stock.setting", {
        url : "/setting",
        views : {
            "content@root.stock" : {
                templateUrl : "root/stock/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.stock" : {
                templateUrl : "root/stock/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.stock.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.stock.setting":{
                templateUrl : "root/stock/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.stock.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.stock.setting":{
                templateUrl : "root/stock/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});