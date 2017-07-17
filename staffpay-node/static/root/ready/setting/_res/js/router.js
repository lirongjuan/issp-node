var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ready.setting", {
        url : "/setting",
        views : {
            "content@root.ready" : {
                templateUrl : "root/ready/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.ready" : {
                templateUrl : "root/ready/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.ready.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.ready.setting":{
                templateUrl : "root/ready/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.ready.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.ready.setting":{
                templateUrl : "root/ready/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});