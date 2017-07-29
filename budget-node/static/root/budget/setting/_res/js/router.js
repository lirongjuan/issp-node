var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.budget.setting", {
        url : "/setting",
        views : {
            "content@root.budget" : {
                templateUrl : "root/budget/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.budget" : {
                templateUrl : "root/budget/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.budget.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.budget.setting":{
                templateUrl : "root/budget/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.budget.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.budget.setting":{
                templateUrl : "root/budget/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});