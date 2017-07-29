var app = angular.module('managementSpend', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.managementFee.managementSpend", {
        url : "/managementSpend",
        views : {
            "content@root.managementFee" : {
                templateUrl : "root/managementFee/managementSpend/_res/html/index.html",
                controller:"spendCtrl"
            },"menu@root.managementFee" : {
                templateUrl : "root/managementFee/managementSpend/_res/html/menu.html",
                controller:"spendMenuCtrl"
            }
        }
    }).state("root.managementFee.managementSpend.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.managementFee.managementSpend":{
                templateUrl : "root/managementFee/managementSpend/list/_res/html/index.html",
                controller:'spendListCtrl'
            }
        }
    }).state("root.managementFee.managementSpend.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.managementFee.managementSpend":{
                templateUrl : "root/managementFee/managementSpend/add/_res/html/index.html",
                controller:'spendAddCtrl'
            }
        }
    }).state("root.managementFee.managementSpend.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.managementFee.managementSpend":{
                templateUrl : "root/managementFee/managementSpend/edit/_res/html/index.html",
                controller:'spendEditCtrl'
            }
        }
    }).state("root.managementFee.managementSpend.areasSummary[12]",{
        url:"/areasSummary[12]",
        views:{
            "content@root.managementFee.managementSpend":{
                templateUrl : "root/managementFee/managementSpend/areasSummary/_res/html/index.html",
                controller:'areasSummaryCtrl'
            }
        }
    }).state("root.managementFee.managementSpend.teamSummary[12]",{
        url:"/teamSummary[12]",
        views:{
            "content@root.managementFee.managementSpend":{
                templateUrl : "root/managementFee/managementSpend/teamSummary/_res/html/index.html",
                controller:'teamSummaryCtrl'
            }
        }
    }).state("root.managementFee.managementSpend.categorySummary[12]",{
        url:"/categorySummary[12]",
        views:{
            "content@root.managementFee.managementSpend":{
                templateUrl : "root/managementFee/managementSpend/categorySummary/_res/html/index.html",
                controller:'categorySummaryCtrl'
            }
        }
    }).state("root.managementFee.managementSpend.projectSummary[12]",{
        url:"/projectSummary[12]",
        views:{
            "content@root.managementFee.managementSpend":{
                templateUrl : "root/managementFee/managementSpend/projectSummary/_res/html/index.html",
                controller:'projectNameSummaryCtrl'
            }
        }
    })
});