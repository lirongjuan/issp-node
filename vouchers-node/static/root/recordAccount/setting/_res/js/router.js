var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recordAccount.setting", {
        url : "/setting",
        views : {
            "content@root.recordAccount" : {
                templateUrl : "root/recordAccount/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.recordAccount" : {
                templateUrl : "root/recordAccount/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.recordAccount.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.recordAccount.setting":{
                templateUrl : "root/recordAccount/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.recordAccount.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.recordAccount.setting":{
                templateUrl : "root/recordAccount/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});