var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.check.setting", {
        url : "/setting",
        views : {
            "content@root.check" : {
                templateUrl : "root/check/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.check" : {
                templateUrl : "root/check/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.check.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.check.setting":{
                templateUrl : "root/check/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.check.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.check.setting":{
                templateUrl : "root/check/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});