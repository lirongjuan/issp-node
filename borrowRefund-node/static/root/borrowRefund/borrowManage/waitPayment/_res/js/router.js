var app = angular.module('waitPayment', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.borrowManage.waitPayment", {
        url : "/waitPayment",
        views : {  
            "content@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/waitPayment/_res/html/index.html",
                controller:"waitPaymentCtrl"
            },"menu@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/waitPayment/_res/html/menu.html",
                controller:"waitPaymentMenuCtrl"
            }
        }
    }).state("root.borrowRefund.borrowManage.waitPayment.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.borrowRefund.borrowManage.waitPayment":{
                templateUrl : "root/borrowRefund/borrowManage/waitPayment/list/_res/html/index.html",
                controller:'waitPaymentListCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.waitPayment.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.borrowRefund.borrowManage.waitPayment":{
                templateUrl : "root/borrowRefund/borrowManage/waitPayment/edit/_res/html/index.html",
                controller:'waitPaymenteditCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.waitPayment.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.borrowRefund.borrowManage.waitPayment":{
                templateUrl : "root/borrowRefund/borrowManage/waitPayment/export/_res/html/index.html",
                controller:'waitPaymentExportCtrl'
            }
        }
    })
});