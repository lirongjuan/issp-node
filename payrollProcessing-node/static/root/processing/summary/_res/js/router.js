var app = angular.module('summary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.processing.summary", {
        url : "/summary",
        views : {
            "content@root.processing" : {
                templateUrl : "root/processing/summary/_res/html/index.html",
                controller:"summaryCtrl"
            },"menu@root.processing" : {
                templateUrl : "root/processing/summary/_res/html/menu.html",
                controller:"summaryMenuCtrl"
            }
        }
    }).state("root.processing.summary.departmentSummary[12]",{
        url:"/departmentSummary[12]",
        views:{
            "content@root.processing.summary":{
                templateUrl : "root/processing/summary/departmentSummary/_res/html/index.html",
                controller:'departmentSummaryCtrl'
            }
        }
    }).state("root.processing.summary.departmentAnalyze[12]",{
        url:"/departmentAnalyze[12]",
        views:{
            "content@root.processing.summary":{
                templateUrl : "root/processing/summary/departmentAnalyze/_res/html/index.html",
                controller:'departmentAnalyzeCtrl'
            }
        }
    }).state("root.processing.summary.oneSummary[12]",{
        url:"/oneSummary[12]",
        views:{
            "content@root.processing.summary":{
                templateUrl : "root/processing/summary/oneSummary/_res/html/index.html",
                controller:'oneSummaryCtrl'
            }
        }
    }).state("root.processing.summary.areasAnalyze[12]",{
        url:"/areasAnalyze[12]",
        views:{
            "content@root.processing.summary":{
                templateUrl : "root/processing/summary/areasAnalyze/_res/html/index.html",
                controller:'areasAnalyzeCtrl'
            }
        }
    }).state("root.processing.summary.oneAnalyze[12]",{
        url:"/oneAnalyze[12]",
        views:{
            "content@root.processing.summary":{
                templateUrl : "root/processing/summary/oneAnalyze/_res/html/index.html",
                controller:'oneAnalyzeCtrl'
            }
        }
    }).state("root.processing.summary.areasSummary[12]",{
        url:"/areasSummary[12]",
        views:{
            "content@root.processing.summary":{
                templateUrl : "root/processing/summary/areasSummary/_res/html/index.html",
                controller:'areasSummaryCtrl'
            }
        }
    })
});