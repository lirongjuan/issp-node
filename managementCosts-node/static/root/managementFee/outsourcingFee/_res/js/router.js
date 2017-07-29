var app = angular.module('outsourcingFee', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.managementFee.outsourcingFee", {
        url : "/outsourcingFee",
        views : {
            "content@root.managementFee" : {
                templateUrl : "root/managementFee/outsourcingFee/_res/html/index.html",
                controller:"outsourcingFeeCtrl"
            },"menu@root.managementFee" : {
                templateUrl : "root/managementFee/outsourcingFee/_res/html/menu.html",
                controller:"outsourcingFeeMenuCtrl"
            }
        }
    }).state("root.managementFee.outsourcingFee.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.managementFee.outsourcingFee":{
                templateUrl : "root/managementFee/outsourcingFee/list/_res/html/index.html",
                controller:'outsourcingListCtrl'
            }
        }
    }).state("root.managementFee.outsourcingFee.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.managementFee.outsourcingFee":{
                templateUrl : "root/managementFee/outsourcingFee/add/_res/html/index.html",
                controller:'outsourcingFeeAddCtrl'
            }
        }
    }).state("root.managementFee.outsourcingFee.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.managementFee.outsourcingFee":{
                templateUrl : "root/managementFee/outsourcingFee/edit/_res/html/index.html",
                controller:'outsourcingFeeEditCtrl'
            }
        }
    }).state("root.managementFee.outsourcingFee.areasSummary[12]",{
        url:"/areasSummary[12]",
        views:{
            "content@root.managementFee.outsourcingFee":{
                templateUrl : "root/managementFee/outsourcingFee/areasSummary/_res/html/index.html",
                controller:'areasSummaryCtrl'
            }
        }
    }).state("root.managementFee.outsourcingFee.teamSummary[12]",{
        url:"/teamSummary[12]",
        views:{
            "content@root.managementFee.outsourcingFee":{
                templateUrl : "root/managementFee/outsourcingFee/teamSummary/_res/html/index.html",
                controller:'teamSummaryCtrl'
            }
        }
    }).state("root.managementFee.outsourcingFee.categorySummary[12]",{
        url:"/categorySummary[12]",
        views:{
            "content@root.managementFee.outsourcingFee":{
                templateUrl : "root/managementFee/outsourcingFee/categorySummary/_res/html/index.html",
                controller:'categorySummaryCtrl'
            }
        }
    }).state("root.managementFee.outsourcingFee.projectSummary[12]",{
        url:"/projectSummary[12]",
        views:{
            "content@root.managementFee.outsourcingFee":{
                templateUrl : "root/managementFee/outsourcingFee/projectSummary/_res/html/index.html",
                controller:'projectNameSummaryCtrl'
            }
        }
    })
});