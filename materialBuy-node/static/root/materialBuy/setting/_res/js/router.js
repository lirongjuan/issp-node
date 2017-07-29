var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.materialBuy.setting", {
        url : "/setting",
        views : {
            "content@root.materialBuy" : {
                templateUrl : "root/materialBuy/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.materialBuy" : {
                templateUrl : "root/materialBuy/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.materialBuy.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.materialBuy.setting":{
                templateUrl : "root/materialBuy/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.materialBuy.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.materialBuy.setting":{
                templateUrl : "root/materialBuy/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});