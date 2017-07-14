var app = angular.module('review', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.money.review", {
        url : "/review",
        views : {
            "content@root.money" : {
                templateUrl : "root/money/review/_res/html/index.html",
                controller:"reviewCtrl"
            },"menu@root.money" : {
                templateUrl : "root/money/review/_res/html/menu.html",
                controller:"reviewMenuCtrl"
            }
        }
    }).state("root.money.review.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.money.review":{
                templateUrl : "root/money/review/list/_res/html/index.html",
                controller:'reviewListCtrl'
            }
        }
    }).state("root.money.review.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.money.review":{
                templateUrl : "root/money/review/add/_res/html/index.html",
                controller:'reviewAddCtrl'
            }
        }
    }).state("root.money.review.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.money.review":{
                templateUrl : "root/money/review/edit/_res/html/index.html",
                controller:'reviewEditCtrl'
            }
        }
    }).state("root.money.review.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.money.review":{
                templateUrl : "root/money/review/summary/_res/html/index.html",
                controller:'summaryCtrl'
            }
        }
    })
});