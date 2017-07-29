var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.taxes.setting", {
        url : "/setting",
        views : {
            "content@root.taxes" : {
                templateUrl : "root/taxes/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.taxes" : {
                templateUrl : "root/taxes/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.taxes.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.taxes.setting":{
                templateUrl : "root/taxes/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.taxes.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.taxes.setting":{
                templateUrl : "root/taxes/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});