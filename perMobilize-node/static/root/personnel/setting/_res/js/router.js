var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.personnel.setting", {
        url : "/setting",
        views : {
            "content@root.personnel" : {
                templateUrl : "root/personnel/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.personnel" : {
                templateUrl : "root/personnel/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.personnel.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.personnel.setting":{
                templateUrl : "root/personnel/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.personnel.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.personnel.setting":{
                templateUrl : "root/personnel/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});