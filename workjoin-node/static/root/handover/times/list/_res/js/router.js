var app = angular.module('timesList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.handover.times.list",{
        url:"/list",
        views:{
            "content@root.handover.times":{
                templateUrl : "root/handover/times/list/_res/html/index.html",
                controller:'timesListCtrl'
            }
        }
    }).state("root.handover.times.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.handover.times.list":{
                templateUrl : "root/handover/times/list/delete/_res/html/index.html",
                controller:'timesDeleteCtrl'
            }
        }
    })
});