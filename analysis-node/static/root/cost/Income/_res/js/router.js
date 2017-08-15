var app = angular.module('Income', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.cost.Income", {
        url : "/Income",
        views : {
            "content@root.cost" : {
                templateUrl : "root/cost/Income/_res/html/index.html",
                controller:"IncomeCtrl"
            },"menu@root.cost" : {
                templateUrl : "root/cost/Income/_res/html/menu.html",
                controller:"IncomeMenuCtrl"
            }
        }
    }).state("root.cost.Income.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.cost.Income":{
                templateUrl : "root/cost/Income/list/_res/html/index.html",
                controller:'IncomeListCtrl'
            }
        }
    }).state("root.cost.Income.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.cost.Income":{
                templateUrl : "root/cost/Income/add/_res/html/index.html",
                controller:'IncomeAddCtrl'
            }
        }
    }).state("root.cost.Income.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.cost.Income":{
                templateUrl : "root/cost/Income/edit/_res/html/index.html",
                controller:'IncomeEditCtrl'
            }
        }
    }).state("root.cost.Income.areaCollect[12]",{
        url:"/areaCollect[12]",
        views:{
            "content@root.cost.Income":{
                templateUrl : "root/cost/Income/areaCollect/_res/html/index.html",
                controller:'areaCollectExportCtrl'
            }
        }
    }).state("root.cost.Income.groupCollect[12]",{
        url:"/groupCollect[12]",
        views:{
            "content@root.cost.Income":{
                templateUrl : "root/cost/Income/groupCollect/_res/html/index.html",
                controller:'groupCollectExportCtrl'
            }
        }
    })
});