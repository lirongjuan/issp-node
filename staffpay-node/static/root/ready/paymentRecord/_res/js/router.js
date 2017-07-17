var app = angular.module('paymentRecord', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ready.paymentRecord", {
        url : "/paymentRecord",
        views : {
            "content@root.ready" : {
                templateUrl : "root/ready/paymentRecord/_res/html/index.html",
                controller:"paymentRecordCtrl"
            },"menu@root.ready" : {
                templateUrl : "root/ready/paymentRecord/_res/html/menu.html",
                controller:"paymentRecordMenuCtrl"
            }
        }
    }).state("root.ready.paymentRecord.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.ready.paymentRecord":{
                templateUrl : "root/ready/paymentRecord/list/_res/html/index.html",
                controller:'paymentRecordListCtrl'
            }
        }
    }).state("root.ready.paymentRecord.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.ready.paymentRecord":{
                templateUrl : "root/ready/paymentRecord/collect/_res/html/index.html",
                controller:'paymentCollectCtrl'
            }
        }
    }).state("root.ready.paymentRecord.areaCollect[12]",{
        url:"/areaCollect[12]",
        views:{
            "content@root.ready.paymentRecord":{
                templateUrl : "root/ready/paymentRecord/areaCollect/_res/html/index.html",
                controller:'areaCollectCtrl'
            }
        }
    }).state("root.ready.paymentRecord.departCollect[12]",{
        url:"/departCollect[12]",
        views:{
            "content@root.ready.paymentRecord":{
                templateUrl : "root/ready/paymentRecord/departCollect/_res/html/index.html",
                controller:'departCollectCtrl'
            }
        }
    })

});