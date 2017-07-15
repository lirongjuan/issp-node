var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.supplier.setting", {
        url : "/setting",
        views : {
            "content@root.supplier" : {
                templateUrl : "root/supplier/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.supplier" : {
                templateUrl : "root/supplier/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.supplier.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.supplier.setting":{
                templateUrl : "root/supplier/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.supplier.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.supplier.setting":{
                templateUrl : "root/supplier/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});