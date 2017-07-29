var app = angular.module('applyRecord', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.refundManage.applyRecord", {
        url : "/applyRecord",
        views : {  
            "content@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/applyRecord/_res/html/index.html",
                controller:"applyRecordCtrl"
            },"menu@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/applyRecord/_res/html/menu.html",
                controller:"applyRecordMenuCtrl"
            }
        }
    }).state("root.borrowRefund.refundManage.applyRecord.list[12]",{
        url:"/list[12]?id=&name=&page=&reimer=&reimNumber=&startTime=&endTime=",
        views:{
            "content@root.borrowRefund.refundManage.applyRecord":{
                templateUrl : "root/borrowRefund/refundManage/applyRecord/list/_res/html/index.html",
                controller:'applyRecordListCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.applyRecord.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.borrowRefund.refundManage.applyRecord":{
                templateUrl : "root/borrowRefund/refundManage/applyRecord/add/_res/html/index.html",
                controller:'applyRecordAddCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.applyRecord.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.borrowRefund.refundManage.applyRecord":{
                templateUrl : "root/borrowRefund/refundManage/applyRecord/edit/_res/html/index.html",
                controller:'applyRecordeditCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.applyRecord.auditDetail[12]",{
        url:"/auditDetail[12]?id=&page=",
        views:{
            "content@root.borrowRefund.refundManage.applyRecord":{
                templateUrl : "root/borrowRefund/refundManage/applyRecord/auditDetail/_res/html/index.html",
                controller:'auditDetailCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.applyRecord.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.borrowRefund.refundManage.applyRecord":{
                templateUrl : "root/borrowRefund/refundManage/applyRecord/upload/_res/html/index.html",
                controller:'applyRecordUploadCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.applyRecord.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.borrowRefund.refundManage.applyRecord":{
                templateUrl : "root/borrowRefund/refundManage/applyRecord/view/_res/html/index.html",
                controller:'applyRecordViewCtrl'
            }
        }
    })
});