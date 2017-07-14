var app = angular.module('wait', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.equipment.wait", {
        url : "/wait",
        views : {
            "content@root.equipment" : {
                templateUrl : "root/equipment/wait/_res/html/index.html",
                controller:"waitCtrl"
            },"menu@root.equipment" : {
                templateUrl : "root/equipment/wait/_res/html/menu.html",
                controller:"waitMenuCtrl"
            }
        }
    }).state("root.equipment.wait.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.equipment.wait":{
                templateUrl : "root/equipment/wait/list/_res/html/index.html",
                controller:'waitListCtrl'
            }
        }
    }).state("root.equipment.wait.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.equipment.wait":{
                templateUrl : "root/equipment/wait/export/_res/html/index.html",
                controller:'waitExportCtrl'
            }
        }
    }).state("root.equipment.wait.payment[12]",{
        url:"/payment[12]?id=",
        views:{
            "content@root.equipment.wait":{
                templateUrl : "root/equipment/wait/payment/_res/html/index.html",
                controller:'waitPaymentCtrl'
            }
        }
    })
});