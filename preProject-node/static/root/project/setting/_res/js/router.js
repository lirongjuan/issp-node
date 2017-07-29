var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.setting", {
        url : "/setting",
        views : {
            "content@root.project" : {
                templateUrl : "root/project/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.project" : {
                templateUrl : "root/project/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.project.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.project.setting":{
                templateUrl : "root/project/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.project.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.project.setting":{
                templateUrl : "root/project/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});