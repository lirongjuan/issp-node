var app = angular.module('review', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.equipment.review", {
        url : "/review",
        views : {
            "content@root.equipment" : {
                templateUrl : "root/equipment/review/_res/html/index.html",
                controller:"reviewCtrl"
            },"menu@root.equipment" : {
                templateUrl : "root/equipment/review/_res/html/menu.html",
                controller:"reviewMenuCtrl"
            }
        }
    }).state("root.equipment.review.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.equipment.review":{
                templateUrl : "root/equipment/review/list/_res/html/index.html",
                controller:'reviewListCtrl'
            }
        }
    }).state("root.equipment.review.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.equipment.review":{
                templateUrl : "root/equipment/review/add/_res/html/index.html",
                controller:'reviewAddCtrl'
            }
        }
    }).state("root.equipment.review.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.equipment.review":{
                templateUrl : "root/equipment/review/edit/_res/html/index.html",
                controller:'reviewEditCtrl'
            }
        }
    }).state("root.equipment.review.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.equipment.review":{
                templateUrl : "root/equipment/review/summary/_res/html/index.html",
                controller:'summaryCtrl'
            }
        }
    })
});