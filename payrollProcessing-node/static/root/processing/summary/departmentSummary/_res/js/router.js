var app = angular.module('summaryDepartmentSummary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.processing.summary.departmentSummary",{
        url:"/departmentSummary",
        views:{
            "content@root.processing.summary":{
                templateUrl : "root/processing/summary/departmentSummary/_res/html/index.html",
                controller:'departmentSummaryCtrl'
            }
        }
    })
});