var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.personal.setting", {
        url : "/setting",
        views : {
            "content@root.personal" : {
                templateUrl : "root/personal/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.personal" : {
                templateUrl : "root/personal/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.personal.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.personal.setting":{
                templateUrl : "root/personal/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.personal.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.personal.setting":{
                templateUrl : "root/personal/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});