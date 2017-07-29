var app = angular.module('mission', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.schedulejob.mission", {
        url : "/mission",
        views : {
            "content@root.schedulejob" : {
                templateUrl : "root/schedulejob/mission/_res/html/index.html",
                controller:"missionCtrl"
            },"menu@root.schedulejob" : {
                templateUrl : "root/schedulejob/mission/_res/html/menu.html",
                controller:"missionMenuCtrl"
            }
        }
    }).state("root.schedulejob.mission.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.schedulejob.mission":{
                templateUrl : "root/schedulejob/mission/list/_res/html/index.html",
                controller:'missionListCtrl'
            }
        }
    }).state("root.schedulejob.mission.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.schedulejob.mission":{
                templateUrl : "root/schedulejob/mission/add/_res/html/index.html",
                controller:'missionAddCtrl'
            }
        }
    }).state("root.schedulejob.mission.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.schedulejob.mission":{
                templateUrl : "root/schedulejob/mission/edit/_res/html/index.html",
                controller:'missionEditCtrl'
            }
        }
    })
});