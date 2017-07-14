var app = angular.module('pay', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.equipment.pay", {
        url : "/pay",
        views : {
            "content@root.equipment" : {
                templateUrl : "root/equipment/pay/_res/html/index.html",
                controller:"paingCtrl"
            },"menu@root.equipment" : {
                templateUrl : "root/equipment/pay/_res/html/menu.html",
                controller:"paingMenuCtrl"
            }
        }
    }).state("root.equipment.pay.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.equipment.pay":{
                templateUrl : "root/equipment/pay/list/_res/html/index.html",
                controller:'paingListCtrl'
            }
        }
    }).state("root.equipment.pay.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.equipment.pay":{
                templateUrl : "root/equipment/pay/add/_res/html/index.html",
                controller:'paingAddCtrl'
            }
        }
    }).state("root.equipment.pay.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.equipment.pay":{
                templateUrl : "root/equipment/pay/edit/_res/html/index.html",
                controller:'paingEditCtrl'
            }
        }
    }).state("root.equipment.pay.summaryArea[12]",{
        url:"/summaryArea[12]",
        views:{
            "content@root.equipment.pay":{
                templateUrl : "root/equipment/pay/summaryArea/_res/html/index.html",
                controller:'summaryAreaCtrl'
            }
        }
    }).state("root.equipment.pay.summaryDepartment[12]",{
        url:"/summaryDepartment[12]",
        views:{
            "content@root.equipment.pay":{
                templateUrl : "root/equipment/pay/summaryDepartment/_res/html/index.html",
                controller:'summaryDepartmentCtrl'
            }
        }
    }).state("root.equipment.pay.summaryEquip[12]",{
        url:"/summaryEquip[12]",
        views:{
            "content@root.equipment.pay":{
                templateUrl : "root/equipment/pay/summaryEquip/_res/html/index.html",
                controller:'summaryEquipCtrl'
            }
        }
    })
});