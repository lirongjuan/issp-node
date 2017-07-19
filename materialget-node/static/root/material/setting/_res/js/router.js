var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.material.setting", {
        url : "/setting",
        views : {
            "content@root.material" : {
                templateUrl : "root/material/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.material" : {
                templateUrl : "root/material/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.material.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.material.setting":{
                templateUrl : "root/material/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.material.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.material.setting":{
                templateUrl : "root/material/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});