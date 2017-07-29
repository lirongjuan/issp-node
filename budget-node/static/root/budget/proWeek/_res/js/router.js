var app = angular.module('proWeek', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.budget.proWeek", {
        url : "/proWeek",
        views : {
            "content@root.budget" : {
                templateUrl : "root/budget/proWeek/_res/html/index.html",
                controller:"proWeekCtrl"
            },"menu@root.budget" : {
                templateUrl : "root/budget/proWeek/_res/html/menu.html",
                controller:"proWeekMenuCtrl"
            }
        }
    }).state("root.budget.proWeek.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.budget.proWeek":{
                templateUrl : "root/budget/proWeek/add/_res/html/index.html",
                controller:'proWeekAddCtrl'
            }
        }
    }).state("root.budget.proWeek.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.budget.proWeek":{
                templateUrl : "root/budget/proWeek/edit/_res/html/index.html",
                controller:'proWeekEditCtrl'
            }
        }
    }).state("root.budget.proWeek.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.budget.proWeek":{
                templateUrl : "root/budget/proWeek/collect/_res/html/index.html",
                controller:'collectSummaryCtrl'
            }
        }
    }).state("root.budget.proWeek.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.budget.proWeek":{
                templateUrl : "root/budget/proWeek/list/_res/html/index.html",
                controller:'proWeekListCtrl'
            }
        }
    })
});