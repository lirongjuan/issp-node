var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.money.setting", {
        url : "/setting",
        views : {
            "content@root.money" : {
                templateUrl : "root/money/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.money" : {
                templateUrl : "root/money/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.money.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.money.setting":{
                templateUrl : "root/money/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.money.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.money.setting":{
                templateUrl : "root/money/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});