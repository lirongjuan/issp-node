var app = angular.module('capital', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ready.capital", {
        url : "/capital",
        views : {
            "content@root.ready" : {
                templateUrl : "root/ready/capital/_res/html/index.html",
                controller:"capitalCtrl"
            },"menu@root.ready" : {
                templateUrl : "root/ready/capital/_res/html/menu.html",
                controller:"capitalMenuCtrl"
            }
        }
    }).state("root.ready.capital.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.ready.capital":{
                templateUrl : "root/ready/capital/list/_res/html/index.html",
                controller:'capitalListCtrl'
            }
        }
    }).state("root.ready.capital.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.ready.capital":{
                templateUrl : "root/ready/capital/add/_res/html/index.html",
                controller:'capitalAddCtrl'
            }
        }
    }).state("root.ready.capital.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.ready.capital":{
                templateUrl : "root/ready/capital/edit/_res/html/index.html",
                controller:'capitalEditCtrl'
            }
        }
    }).state("root.ready.capital.areaCollect[12]",{
        url:"/areaCollect[12]",
        views:{
            "content@root.ready.capital":{
                templateUrl : "root/ready/capital/areaCollect/_res/html/index.html",
                controller:'areaCollectExportCtrl'
            }
        }
    }).state("root.ready.capital.groupCollect[12]",{
        url:"/groupCollect[12]",
        views:{
            "content@root.ready.capital":{
                templateUrl : "root/ready/capital/groupCollect/_res/html/index.html",
                controller:'groupCollectExportCtrl'
            }
        }
    })
});