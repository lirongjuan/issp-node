var app = angular.module('billRecords', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recordAccount.billRecords", {
        url : "/billRecords",
        views : {
            "content@root.recordAccount" : {
                templateUrl : "root/recordAccount/billRecords/_res/html/index.html",
                controller:"billRecordsCtrl"
            },"menu@root.recordAccount" : {
                templateUrl : "root/recordAccount/billRecords/_res/html/menu.html",
                controller:"billRecordsMenuCtrl"
            }
        }
    }).state("root.recordAccount.billRecords.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.recordAccount.billRecords":{
                templateUrl : "root/recordAccount/billRecords/list/_res/html/index.html",
                controller:'billRecordsListCtrl'
            }
        }
    }).state("root.recordAccount.billRecords.subjectsSummary[12]",{
        url:"/subjectsSummary[12]",
        views:{
            "content@root.recordAccount.billRecords":{
                templateUrl : "root/recordAccount/billRecords/subjectsSummary/_res/html/index.html",
                controller:'subjectsSummaryCtrl'
            }
        }
    }).state("root.recordAccount.billRecords.areasSummary[12]",{
        url:"/areasSummary[12]",
        views:{
            "content@root.recordAccount.billRecords":{
                templateUrl : "root/recordAccount/billRecords/areasSummary/_res/html/index.html",
                controller:'areasSummaryCtrl'
            }
        }
    }).state("root.recordAccount.billRecords.teamSummary[12]",{
        url:"/teamSummary[12]",
        views:{
            "content@root.recordAccount.billRecords":{
                templateUrl : "root/recordAccount/billRecords/teamSummary/_res/html/index.html",
                controller:'teamSummaryCtrl'
            }
        }
    }).state("root.recordAccount.billRecords.projectSummary[12]",{
        url:"/projectSummary[12]",
        views:{
            "content@root.recordAccount.billRecords":{
                templateUrl : "root/recordAccount/billRecords/projectSummary/_res/html/index.html",
                controller:'projectNameSummaryCtrl'
            }
        }
    })
});