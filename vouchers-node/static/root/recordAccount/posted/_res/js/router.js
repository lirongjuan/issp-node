var app = angular.module('posted', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recordAccount.posted", {
        url : "/posted",
        views : {
            "content@root.recordAccount" : {
                templateUrl : "root/recordAccount/posted/_res/html/index.html",
                controller:"postedCtrl"
            },"menu@root.recordAccount" : {
                templateUrl : "root/recordAccount/posted/_res/html/menu.html",
                controller:"postedMenuCtrl"
            }
        }
    }).state("root.recordAccount.posted.list[12]",{
        url:"/list[12]?id=&ids=&name=&page=",
        views:{
            "content@root.recordAccount.posted":{
                templateUrl : "root/recordAccount/posted/list/_res/html/index.html",
                controller:'postedListCtrl'
            }
        }
    }).state("root.recordAccount.posted.subjectsSummary[12]",{
        url:"/subjectsSummary[12]",
        views:{
            "content@root.recordAccount.posted":{
                templateUrl : "root/recordAccount/posted/subjectsSummary/_res/html/index.html",
                controller:'subjectsSummaryCtrl'
            }
        }
    }).state("root.recordAccount.posted.areasSummary[12]",{
        url:"/areasSummary[12]",
        views:{
            "content@root.recordAccount.posted":{
                templateUrl : "root/recordAccount/posted/areasSummary/_res/html/index.html",
                controller:'areasSummaryCtrl'
            }
        }
    }).state("root.recordAccount.posted.teamSummary[12]",{
        url:"/teamSummary[12]",
        views:{
            "content@root.recordAccount.posted":{
                templateUrl : "root/recordAccount/posted/teamSummary/_res/html/index.html",
                controller:'teamSummaryCtrl'
            }
        }
    }).state("root.recordAccount.posted.projectSummary[12]",{
        url:"/projectSummary[12]",
        views:{
            "content@root.recordAccount.posted":{
                templateUrl : "root/recordAccount/posted/projectSummary/_res/html/index.html",
                controller:'projectNameSummaryCtrl'
            }
        }
    })
});