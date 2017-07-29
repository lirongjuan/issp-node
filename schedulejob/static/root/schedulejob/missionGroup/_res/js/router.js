var app = angular.module('missionGroup', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.schedulejob.missionGroup", {
        url : "/missionGroup",
        views : {
            "content@root.schedulejob" : {
                templateUrl : "root/schedulejob/missionGroup/_res/html/index.html",
                controller:"missionGroupCtrl"
            },"menu@root.schedulejob" : {
                templateUrl : "root/schedulejob/missionGroup/_res/html/menu.html",
                controller:"missionGroupMenuCtrl"
            }
        }
    }).state("root.schedulejob.missionGroup.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.schedulejob.missionGroup":{
                templateUrl : "root/schedulejob/missionGroup/list/_res/html/index.html",
                controller:'missionGroupListCtrl'
            }
        }
    }).state("root.schedulejob.missionGroup.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.schedulejob.missionGroup":{
                templateUrl : "root/schedulejob/missionGroup/add/_res/html/index.html",
                controller:'missionGroupAddCtrl'
            }
        }
    }).state("root.schedulejob.missionGroup.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.schedulejob.missionGroup":{
                templateUrl : "root/schedulejob/missionGroup/edit/_res/html/index.html",
                controller:'missionGroupEditCtrl'
            }
        }
    })
});