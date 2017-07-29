var app = angular.module('inventory', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.equipmentInventory.inventory", {
        url : "/inventory",
        views : {
            "content@root.equipmentInventory" : {
                templateUrl : "root/equipmentInventory/inventory/_res/html/index.html",
                controller:"inventoryCtrl"
            },"menu@root.equipmentInventory" : {
                templateUrl : "root/equipmentInventory/inventory/_res/html/menu.html",
                controller:"inventoryMenuCtrl"
            }
        }
    }).state("root.equipmentInventory.inventory.list[12]",{
        url:"/list[12]?id=&page=&num=",
        views:{
            "content@root.equipmentInventory.inventory":{
                templateUrl : "root/equipmentInventory/inventory/list/_res/html/index.html",
                //列表
                controller:'inventoryListCtrl'
            }
        }
    }).state("root.equipmentInventory.inventory.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.equipmentInventory.inventory":{
                templateUrl : "root/equipmentInventory/inventory/edit/_res/html/index.html",
                //盘点
                controller:'inEditCtrl'
            }
        }
    }).state("root.equipmentInventory.inventory.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.equipmentInventory.inventory":{
                //导出
                templateUrl : "root/equipmentInventory/inventory/export/_res/html/index.html",
                controller:'inExportCtrl'
            }
        }
    })
});