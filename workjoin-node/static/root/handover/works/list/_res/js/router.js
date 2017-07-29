var app = angular.module('worksList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.handover.works.list",{
        url:"/list",
        views:{
            "content@root.handover.works":{
                templateUrl : "root/handover/works/list/_res/html/index.html",
                controller:'worksListCtrl'
            }
        }
    }).state("root.handover.works.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.handover.works.list":{
                templateUrl : "root/handover/works/list/delete/_res/html/index.html",
                controller:'worksDeleteCtrl'
            }
        }
    }).state("root.handover.works.list.freeze[12]",{
        url:"/freeze[12]?id=",
        views:{
            "modal@root.handover.works.list":{
                templateUrl : "root/handover/works/list/freeze/_res/html/index.html",
                controller:'worksFreezeCtrl'
            }
        }
    })
});