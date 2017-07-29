var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.bonus.setting", {
        url : "/setting",
        views : {
            "content@root.bonus" : {
                templateUrl : "root/bonus/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.bonus" : {
                templateUrl : "root/bonus/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.bonus.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.bonus.setting":{
                templateUrl : "root/bonus/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.bonus.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.bonus.setting":{
                templateUrl : "root/bonus/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});