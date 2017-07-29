var app = angular.module('handover', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.leave.handover", {
        url : "/handover",
        views : {
            "content@root.leave" : {
                templateUrl : "root/leave/handover/_res/html/index.html",
                controller:"handoverCtrl"
            },"menu@root.leave" : {
                templateUrl : "root/leave/handover/_res/html/menu.html",
                controller:"handoverMenuCtrl"
            }
        }
    }).state("root.leave.handover.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.leave.handover":{
                templateUrl : "root/leave/handover/list/_res/html/index.html",
                controller:'handoverListCtrl'
            }
        }
    }).state("root.leave.handover.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.leave.handover":{
                templateUrl : "root/leave/handover/add/_res/html/index.html",
                controller:'handoverAddCtrl'
            }
        }
    }).state("root.leave.handover.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.leave.handover":{
                templateUrl : "root/leave/handover/edit/_res/html/index.html",
                controller:'handoverEditCtrl'
            }
        }
    })
});