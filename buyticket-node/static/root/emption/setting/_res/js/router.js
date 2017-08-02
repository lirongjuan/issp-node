var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.emption.setting", {
        url : "/setting",
        views : {
            "content@root.emption" : {
                templateUrl : "root/emption/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.emption" : {
                templateUrl : "root/emption/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.emption.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.emption.setting":{
                templateUrl : "root/emption/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.emption.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.emption.setting":{
                templateUrl : "root/emption/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});