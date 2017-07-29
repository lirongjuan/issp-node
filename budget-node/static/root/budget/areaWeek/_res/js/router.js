var app = angular.module('areaWeek', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.budget.areaWeek", {
        url : "/areaWeek",
        views : {
            "content@root.budget" : {
                templateUrl : "root/budget/areaWeek/_res/html/index.html",
                controller:"areaWeekCtrl"
            },"menu@root.budget" : {
                templateUrl : "root/budget/areaWeek/_res/html/menu.html",
                controller:"areaWeekMenuCtrl"
            }
        }
    }).state("root.budget.areaWeek.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.budget.areaWeek":{
                templateUrl : "root/budget/areaWeek/add/_res/html/index.html",
                controller:'areaWeekAddCtrl'
            }
        }
    }).state("root.budget.areaWeek.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.budget.areaWeek":{
                templateUrl : "root/budget/areaWeek/edit/_res/html/index.html",
                controller:'areaWeekEditCtrl'
            }
        }
    }).state("root.budget.areaWeek.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.budget.areaWeek":{
                templateUrl : "root/budget/areaWeek/collect/_res/html/index.html",
                controller:'collectSummaryCtrl'
            }
        }
    }).state("root.budget.areaWeek.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.budget.areaWeek":{
                templateUrl : "root/budget/areaWeek/list/_res/html/index.html",
                controller:'areaWeekListCtrl'
            }
        }
    })
});