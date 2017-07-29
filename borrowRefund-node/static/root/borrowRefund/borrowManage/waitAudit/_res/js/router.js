var app = angular.module('waitAudit', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.borrowManage.waitAudit", {
        url : "/waitAudit",
        views : {  
            "content@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/waitAudit/_res/html/index.html",
                controller:"waitAuditCtrl"
            },"menu@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/waitAudit/_res/html/menu.html",
                controller:"waitAuditMenuCtrl"
            }
        }
    }).state("root.borrowRefund.borrowManage.waitAudit.list[12]",{
        url:"/list[12]?id=&name=&page=&lender=&charger=&lendDate=&estimateLendDate=",
        views:{
            "content@root.borrowRefund.borrowManage.waitAudit":{
                templateUrl : "root/borrowRefund/borrowManage/waitAudit/list/_res/html/index.html",
                controller:'waitAuditListCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.waitAudit.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.waitAudit":{
                templateUrl : "root/borrowRefund/borrowManage/waitAudit/edit/_res/html/index.html",
                controller:'waitAuditeditCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.waitAudit.auditDetail[12]",{
        url:"/auditDetail[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.waitAudit":{
                templateUrl : "root/borrowRefund/borrowManage/waitAudit/auditDetail/_res/html/index.html",
                controller:'auditDetailCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.waitAudit.chargerAudit[12]",{
        url:"/chargerAudit[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.waitAudit":{
                templateUrl : "root/borrowRefund/borrowManage/waitAudit/chargerAudit/_res/html/index.html",
                controller:'chargerAuditCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.waitAudit.manageAudit[12]",{
        url:"/manageAudit[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.waitAudit":{
                templateUrl : "root/borrowRefund/borrowManage/waitAudit/manageAudit/_res/html/index.html",
                controller:'manageAuditCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.waitAudit.financeAudit[12]",{
        url:"/financeAudit[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.waitAudit":{
                templateUrl : "root/borrowRefund/borrowManage/waitAudit/financeAudit/_res/html/index.html",
                controller:'financeAuditCtrl'
            }
        }
    })
});