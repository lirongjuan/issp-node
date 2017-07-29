var app = angular.module('equipment', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.handover.equipment", {
        url : "/equipment",
        views : {
            "content@root.handover" : {
                templateUrl : "root/handover/equipment/_res/html/index.html",
                controller:"equipmentCtrl"
            },"menu@root.handover" : {
                templateUrl : "root/handover/equipment/_res/html/menu.html",
                controller:"equipmentMenuCtrl"
            }
        }
    }).state("root.handover.equipment.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.handover.equipment":{
                templateUrl : "root/handover/equipment/add/_res/html/index.html",
                controller:'equipmentAddCtrl'
            }
        }
    }).state("root.handover.equipment.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.handover.equipment":{
                templateUrl : "root/handover/equipment/edit/_res/html/index.html",
                controller:'equipmentEditCtrl'
            }
        }
    }).state("root.handover.equipment.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.handover.equipment":{
                templateUrl : "root/handover/equipment/upload/_res/html/index.html",
                controller:'equipmentUploadCtrl'
            }
        }
    }).state("root.handover.equipment.download[12]",{
        url:"/download[12]?id=",
        views:{
            "content@root.handover.equipment":{
                templateUrl : "root/handover/equipment/download/_res/html/index.html",
                controller:'equipmentDownloadCtrl'
            }
        }
    })
});