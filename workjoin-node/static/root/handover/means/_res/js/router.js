var app = angular.module('means', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.handover.means", {
        url : "/means",
        views : {
            "content@root.handover" : {
                templateUrl : "root/handover/means/_res/html/index.html",
                controller:"meansCtrl"
            },"menu@root.handover" : {
                templateUrl : "root/handover/means/_res/html/menu.html",
                controller:"meansMenuCtrl"
            }
        }
    }).state("root.handover.means.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.handover.means":{
                templateUrl : "root/handover/means/add/_res/html/index.html",
                controller:'meansAddCtrl'
            }
        }
    }).state("root.handover.means.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.handover.means":{
                templateUrl : "root/handover/means/edit/_res/html/index.html",
                controller:'meansEditCtrl'
            }
        }
    }).state("root.handover.means.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.handover.means":{
                templateUrl : "root/handover/means/upload/_res/html/index.html",
                controller:'meansUploadCtrl'
            }
        }
    }).state("root.handover.means.download[12]",{
        url:"/download[12]?id=",
        views:{
            "content@root.handover.means":{
                templateUrl : "root/handover/means/download/_res/html/index.html",
                controller:'meansDownloadCtrl'
            }
        }
    })
});