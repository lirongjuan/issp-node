var app = angular.module('awaitpay', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ready.awaitpay", {
        url : "/awaitpay",
        views : {
            "content@root.ready" : {
                templateUrl : "root/ready/awaitpay/_res/html/index.html",
                controller:"awaitpayCtrl"
            },"menu@root.ready" : {
                templateUrl : "root/ready/awaitpay/_res/html/menu.html",
                controller:"awaitpayMenuCtrl"
            }
        }
    }).state("root.ready.awaitpay.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.ready.awaitpay":{
                templateUrl : "root/ready/awaitpay/list/_res/html/index.html",
                controller:'awaitpayListCtrl'
            }
        }
    }).state("root.ready.awaitpay.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.ready.awaitpay":{
                templateUrl : "root/ready/awaitpay/add/_res/html/index.html",
                controller:'awaitpayAddCtrl'
            }
        }
    }).state("root.ready.awaitpay.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.ready.awaitpay":{
                templateUrl : "root/ready/awaitpay/edit/_res/html/index.html",
                controller:'awaitpayEditCtrl'
             }
        }
    })
});