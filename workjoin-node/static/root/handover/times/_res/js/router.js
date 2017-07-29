var app = angular.module('times', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.handover.times", {
        url : "/times",
        views : {
            "content@root.handover" : {
                templateUrl : "root/handover/times/_res/html/index.html",
                controller:"timesCtrl"
            },"menu@root.handover" : {
                templateUrl : "root/handover/times/_res/html/menu.html",
                controller:"timesMenuCtrl"
            }
        }
    }).state("root.handover.times.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.handover.times":{
                templateUrl : "root/handover/times/add/_res/html/index.html",
                controller:'timesAddCtrl'
            }
        }
    }).state("root.handover.times.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.handover.times":{
                templateUrl : "root/handover/times/edit/_res/html/index.html",
                controller:'timesEditCtrl'
            }
        }
    }).state("root.handover.times.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.handover.times":{
                templateUrl : "root/handover/times/upload/_res/html/index.html",
                controller:'timesUploadCtrl'
            }
        }
    }).state("root.handover.times.download[12]",{
        url:"/download[12]?id=",
        views:{
            "content@root.handover.times":{
                templateUrl : "root/handover/times/download/_res/html/index.html",
                controller:'timesDownloadCtrl'
            }
        }
    })
});