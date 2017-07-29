var app = angular.module('activity', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.activity", {
        url : "/activity",
        views : {
            "content@root.project" : {
                templateUrl : "root/project/activity/_res/html/index.html",
                controller:"activityCtrl"
            },"menu@root.project" : {
                templateUrl : "root/project/activity/_res/html/menu.html",
                controller:"activityMenuCtrl"
            }
        }
    }).state("root.project.activity.firstDetails[12]",{
        url:"/firstDetails[12]?suId=",
        views:{
            "content@root.project.activity":{
                templateUrl : "root/project/activity/firstDetails/_res/html/index.html",
                controller:'actFirstDetailsCtrl'
            }
        }
    }).state("root.project.activity.secondDetails[12]",{
        url:"/secondDetails[12]?suId=",
        views:{
            "content@root.project.activity":{
                templateUrl : "root/project/activity/secondDetails/_res/html/index.html",
                controller:'actSecondDetailsCtrl'
            }
        }
    }).state("root.project.activity.thirdDetails[12]",{
        url:"/thirdDetails[12]?suId=",
        views:{
            "content@root.project.activity":{
                templateUrl : "root/project/activity/thirdDetails/_res/html/index.html",
                controller:'actThirdDetailsCtrl'
            }
        }
    }).state("root.project.activity.areasDetails[12]",{
        url:"/areasDetails[12]?suId=",
        views:{
            "content@root.project.activity":{
                templateUrl : "root/project/activity/areasDetails/_res/html/index.html",
                controller:'actAreasDetailsCtrl'
            }
        }
    }).state("root.project.activity.projectDetails[12]",{
        url:"/projectDetails[12]?suId=",
        views:{
            "content@root.project.activity":{
                templateUrl : "root/project/activity/projectDetails/_res/html/index.html",
                controller:'actProjectDetailsCtrl'
            }
        }
    }).state("root.project.activity.projectNameDetails[12]",{
        url:"/projectNameDetails[12]?suId=",
        views:{
            "content@root.project.activity":{
                templateUrl : "root/project/activity/projectNameDetails/_res/html/index.html",
                controller:'projectNameDetailsMenu'
            }
        }
    }).state("root.project.activity.list[12]",{
        url:"/list[12]?id=&page=",
        views:{
            "content@root.project.activity":{
                templateUrl : "root/project/activity/list/_res/html/index.html",
                controller:'activityListCtrl'
            }
        }
    })
});