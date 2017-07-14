var app = angular.module('confirmed', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.processing.confirmed", {
        url : "/confirmed",
        views : {
            "content@root.processing" : {
                templateUrl : "root/processing/confirmed/_res/html/index.html",
                controller:"confirmedCtrl"
            },"menu@root.processing" : {
                templateUrl : "root/processing/confirmed/_res/html/menu.html",
                controller:"confirmedMenuCtrl"
            }
        }
    }).state("root.processing.confirmed.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.processing.confirmed":{
                templateUrl : "root/processing/confirmed/list/_res/html/index.html",
                controller:'confirmedListCtrl'
            }
        }
    })
});