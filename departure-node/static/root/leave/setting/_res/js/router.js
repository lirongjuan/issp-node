var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.leave.setting", {
        url : "/setting",
        views : {
            "content@root.leave" : {
                templateUrl : "root/leave/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.leave" : {
                templateUrl : "root/leave/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.leave.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.leave.setting":{
                templateUrl : "root/leave/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.leave.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.leave.setting":{
                templateUrl : "root/leave/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});