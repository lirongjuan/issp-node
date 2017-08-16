var app = angular.module('waitpay', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ready.waitpay", {
        url : "/waitpay",
        views : {
            "content@root.ready" : {
                templateUrl : "root/ready/waitpay/_res/html/index.html",
                controller:"waitpayCtrl"
            },"menu@root.ready" : {
                templateUrl : "root/ready/waitpay/_res/html/menu.html",
                controller:"waitpayMenuCtrl"
            }
        }
    }).state("root.ready.waitpay.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.ready.waitpay":{
                templateUrl : "root/ready/waitpay/list/_res/html/index.html",
                controller:'waitpayListCtrl'
            }
        }
    }).state("root.ready.waitpay.pay[12]",{
        url:"/pay[12]?id=&page=",
        views:{
            "content@root.ready.waitpay":{
                templateUrl : "root/ready/waitpay/pay/_res/html/index.html",
                controller:'waitpayPayCtrl'
            }
        }
    }).state("root.ready.waitpay.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.ready.waitpay":{
                templateUrl : "root/ready/waitpay/export/_res/html/index.html",
                controller:'waitpayExportCtrl'
            }
        }
    })
});