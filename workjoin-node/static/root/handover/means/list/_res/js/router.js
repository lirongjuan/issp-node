var app = angular.module('meansList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.handover.means.list",{
        url:"/list",
        views:{
            "content@root.handover.means":{
                templateUrl : "root/handover/means/list/_res/html/index.html",
                controller:'meansListCtrl'
            }
        }
    }).state("root.handover.means.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.handover.means.list":{
                templateUrl : "root/handover/means/list/delete/_res/html/index.html",
                controller:'meansDeleteCtrl'
            }
        }
    })
});