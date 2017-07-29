var app = angular.module('obligations', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.handover.obligations", {
        url : "/obligations",
        views : {
            "content@root.handover" : {
                templateUrl : "root/handover/obligations/_res/html/index.html",
                controller:"obligationsCtrl"
            },"menu@root.handover" : {
                templateUrl : "root/handover/obligations/_res/html/menu.html",
                controller:"obligationsMenuCtrl"
            }
        }
    }).state("root.handover.obligations.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.handover.obligations":{
                templateUrl : "root/handover/obligations/add/_res/html/index.html",
                controller:'obligationsAddCtrl'
            }
        }
    }).state("root.handover.obligations.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.handover.obligations":{
                templateUrl : "root/handover/obligations/edit/_res/html/index.html",
                controller:'obligationsEditCtrl'
            }
        }
    }).state("root.handover.obligations.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.handover.obligations":{
                templateUrl : "root/handover/obligations/upload/_res/html/index.html",
                controller:'obligationsUploadCtrl'
            }
        }
    }).state("root.handover.obligations.download[12]",{
        url:"/download[12]?id=",
        views:{
            "content@root.handover.obligations":{
                templateUrl : "root/handover/obligations/download/_res/html/index.html",
                controller:'obligationsDownloadCtrl'
            }
        }
    })
});