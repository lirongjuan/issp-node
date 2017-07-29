var app = angular.module('dayPlan', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.plan.dayPlan", {
        url : "/dayPlan",
        views : {
            "content@root.developProgress.plan" : {
                templateUrl : "root/developProgress/plan/dayPlan/_res/html/index.html",
                controller:"dayPlanCtrl"
            },"menu@root.developProgress.plan" : {
                templateUrl : "root/developProgress/plan/dayPlan/_res/html/menu.html",
                controller:"dayPlanMenuCtrl"
            }
        }
    }).state("root.developProgress.plan.dayPlan.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.developProgress.plan.dayPlan":{
                templateUrl : "root/developProgress/plan/dayPlan/list/_res/html/index.html",
                controller:'dayPlanListCtrl'
            }
        }
    }).state("root.developProgress.plan.dayPlan.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.developProgress.plan.dayPlan":{
                templateUrl : "root/developProgress/plan/dayPlan/add/_res/html/index.html",
                controller:'dayPlanAddCtrl'
            }
        }
    }).state("root.developProgress.plan.dayPlan.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.developProgress.plan.dayPlan":{
                templateUrl : "root/developProgress/plan/dayPlan/edit/_res/html/index.html",
                controller:'dayEditCtrl'
            }
        }
    }).state("root.developProgress.plan.dayPlan.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.developProgress.plan.dayPlan":{
                templateUrl : "root/developProgress/plan/dayPlan/upload/_res/html/index.html",
                controller:'dayPlanUploadCtrl'
            }
        }
    }).state("root.developProgress.plan.dayPlan.view[12]",{
        url:"/view[12]?id=&view=&page=",
        views:{
            "content@root.developProgress.plan.dayPlan":{
                templateUrl : "root/developProgress/plan/dayPlan/view/_res/html/index.html",
                controller:'dayPlanViewCtrl'
            }
        }
    }).state("root.developProgress.plan.dayPlan.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.developProgress.plan.dayPlan":{
                templateUrl : "root/developProgress/plan/dayPlan/export/_res/html/index.html",
                controller:'dayPlanExportCtrl'
            }
        }
    })
});