var app = angular.module('equipmentList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.handover.equipment.list",{
        url:"/list",
        views:{
            "content@root.handover.equipment":{
                templateUrl : "root/handover/equipment/list/_res/html/index.html",
                controller:'equipmentListCtrl'
            }
        }
    }).state("root.handover.equipment.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.handover.equipment.list":{
                templateUrl : "root/handover/equipment/list/delete/_res/html/index.html",
                controller:'equipmentDeleteCtrl'
            }
        }
    })
});