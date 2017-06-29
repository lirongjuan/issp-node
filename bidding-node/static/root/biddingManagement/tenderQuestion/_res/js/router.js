var app = angular.module('tenderQuestion', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.tenderQuestion", {
        url : "/tenderQuestion",
        views : {
            "content@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/tenderQuestion/_res/html/index.html",
                controller:"questionCtrl"
            },"menu@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/tenderQuestion/_res/html/menu.html",
                controller:"questionMenuCtrl"
            }
        }
    }).state("root.biddingManagement.tenderQuestion.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.biddingManagement.tenderQuestion":{
                templateUrl : "root/biddingManagement/tenderQuestion/list/_res/html/index.html",
                controller:'questionListCtrl'
            }
        }
    }).state("root.biddingManagement.tenderQuestion.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.biddingManagement.tenderQuestion":{
                templateUrl : "root/biddingManagement/tenderQuestion/add/_res/html/index.html",
                controller:'questionAddCtrl'
            }
        }
    }).state("root.biddingManagement.tenderQuestion.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.biddingManagement.tenderQuestion":{
                templateUrl : "root/biddingManagement/tenderQuestion/export/_res/html/index.html",
                controller:'questionExportCtrl'
            }
        }
    }).state("root.biddingManagement.tenderQuestion.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.biddingManagement.tenderQuestion":{
                templateUrl : "root/biddingManagement/tenderQuestion/upload/_res/html/index.html",
                controller:'questionUploadCtrl'
            }
        }
    }).state("root.biddingManagement.tenderQuestion.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.biddingManagement.tenderQuestion":{
                templateUrl : "root/biddingManagement/tenderQuestion/view/_res/html/index.html",
                controller:'questionViewCtrl'
            }
        }    
    }).state("root.biddingManagement.tenderQuestion.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.biddingManagement.tenderQuestion":{
                templateUrl : "root/biddingManagement/tenderQuestion/edit/_res/html/index.html",
                controller:'questionEditCtrl'
            }
        }
    })
});