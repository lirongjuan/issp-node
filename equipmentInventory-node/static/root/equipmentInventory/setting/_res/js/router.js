var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.equipmentInventory.setting", {
        url : "/setting",
        views : {
            "content@root.equipmentInventory" : {
                templateUrl : "root/equipmentInventory/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.equipmentInventory" : {
                templateUrl : "root/equipmentInventory/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.equipmentInventory.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.equipmentInventory.setting":{
                templateUrl : "root/equipmentInventory/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.equipmentInventory.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.equipmentInventory.setting":{
                templateUrl : "root/equipmentInventory/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});