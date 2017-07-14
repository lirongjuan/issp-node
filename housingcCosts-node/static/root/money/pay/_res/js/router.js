var app = angular.module('pay', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.money.pay", {
        url : "/pay",
        views : {
            "content@root.money" : {
                templateUrl : "root/money/pay/_res/html/index.html",
                controller:"paingCtrl"
            },"menu@root.money" : {
                templateUrl : "root/money/pay/_res/html/menu.html",
                controller:"paingMenuCtrl"
            }
        }
    }).state("root.money.pay.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.money.pay":{
                templateUrl : "root/money/pay/list/_res/html/index.html",
                controller:'paingListCtrl'
            }
        }

    }).state("root.money.pay.summaryArea[12]",{
        url:"/summaryArea[12]",
        views:{
            "content@root.money.pay":{
                templateUrl : "root/money/pay/summaryArea/_res/html/index.html",
                controller:'summaryAreaCtrl'
            }
        }
    }).state("root.money.pay.summaryProject[12]",{
        url:"/summaryProject[12]",
        views:{
            "content@root.money.pay":{
                templateUrl : "root/money/pay/summaryProject/_res/html/index.html",
                controller:'summaryProjectCtrl'
            }
        }
    })
});