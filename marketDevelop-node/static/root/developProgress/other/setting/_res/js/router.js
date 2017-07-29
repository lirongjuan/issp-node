var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.other.setting", {
        url : "/setting",
        views : {
            "content@root.developProgress.other" : {
                templateUrl : "root/developProgress/other/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.developProgress.other" : {
                templateUrl : "root/developProgress/other/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.developProgress.other.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.developProgress.other.setting":{
                templateUrl : "root/developProgress/other/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.developProgress.other.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.developProgress.other.setting":{
                templateUrl : "root/developProgress/other/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});