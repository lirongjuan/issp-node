var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.incomeAccount.setting", {
        url : "/setting",
        views : {
            "content@root.incomeAccount" : {
                templateUrl : "root/incomeAccount/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.incomeAccount" : {
                templateUrl : "root/incomeAccount/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.incomeAccount.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.incomeAccount.setting":{
                templateUrl : "root/incomeAccount/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.incomeAccount.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.incomeAccount.setting":{
                templateUrl : "root/incomeAccount/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});