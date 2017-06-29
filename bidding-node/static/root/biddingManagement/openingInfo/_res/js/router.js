var app = angular.module('openingInfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.openingInfo", {
        url : "/openingInfo",
        views : {
            "content@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/openingInfo/_res/html/index.html",
                controller:"openingCtrl"
            },"menu@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/openingInfo/_res/html/menu.html",
                controller:"openingMenuCtrl"
            }
        }
    }).state("root.biddingManagement.openingInfo.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.biddingManagement.openingInfo":{
                templateUrl : "root/biddingManagement/openingInfo/list/_res/html/index.html",
                controller:'openingListCtrl'
            }
        }
    }).state("root.biddingManagement.openingInfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.biddingManagement.openingInfo":{
                templateUrl : "root/biddingManagement/openingInfo/add/_res/html/index.html",
                controller:'openingAddCtrl'
            }
        }
    }).state("root.biddingManagement.openingInfo.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.biddingManagement.openingInfo":{
                templateUrl : "root/biddingManagement/openingInfo/edit/_res/html/index.html",
                controller:'openingEditCtrl'
            }
        }
    }).state("root.biddingManagement.openingInfo.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.biddingManagement.openingInfo":{
                templateUrl : "root/biddingManagement/openingInfo/summary/_res/html/index.html",
                controller:'summaryCtrl'
            }
        }
    }).state("root.biddingManagement.openingInfo.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.biddingManagement.openingInfo":{
                templateUrl : "root/biddingManagement/openingInfo/export/_res/html/index.html",
                controller:'exportCtrl'
            }
        }
    })
});