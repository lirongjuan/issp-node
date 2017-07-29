var app = angular.module('rhasAudit', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.refundManage.rhasAudit", {
        url : "/rhasAudit",
        views : {  
            "content@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/rhasAudit/_res/html/index.html",
                controller:"rhasAuditCtrl"
            },"menu@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/rhasAudit/_res/html/menu.html",
                controller:"rhasAuditMenuCtrl"
            }
        }
    }).state("root.borrowRefund.refundManage.rhasAudit.list[12]",{
        url:"/list[12]?id=&name=&page=&reimer=&reimNumber=&startTime=&endTime=",
        views:{
            "content@root.borrowRefund.refundManage.rhasAudit":{
                templateUrl : "root/borrowRefund/refundManage/rhasAudit/list/_res/html/index.html",
                controller:'rhasAuditListCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.rhasAudit.chargerAudit[12]",{
        url:"/chargerAudit[12]?id=&page=",
        views:{
            "content@root.borrowRefund.refundManage.rhasAudit":{
                templateUrl : "root/borrowRefund/refundManage/rhasAudit/chargerAudit/_res/html/index.html",
                controller:'chargerAuditCtrl'
            }
        }
    })
});