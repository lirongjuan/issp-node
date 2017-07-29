var app = angular.module('obligationsList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.handover.obligations.list",{
        url:"/list",
        views:{
            "content@root.handover.obligations":{
                templateUrl : "root/handover/obligations/list/_res/html/index.html",
                controller:'obligationsListCtrl'
            }
        }
    }).state("root.handover.obligations.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.handover.obligations.list":{
                templateUrl : "root/handover/obligations/list/delete/_res/html/index.html",
                controller:'obligationsDeleteCtrl'
            }
        }
    }).state("root.handover.obligations.list.freeze[12]",{
        url:"/freeze[12]?id=",
        views:{
            "modal@root.handover.obligations.list":{
                templateUrl : "root/handover/obligations/list/freeze/_res/html/index.html",
                controller:'obligationsFreezeCtrl'
            }
        }
    })
});