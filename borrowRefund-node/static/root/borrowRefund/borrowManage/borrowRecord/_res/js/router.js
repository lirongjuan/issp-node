var app = angular.module('borrowRecord', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.borrowManage.borrowRecord", {
        url : "/borrowRecord",
        views : {  
            "content@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/borrowRecord/_res/html/index.html",
                controller:"borrowRecordCtrl"
            },"menu@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/borrowRecord/_res/html/menu.html",
                controller:"borrowRecordMenuCtrl"
            }
        }
    }).state("root.borrowRefund.borrowManage.borrowRecord.list[12]",{
        url:"/list[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.borrowRecord":{
                templateUrl : "root/borrowRefund/borrowManage/borrowRecord/list/_res/html/index.html",
                controller:'borrowRecordListCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.borrowRecord.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.borrowRecord":{
                templateUrl : "root/borrowRefund/borrowManage/borrowRecord/edit/_res/html/index.html",
                controller:'borrowRecordeditCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.borrowRecord.editSend[12]",{
        url:"/editSend[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.borrowRecord":{
                templateUrl : "root/borrowRefund/borrowManage/borrowRecord/editSend/_res/html/index.html",
                controller:'editSendCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.borrowRecord.voucher[12]",{
        url:"/voucher[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.borrowRecord":{
                templateUrl : "root/borrowRefund/borrowManage/borrowRecord/voucher/_res/html/index.html",
                controller:'voucherCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.borrowRecord.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.borrowRefund.borrowManage.borrowRecord":{
                templateUrl : "root/borrowRefund/borrowManage/borrowRecord/export/_res/html/index.html",
                controller:'borrowRecordExportCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.borrowRecord.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.borrowRecord":{
                templateUrl : "root/borrowRefund/borrowManage/borrowRecord/upload/_res/html/index.html",
                controller:'borrowRecordUploadCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.borrowRecord.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.borrowRefund.borrowManage.borrowRecord":{
                templateUrl : "root/borrowRefund/borrowManage/borrowRecord/view/_res/html/index.html",
                controller:'borrowRecordViewCtrl'
            }
        }
    })
});