var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.rotation.setting", {
        url : "/setting",
        views : {
            "content@root.rotation" : {
                templateUrl : "root/rotation/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.rotation" : {
                templateUrl : "root/rotation/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.rotation.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.rotation.setting":{
                templateUrl : "root/rotation/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.rotation.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.rotation.setting":{
                templateUrl : "root/rotation/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});