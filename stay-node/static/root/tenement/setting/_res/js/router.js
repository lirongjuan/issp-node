var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.tenement.setting", {
        url : "/setting",
        views : {
            "content@root.tenement" : {
                templateUrl : "root/tenement/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.tenement" : {
                templateUrl : "root/tenement/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.tenement.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.tenement.setting":{
                templateUrl : "root/tenement/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.tenement.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.tenement.setting":{
                templateUrl : "root/tenement/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});