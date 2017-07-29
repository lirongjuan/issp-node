var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.setting", {
        url : "/setting",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.file.setting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.file.setting":{
                templateUrl : "root/file/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.file.setting.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.file.setting":{
                templateUrl : "root/file/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});