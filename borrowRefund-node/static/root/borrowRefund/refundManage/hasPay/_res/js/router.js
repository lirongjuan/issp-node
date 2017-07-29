var app = angular.module('hasPay', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.refundManage.hasPay", {
        url : "/hasPay",
        views : {  
            "content@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/hasPay/_res/html/index.html",
                controller:"hasPayCtrl"
            },"menu@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/hasPay/_res/html/menu.html",
                controller:"hasPayMenuCtrl"
            }
        }
    }).state("root.borrowRefund.refundManage.hasPay.lender[12]",{
        url:"/lender[12]",
        views:{
            "content@root.borrowRefund.refundManage.hasPay":{
                templateUrl : "root/borrowRefund/refundManage/hasPay/lender/_res/html/index.html",
                controller:'lenderCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.hasPay.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.borrowRefund.refundManage.hasPay":{
                templateUrl : "root/borrowRefund/refundManage/hasPay/list/_res/html/index.html",
                controller:'hasPayListCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.hasPay.voucher[12]",{
        url:"/voucher[12]?id=",
        views:{
            "content@root.borrowRefund.refundManage.hasPay":{
                templateUrl : "root/borrowRefund/refundManage/hasPay/voucher/_res/html/index.html",
                controller:'hasPayVoucherCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.hasPay.pGroup[12]",{
        url:"/pGroup[12]",
        views:{
            "content@root.borrowRefund.refundManage.hasPay":{
                templateUrl : "root/borrowRefund/refundManage/hasPay/pGroup/_res/html/index.html",
                controller:'pGroupCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.hasPay.area[12]",{
        url:"/area[12]",
        views:{
            "content@root.borrowRefund.refundManage.hasPay":{
                templateUrl : "root/borrowRefund/refundManage/hasPay/area/_res/html/index.html",
                controller:'areaCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.hasPay.pName[12]",{
        url:"/pName[12]",
        views:{
            "content@root.borrowRefund.refundManage.hasPay":{
                templateUrl : "root/borrowRefund/refundManage/hasPay/pName/_res/html/index.html",
                controller:'pNameCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.hasPay.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.borrowRefund.refundManage.hasPay":{
                templateUrl : "root/borrowRefund/refundManage/hasPay/export/_res/html/index.html",
                controller:'hasPayExportCtrl'
            }
        }
    })
});