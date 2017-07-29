var app = angular.module('auditCredentials', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recordAccount.auditCredentials", {
        url : "/auditCredentials",
        views : {
            "content@root.recordAccount" : {
                templateUrl : "root/recordAccount/auditCredentials/_res/html/index.html",
                controller:"auditCredentialsCtrl"
            },"menu@root.recordAccount" : {
                templateUrl : "root/recordAccount/auditCredentials/_res/html/menu.html",
                controller:"auditCredentialsMenuCtrl"
            }
        }
    }).state("root.recordAccount.auditCredentials.list[12]",{
        url:"/list[12]?id=&ids=&name=&page=",
        views:{
            "content@root.recordAccount.auditCredentials":{
                templateUrl : "root/recordAccount/auditCredentials/list/_res/html/index.html",
                controller:'auditCredentialsListCtrl'
            }
        }
    }).state("root.recordAccount.auditCredentials.subjectsSummary[12]",{
        url:"/subjectsSummary[12]",
        views:{
            "content@root.recordAccount.auditCredentials":{
                templateUrl : "root/recordAccount/auditCredentials/subjectsSummary/_res/html/index.html",
                controller:'subjectsSummaryCtrl'
            }
        }
    }).state("root.recordAccount.auditCredentials.areasSummary[12]",{
        url:"/areasSummary[12]",
        views:{
            "content@root.recordAccount.auditCredentials":{
                templateUrl : "root/recordAccount/auditCredentials/areasSummary/_res/html/index.html",
                controller:'areasSummaryCtrl'
            }
        }
    }).state("root.recordAccount.auditCredentials.teamSummary[12]",{
        url:"/teamSummary[12]",
        views:{
            "content@root.recordAccount.auditCredentials":{
                templateUrl : "root/recordAccount/auditCredentials/teamSummary/_res/html/index.html",
                controller:'teamSummaryCtrl'
            }
        }
    }).state("root.recordAccount.auditCredentials.projectSummary[12]",{
        url:"/projectSummary[12]",
        views:{
            "content@root.recordAccount.auditCredentials":{
                templateUrl : "root/recordAccount/auditCredentials/projectSummary/_res/html/index.html",
                controller:'projectNameSummaryCtrl'
            }
        }
    })
});