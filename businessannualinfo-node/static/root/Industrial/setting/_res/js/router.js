var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.Industrial.setting", {
        url : "/setting",
        views : {
            "content@root.Industrial" : {
                templateUrl : "root/Industrial/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.Industrial" : {
                templateUrl : "root/Industrial/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.Industrial.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.Industrial.setting":{
                templateUrl : "root/Industrial/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.Industrial.setting.list[12]",{
        url:"/list[12]?id=&page=",
        views:{
            "content@root.Industrial.setting":{
                templateUrl : "root/Industrial/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});