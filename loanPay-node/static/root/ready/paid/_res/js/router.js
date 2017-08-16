var app = angular.module('paid', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ready.paid", {
        url : "/paid",
        views : {
            "content@root.ready" : {
                templateUrl : "root/ready/paid/_res/html/index.html",
                controller:"paidCtrl"
            },"menu@root.ready" : {
                templateUrl : "root/ready/paid/_res/html/menu.html",
                controller:"paidMenuCtrl"
            }
        }
    }).state("root.ready.paid.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.ready.paid":{
                templateUrl : "root/ready/paid/list/_res/html/index.html",
                controller:'paidListCtrl'
            }
        }
    }).state("root.ready.paid.pay[12]",{
        url:"/pay[12]?id=&page=",
        views:{
            "content@root.ready.paid":{
                templateUrl : "root/ready/paid/pay/_res/html/index.html",
                controller:'paidPayCtrl'
            }
        }
    }).state("root.ready.paid.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.ready.paid":{
                templateUrl : "root/ready/paid/export/_res/html/index.html",
                controller:'paidExportCtrl'
            }
        }
    }).state("root.ready.paid.areaCollect[12]",{
        url:"/areaCollect[12]",
        views:{
            "content@root.ready.paid":{
                templateUrl : "root/ready/paid/areaCollect/_res/html/index.html",
                controller:'areaCollectCtrl'
            }
        }
    }).state("root.ready.paid.groupCollect[12]",{
        url:"/groupCollect[12]",
        views:{
            "content@root.ready.paid":{
                templateUrl : "root/ready/paid/groupCollect/_res/html/index.html",
                controller:'groupCollectCtrl'
            }
        }
    }).state("root.ready.paid.difference[12]",{
        url:"/difference[12]",
        views:{
            "content@root.ready.paid":{
                templateUrl : "root/ready/paid/difference/_res/html/index.html",
                controller:'differenceCtrl'
            }
        }
    })
});