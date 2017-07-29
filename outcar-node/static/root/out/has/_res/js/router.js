var app = angular.module('has', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.out.has", {
        url : "/has",
        views : {
            "content@root.out" : {
                templateUrl : "root/out/has/_res/html/index.html",
                controller:"hasCtrl"
            },"menu@root.out" : {
                templateUrl : "root/out/has/_res/html/menu.html",
                controller:"hasMenuCtrl"
            }
        }
    }).state("root.out.has.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.out.has":{
                templateUrl : "root/out/has/list/_res/html/index.html",
                controller:'hasListCtrl'
            }
        }
    }).state("root.out.has.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.out.has":{
                templateUrl : "root/out/has/summary/_res/html/index.html",
                controller:'hasSummaryCtrl'
            }
        }
    }).state("root.out.has.area[12]",{
        url:"/area[12]",
        views:{
            "content@root.out.has":{
                templateUrl : "root/out/has/area/_res/html/index.html",
                controller:'hasAreaCtrl'
            }
        }
    }).state("root.out.has.cars[12]",{
        url:"/cars[12]",
        views:{
            "content@root.out.has":{
                templateUrl : "root/out/has/cars/_res/html/index.html",
                controller:'hasCarsCtrl'
            }
        }
    })
});