var app = angular.module('websiteInfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.websiteInfo", {
        url : "/websiteInfo",
        views : {
            "content@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/websiteInfo/_res/html/index.html",
                controller:"websiteCtrl"
            },"menu@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/websiteInfo/_res/html/menu.html",
                controller:"websiteMenuCtrl"
            }
        }
    }).state("root.biddingManagement.websiteInfo.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.biddingManagement.websiteInfo":{
                templateUrl : "root/biddingManagement/websiteInfo/list/_res/html/index.html",
                controller:'websiteListCtrl'
            }
        }
    }).state("root.biddingManagement.websiteInfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.biddingManagement.websiteInfo":{
                templateUrl : "root/biddingManagement/websiteInfo/add/_res/html/index.html",
                controller:'websiteAddCtrl'
            }
        }
    }).state("root.biddingManagement.websiteInfo.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.biddingManagement.websiteInfo":{
                templateUrl : "root/biddingManagement/websiteInfo/edit/_res/html/index.html",
                controller:'webEditCtrl'
            }
        }
    })
});