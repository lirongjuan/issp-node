var app = angular.module('applylend', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.borrowManage.applylend", {
        url : "/applylend",
        views : {  
            "content@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/applylend/_res/html/index.html",
                controller:"applylendCtrl"
            },"menu@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/applylend/_res/html/menu.html",
                controller:"applylendMenuCtrl"
            }
        }
    }).state("root.borrowRefund.borrowManage.applylend.list[12]",{
        url:"/list[12]?id=&name=&page=&lender=&charger=&lendDate=&estimateLendDate=",
        views:{
            "content@root.borrowRefund.borrowManage.applylend":{
                templateUrl : "root/borrowRefund/borrowManage/applylend/list/_res/html/index.html",
                controller:'applylendListCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.applylend.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.borrowRefund.borrowManage.applylend":{
                templateUrl : "root/borrowRefund/borrowManage/applylend/add/_res/html/index.html",
                controller:'applylendAddCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.applylend.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.applylend":{
                templateUrl : "root/borrowRefund/borrowManage/applylend/edit/_res/html/index.html",
                controller:'applylendeditCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.applylend.auditDetail[12]",{
        url:"/auditDetail[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.applylend":{
                templateUrl : "root/borrowRefund/borrowManage/applylend/auditDetail/_res/html/index.html",
                controller:'auditDetailCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.applylend.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.borrowRefund.borrowManage.applylend":{
                templateUrl : "root/borrowRefund/borrowManage/applylend/export/_res/html/index.html",
                controller:'applylendExportCtrl'
            }
        }
    })
});