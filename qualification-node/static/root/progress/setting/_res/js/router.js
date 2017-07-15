var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.progress.setting", {
        url : "/setting",
        views : {
            "content@root.progress" : {
                templateUrl : "root/progress/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.progress.setting" : {
                templateUrl : "root/progress/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.progress.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.progress.setting":{
                templateUrl : "root/progress/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.progress.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.progress.setting":{
                templateUrl : "root/progress/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});