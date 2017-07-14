var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.processing.setting", {
        url : "/setting",
        views : {
            "content@root.processing" : {
                templateUrl : "root/processing/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.processing" : {
                templateUrl : "root/processing/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.processing.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.processing.setting":{
                templateUrl : "root/processing/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.processing.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.processing.setting":{
                templateUrl : "root/processing/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});