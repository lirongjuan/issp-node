var app = angular.module('works', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.handover.works", {
        url : "/works",
        views : {
            "content@root.handover" : {
                templateUrl : "root/handover/works/_res/html/index.html",
                controller:"worksCtrl"
            },"menu@root.handover" : {
                templateUrl : "root/handover/works/_res/html/menu.html",
                controller:"worksMenuCtrl"
            }
        }
    }).state("root.handover.works.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.handover.works":{
                templateUrl : "root/handover/works/add/_res/html/index.html",
                controller:'worksAddCtrl'
            }
        }
    }).state("root.handover.works.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.handover.works":{
                templateUrl : "root/handover/works/edit/_res/html/index.html",
                controller:'worksEditCtrl'
            }
        }
    }).state("root.handover.works.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.handover.works":{
                templateUrl : "root/handover/works/upload/_res/html/index.html",
                controller:'worksUploadCtrl'
            }
        }
    }).state("root.handover.works.download[12]",{
        url:"/download[12]?id=",
        views:{
            "content@root.handover.works":{
                templateUrl : "root/handover/works/download/_res/html/index.html",
                controller:'worksDownloadCtrl'
            }
        }
    })
});