var app = angular.module('rwaitAudit', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.refundManage.rwaitAudit", {
        url : "/rwaitAudit",
        views : {  
            "content@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/rwaitAudit/_res/html/index.html",
                controller:"rwaitAuditCtrl"
            },"menu@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/rwaitAudit/_res/html/menu.html",
                controller:"rwaitAuditMenuCtrl"
            }
        }
    }).state("root.borrowRefund.refundManage.rwaitAudit.list[12]",{
        url:"/list[12]?id=&name=&page=&reimer=&reimNumber=&startTime=&endTime=",
        views:{
            "content@root.borrowRefund.refundManage.rwaitAudit":{
                templateUrl : "root/borrowRefund/refundManage/rwaitAudit/list/_res/html/index.html",
                controller:'rwaitAuditListCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.rwaitAudit.chargerAudit[12]",{
        url:"/chargerAudit[12]?id=&page=",
        views:{
            "content@root.borrowRefund.refundManage.rwaitAudit":{
                templateUrl : "root/borrowRefund/refundManage/rwaitAudit/chargerAudit/_res/html/index.html",
                controller:'chargerAuditCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.rwaitAudit.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.borrowRefund.refundManage.rwaitAudit":{
                templateUrl : "root/borrowRefund/refundManage/rwaitAudit/upload/_res/html/index.html",
                controller:'rwaitAuditUploadCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.rwaitAudit.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.borrowRefund.refundManage.rwaitAudit":{
                templateUrl : "root/borrowRefund/refundManage/rwaitAudit/view/_res/html/index.html",
                controller:'rwaitAuditViewCtrl'
            }
        }
    })
});