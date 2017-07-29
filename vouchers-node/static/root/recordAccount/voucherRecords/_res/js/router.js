var app = angular.module('voucherRecords', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recordAccount.voucherRecords", {
        url : "/voucherRecords",
        views : {
            "content@root.recordAccount" : {
                templateUrl : "root/recordAccount/voucherRecords/_res/html/index.html",
                controller:"voucherRecordsCtrl"
            },"menu@root.recordAccount" : {
                templateUrl : "root/recordAccount/voucherRecords/_res/html/menu.html",
                controller:"voucherRecordsMenuCtrl"
            }
        }
    }).state("root.recordAccount.voucherRecords.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.recordAccount.voucherRecords":{
                templateUrl : "root/recordAccount/voucherRecords/list/_res/html/index.html",
                controller:'voucherRecordsListCtrl'
            }
        }
    }).state("root.recordAccount.voucherRecords.subjectsSummary[12]",{
        url:"/subjectsSummary[12]",
        views:{
            "content@root.recordAccount.voucherRecords":{
                templateUrl : "root/recordAccount/voucherRecords/subjectsSummary/_res/html/index.html",
                controller:'subjectsSummaryCtrl'
            }
        }
    }).state("root.recordAccount.voucherRecords.areasSummary[12]",{
        url:"/areasSummary[12]",
        views:{
            "content@root.recordAccount.voucherRecords":{
                templateUrl : "root/recordAccount/voucherRecords/areasSummary/_res/html/index.html",
                controller:'areasSummaryCtrl'
            }
        }
    }).state("root.recordAccount.voucherRecords.teamSummary[12]",{
        url:"/teamSummary[12]",
        views:{
            "content@root.recordAccount.voucherRecords":{
                templateUrl : "root/recordAccount/voucherRecords/teamSummary/_res/html/index.html",
                controller:'teamSummaryCtrl'
            }
        }
    }).state("root.recordAccount.voucherRecords.projectSummary[12]",{
        url:"/projectSummary[12]",
        views:{
            "content@root.recordAccount.voucherRecords":{
                templateUrl : "root/recordAccount/voucherRecords/projectSummary/_res/html/index.html",
                controller:'projectNameSummaryCtrl'
            }
        }
    }).state("root.recordAccount.voucherRecords.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.recordAccount.voucherRecords":{
                templateUrl : "root/recordAccount/voucherRecords/upload/_res/html/index.html",
                controller:'recordsUploadCtrl'
            }
        }
    }).state("root.recordAccount.voucherRecords.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.recordAccount.voucherRecords":{
                templateUrl : "root/recordAccount/voucherRecords/view/_res/html/index.html",
                controller:'recordsViewCtrl'
            }
        }
    }).state("root.recordAccount.voucherRecords.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.recordAccount.voucherRecords":{
                templateUrl : "root/recordAccount/voucherRecords/export/_res/html/index.html",
                controller:'exportCtrl'
            }
        }
    })
});