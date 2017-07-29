var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectProcessed.setting", {
        url : "/setting",
        views : {
            "content@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.projectProcessed.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectProcessed.setting":{
                templateUrl : "root/projectProcessed/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.projectProcessed.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.projectProcessed.setting":{
                templateUrl : "root/projectProcessed/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});