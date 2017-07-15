var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.finance.setting", {
        url : "/setting",
        views : {
            "content@root.finance" : {
                templateUrl : "root/finance/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.finance" : {
                templateUrl : "root/finance/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.finance.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.finance.setting":{
                templateUrl : "root/finance/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.finance.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.finance.setting":{
                templateUrl : "root/finance/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});