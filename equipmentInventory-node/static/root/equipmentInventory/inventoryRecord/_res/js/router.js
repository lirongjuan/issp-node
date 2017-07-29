var app = angular.module('inventoryRecord', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.equipmentInventory.inventoryRecord", {
        url : "/inventoryRecord",
        views : {
            "content@root.equipmentInventory" : {
                templateUrl : "root/equipmentInventory/inventoryRecord/_res/html/index.html",
                controller:"inRecordCtrl"
            },"menu@root.equipmentInventory" : {
                templateUrl : "root/equipmentInventory/inventoryRecord/_res/html/menu.html",
                controller:"inRecordMenuCtrl"
            }
        }
    }).state("root.equipmentInventory.inventoryRecord.list[12]",{
        url:"/list[12]?id=&page=",
        views:{
            "content@root.equipmentInventory.inventoryRecord":{
                templateUrl : "root/equipmentInventory/inventoryRecord/list/_res/html/index.html",
                //列表
                controller:'recordListCtrl'
            }
        }
    }).state("root.equipmentInventory.inventoryRecord.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.equipmentInventory.inventoryRecord":{
                //导出
                templateUrl : "root/equipmentInventory/inventoryRecord/export/_res/html/index.html",
                controller:'reExportCtrl'
            }
        }
    }).state("root.equipmentInventory.inventoryRecord.area[12]",{
        url:"/area[12]",
        views:{
            "content@root.equipmentInventory.inventoryRecord":{
                //地区汇总
                templateUrl : "root/equipmentInventory/inventoryRecord/area/_res/html/index.html",
                controller:'recordAreaCtrl'
            }
        }
    }).state("root.equipmentInventory.inventoryRecord.department[12]",{
        url:"/department[12]",
        views:{
            "content@root.equipmentInventory.inventoryRecord":{
                //部门汇总
                templateUrl : "root/equipmentInventory/inventoryRecord/department/_res/html/index.html",
                controller:'recordDepCtrl'
            }
        }
    }).state("root.equipmentInventory.inventoryRecord.material[12]",{
        url:"/material[12]",
        views:{
            "content@root.equipmentInventory.inventoryRecord":{
                //物资名称汇总
                templateUrl : "root/equipmentInventory/inventoryRecord/material/_res/html/index.html",
                controller:'recordMatCtrl'
            }
        }
    }).state("root.equipmentInventory.inventoryRecord.state[12]",{
        url:"/state[12]",
        views:{
            "content@root.equipmentInventory.inventoryRecord":{
                //状态汇总
                templateUrl : "root/equipmentInventory/inventoryRecord/state/_res/html/index.html",
                controller:'recordStareCtrl'
            }
        }
    })
});