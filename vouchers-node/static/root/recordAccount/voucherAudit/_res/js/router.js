var app = angular.module('voucherAudit', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recordAccount.voucherAudit", {
        url : "/voucherAudit",
        views : {
            "content@root.recordAccount" : {
                templateUrl : "root/recordAccount/voucherAudit/_res/html/index.html",
                controller:"voucherAuditCtrl"
            },"menu@root.recordAccount" : {
                templateUrl : "root/recordAccount/voucherAudit/_res/html/menu.html",
                controller:"voucherAuditMenuCtrl"
            }
        }
    }).state("root.recordAccount.voucherAudit.list[12]",{
        url:"/list[12]?id=&name=&page",
        views:{
            "content@root.recordAccount.voucherAudit":{
                templateUrl : "root/recordAccount/voucherAudit/list/_res/html/index.html",
                controller:'voucherAuditListCtrl'
            }
        }
    }).state("root.recordAccount.voucherAudit.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.recordAccount.voucherAudit":{
                templateUrl : "root/recordAccount/voucherAudit/edit/_res/html/index.html",
                controller:'voucherAuditEditCtrl'
            }
        }
    })
});