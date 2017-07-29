var app = angular.module('hasAudit', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.borrowManage.hasAudit", {
        url : "/hasAudit",
        views : {  
            "content@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/hasAudit/_res/html/index.html",
                controller:"hasAuditCtrl"
            },"menu@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/hasAudit/_res/html/menu.html",
                controller:"hasAuditMenuCtrl"
            }
        }
    }).state("root.borrowRefund.borrowManage.hasAudit.list[12]",{
        url:"/list[12]",
        views:{
            "modal@root.borrowRefund.borrowManage.hasAudit.list":{
                templateUrl : "root/borrowRefund/borrowManage/hasAudit/list/_res/html/index.html",
                controller:'hasAuditListCtrl'
            }
        }
    })
});