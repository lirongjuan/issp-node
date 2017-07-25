var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.shift.setting", {
        url : "/setting",
        views : {
            "content@root.shift" : {
                templateUrl : "root/shift/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.shift" : {
                templateUrl : "root/shift/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.shift.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.shift.setting":{
                templateUrl : "root/shift/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.shift.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.shift.setting":{
                templateUrl : "root/shift/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});