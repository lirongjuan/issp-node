var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.data.setting", {
        url : "/setting",
        views : {
            "content@root.data" : {
                templateUrl : "root/data/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.data" : {
                templateUrl : "root/data/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.data.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.data.setting":{
                templateUrl : "root/data/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.data.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.data.setting":{
                templateUrl : "root/data/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});