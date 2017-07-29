var app = angular.module('rwaitPayment', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.refundManage.rwaitPayment", {
        url : "/rwaitPayment",
        views : {  
            "content@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/rwaitPayment/_res/html/index.html",
                controller:"rwaitPaymentCtrl"
            },"menu@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/rwaitPayment/_res/html/menu.html",
                controller:"rwaitPaymentMenuCtrl"
            }
        }
    }).state("root.borrowRefund.refundManage.rwaitPayment.list[12]",{
        url:"/list[12]?page=&reimer=&reimNumber=&startTime=&endTime=",
        views:{
            "content@root.borrowRefund.refundManage.rwaitPayment":{
                templateUrl : "root/borrowRefund/refundManage/rwaitPayment/list/_res/html/index.html",
                controller:'rwaitPaymentListCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.rwaitPayment.predict[12]",{
        url:"/predict[12]?id=&page=",
        views:{
            "content@root.borrowRefund.refundManage.rwaitPayment":{
                templateUrl : "root/borrowRefund/refundManage/rwaitPayment/predict/_res/html/index.html",
                controller:'rwaitPaymentPredictCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.rwaitPayment.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.borrowRefund.refundManage.rwaitPayment":{
                templateUrl : "root/borrowRefund/refundManage/rwaitPayment/edit/_res/html/index.html",
                controller:'rwaitPaymentEditCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.rwaitPayment.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.borrowRefund.refundManage.rwaitPayment":{
                templateUrl : "root/borrowRefund/refundManage/rwaitPayment/export/_res/html/index.html",
                controller:'rwaitPaymentExportCtrl'
            }
        }
    })
});