var app = angular.module('tenderMaterial', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.tenderMaterial", {
        url : "/tenderMaterial",
        views : {
            "content@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/tenderMaterial/_res/html/index.html",
                controller:"MaterialCtrl"
            },"menu@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/tenderMaterial/_res/html/menu.html",
                controller:"MaterialMenuCtrl"
            }
        }
    }).state("root.biddingManagement.tenderMaterial.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.biddingManagement.tenderMaterial":{
                templateUrl : "root/biddingManagement/tenderMaterial/list/_res/html/index.html",
                controller:'MaterialListCtrl'
            }
        }
    }).state("root.biddingManagement.tenderMaterial.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.biddingManagement.tenderMaterial":{
                templateUrl : "root/biddingManagement/tenderMaterial/add/_res/html/index.html",
                controller:'MaterialAddCtrl'
            }
        }
    }).state("root.biddingManagement.tenderMaterial.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.biddingManagement.tenderMaterial":{
                templateUrl : "root/biddingManagement/tenderMaterial/edit/_res/html/index.html",
                controller:'MaterialEditCtrl'
            }
        }
    }).state("root.biddingManagement.tenderMaterial.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.biddingManagement.tenderMaterial":{
                templateUrl : "root/biddingManagement/tenderMaterial/export/_res/html/index.html",
                controller:'MaterialExportCtrl'
            }
        }
    }).state("root.biddingManagement.tenderMaterial.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.biddingManagement.tenderMaterial":{
                templateUrl : "root/biddingManagement/tenderMaterial/upload/_res/html/index.html",
                controller:'MaterialUploadCtrl'
            }
        }
    }).state("root.biddingManagement.tenderMaterial.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.biddingManagement.tenderMaterial":{
                templateUrl : "root/biddingManagement/tenderMaterial/view/_res/html/index.html",
                controller:'MaterialViewCtrl'
            }
        }
    })
});