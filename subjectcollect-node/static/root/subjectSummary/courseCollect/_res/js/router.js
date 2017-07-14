var app = angular.module('courseCollect', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.subjectSummary.courseCollect", {
        url : "/courseCollect",
        views : {
            "content@root.subjectSummary" : {
                templateUrl : "root/subjectSummary/courseCollect/_res/html/index.html",
                controller:"courseCollectCtrl"
            },"menu@root.subjectSummary" : {
                templateUrl : "root/subjectSummary/courseCollect/_res/html/menu.html",
                controller:"courseCollectMenuCtrl"
            }
        }
    }).state("root.subjectSummary.courseCollect.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.subjectSummary.courseCollect":{
                templateUrl : "root/subjectSummary/courseCollect/list/_res/html/index.html",
                controller:'courseCollectListCtrl'
            }
        }
    }).state("root.subjectSummary.courseCollect.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.subjectSummary.courseCollect":{
                templateUrl : "root/subjectSummary/courseCollect/add/_res/html/index.html",
                controller:'courseCollectAddCtrl'
            }
        }
    }).state("root.subjectSummary.courseCollect.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.subjectSummary.courseCollect":{
                templateUrl : "root/subjectSummary/courseCollect/edit/_res/html/index.html",
                controller:'courseCollectEditCtrl'
            }
        }
    }).state("root.subjectSummary.courseCollect.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.subjectSummary.courseCollect":{
                templateUrl : "root/subjectSummary/courseCollect/export/_res/html/index.html",
                controller:'courseCollectExportCtrl'
            }
        }
    }).state("root.subjectSummary.courseCollect.subjectsSummary[12]",{
        url:"/subjectsSummary[12]",
        views:{
            "content@root.subjectSummary.courseCollect":{
                templateUrl : "root/subjectSummary/courseCollect/subjectsSummary/_res/html/index.html",
                controller:'subjectsSummaryCtrl'
            }
        }
    }).state("root.subjectSummary.courseCollect.areasSummary[12]",{
        url:"/areasSummary[12]",
        views:{
            "content@root.subjectSummary.courseCollect":{
                templateUrl : "root/subjectSummary/courseCollect/areasSummary/_res/html/index.html",
                controller:'areasSummaryCtrl'
            }
        }
    }).state("root.subjectSummary.courseCollect.teamSummary[12]",{
        url:"/teamSummary[12]",
        views:{
            "content@root.subjectSummary.courseCollect":{
                templateUrl : "root/subjectSummary/courseCollect/teamSummary/_res/html/index.html",
                controller:'teamSummaryCtrl'
            }
        }
    }).state("root.subjectSummary.courseCollect.projectSummary[12]",{
        url:"/projectSummary[12]",
        views:{
            "content@root.subjectSummary.courseCollect":{
                templateUrl : "root/subjectSummary/courseCollect/projectSummary/_res/html/index.html",
                controller:'projectNameSummaryCtrl'
            }
        }
    }).state("root.subjectSummary.courseCollect.contrast[12]",{
        url:"/contrast[12]",
        views:{
            "content@root.subjectSummary.courseCollect":{
                templateUrl : "root/subjectSummary/courseCollect/contrast/_res/html/index.html",
                controller:'courseCollectContrastCtrl'
            }
        }
    })
});