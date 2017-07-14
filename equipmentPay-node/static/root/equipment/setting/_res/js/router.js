var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.equipment.setting", {
        url : "/setting",
        views : {
            "content@root.equipment" : {
                templateUrl : "root/equipment/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.equipment" : {
                templateUrl : "root/equipment/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.equipment.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.equipment.setting":{
                templateUrl : "root/equipment/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.equipment.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.equipment.setting":{
                templateUrl : "root/equipment/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});