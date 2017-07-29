var app = angular.module('departure', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.leave.departure", {
        url : "/departure",
        views : {
            "content@root.leave" : {
                templateUrl : "root/leave/departure/_res/html/index.html",
                controller:"departureCtrl"
            },"menu@root.leave" : {
                templateUrl : "root/leave/departure/_res/html/menu.html",
                controller:"departureMenuCtrl"
            }
        }
    }).state("root.leave.departure.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.leave.departure":{
                templateUrl : "root/leave/departure/list/_res/html/index.html",
                controller:'deparListCtrl'
            }
        }
    }).state("root.leave.departure.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.leave.departure":{
                templateUrl : "root/leave/departure/add/_res/html/index.html",
                controller:'deparAddCtrl'
            }
        }
    }).state("root.leave.departure.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.leave.departure":{
                templateUrl : "root/leave/departure/edit/_res/html/index.html",
                controller:'deparEditCtrl'
            }
        }
    }).state("root.leave.departure.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.leave.departure":{
                templateUrl : "root/leave/departure/upload/_res/html/index.html",
                controller:'deparUploadCtrl'
            }
        }
    }).state("root.leave.departure.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.leave.departure":{
                templateUrl : "root/leave/departure/view/_res/html/index.html",
                controller:'deparViewCtrl'
            }
        }
    }).state("root.leave.departure.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.leave.departure":{
                templateUrl : "root/leave/departure/summary/_res/html/index.html",
                controller:'summaryCtrl'
            }
        }
    //--------------------------------------------
    }).state("root.leave.departure.head[12]",{
        url:"/head[12]?id=&page=",
        views:{
            "content@root.leave.departure":{
                templateUrl : "root/leave/departure/head/_res/html/index.html",
                controller:'deparHeadCtrl'
            }
        }
    }).state("root.leave.departure.manager[12]",{
        url:"/manager[12]?id=&page=",
        views:{
            "content@root.leave.departure":{
                templateUrl : "root/leave/departure/manager/_res/html/index.html",
                controller:'deparManagerCtrl'
            }
        }
    }).state("root.leave.departure.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.leave.departure":{
                templateUrl : "root/leave/departure/audit/_res/html/index.html",
                controller:'deparAuditCtrl'
            }
        }
    }).state("root.leave.departure.editDeparture[12]",{
        url:"/editDeparture[12]?id=&page=",
        views:{
            "content@root.leave.departure":{
                templateUrl : "root/leave/departure/editDeparture/_res/html/index.html",
                controller:'deparEditDepartureCtrl'
            }
        }
    }).state("root.leave.departure.summaryWhy[12]",{
        url:"/summaryWhy[12]",
        views:{
            "content@root.leave.departure":{
                templateUrl : "root/leave/departure/summaryWhy/_res/html/index.html",
                controller:'summaryWhyCtrl'
            }
        }
    })
});