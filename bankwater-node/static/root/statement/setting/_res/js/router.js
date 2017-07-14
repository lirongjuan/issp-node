var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.statement.setting", {
        url : "/setting",
        views : {
            "content@root.statement" : {
                templateUrl : "root/statement/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.statement" : {
                templateUrl : "root/statement/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.statement.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.statement.setting":{
                templateUrl : "root/statement/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.statement.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.statement.setting":{
                templateUrl : "root/statement/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});