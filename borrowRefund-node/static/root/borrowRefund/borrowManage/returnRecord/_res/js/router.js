var app = angular.module('returnRecord', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.borrowManage.returnRecord", {
        url : "/returnRecord",
        views : {  
            "content@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/returnRecord/_res/html/index.html",
                controller:"returnRecordCtrl"
            },"menu@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/returnRecord/_res/html/menu.html",
                controller:"returnRecordMenuCtrl"
            }
        }
    }).state("root.borrowRefund.borrowManage.returnRecord.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.borrowRefund.borrowManage.returnRecord":{
                templateUrl : "root/borrowRefund/borrowManage/returnRecord/list/_res/html/index.html",
                controller:'returnRecordListCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.returnRecord.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.returnRecord":{
                templateUrl : "root/borrowRefund/borrowManage/returnRecord/edit/_res/html/index.html",
                controller:'returnRecordeditCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.returnRecord.voucher[12]",{
        url:"/voucher[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.returnRecord":{
                templateUrl : "root/borrowRefund/borrowManage/returnRecord/voucher/_res/html/index.html",
                controller:'voucherCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.returnRecord.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.borrowRefund.borrowManage.returnRecord":{
                templateUrl : "root/borrowRefund/borrowManage/returnRecord/export/_res/html/index.html",
                controller:'returnRecordExportCtrl'
            }
        }
    })
});