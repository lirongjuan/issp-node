var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.out.setting", {
        url : "/setting",
        views : {
            "content@root.out" : {
                templateUrl : "root/out/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.out" : {
                templateUrl : "root/out/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.out.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.out.setting":{
                templateUrl : "root/out/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.out.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.out.setting":{
                templateUrl : "root/out/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});