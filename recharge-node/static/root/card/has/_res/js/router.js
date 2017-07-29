var app = angular.module('has', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.card.has", {
        url : "/has",
        views : {
            "content@root.card" : {
                templateUrl : "root/card/has/_res/html/index.html",
                controller:"hasCtrl"
            },"menu@root.card" : {
                templateUrl : "root/card/has/_res/html/menu.html",
                controller:"hasMenuCtrl"
            }
        }
    }).state("root.card.has.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.card.has":{
                templateUrl : "root/card/has/list/_res/html/index.html",
                controller:'hasListCtrl'
            }
        }
    }).state("root.card.has.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.card.has":{
                templateUrl : "root/card/has/summary/_res/html/index.html",
                controller:'hasSummaryCtrl'
            }
        }
    }).state("root.card.has.contrast[12]",{
        url:"/contrast[12]",
        views:{
            "content@root.card.has":{
                templateUrl : "root/card/has/contrast/_res/html/index.html",
                controller:'hasContrastCtrl'
            }
        }
    })
});