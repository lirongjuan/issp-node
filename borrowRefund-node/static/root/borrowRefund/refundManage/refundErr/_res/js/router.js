var app = angular.module('refundErr', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.refundManage.refundErr", {
        url : "/refundErr",
        views : {  
            "content@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/refundErr/_res/html/index.html",
                controller:"refundErrCtrl"
            },"menu@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/refundErr/_res/html/menu.html",
                controller:"refundErrMenuCtrl"
            }
        }
    }).state("root.borrowRefund.refundManage.refundErr.list[12]",{
        url:"/list[12]?id=&name=&page=&reimer=&reimNumber=&startTime=&endTime=",
        views:{
            "content@root.borrowRefund.refundManage.refundErr":{
                templateUrl : "root/borrowRefund/refundManage/refundErr/list/_res/html/index.html",
                controller:'refundErrListCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.refundErr.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.borrowRefund.refundManage.refundErr":{
                templateUrl : "root/borrowRefund/refundManage/refundErr/edit/_res/html/index.html",
                controller:'refundErreditCtrl'
            }
        }
    })
});