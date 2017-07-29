var app = angular.module('applyErr', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.borrowManage.applyErr", {
        url : "/applyErr",
        views : {  
            "content@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/applyErr/_res/html/index.html",
                controller:"applyErrCtrl"
            },"menu@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/applyErr/_res/html/menu.html",
                controller:"applyErrMenuCtrl"
            }
        }
    }).state("root.borrowRefund.borrowManage.applyErr.list[12]",{
        url:"/list[12]?id=&name=&page=&lender=&charger=&lendDate=&estimateLendDate=",
        views:{
            "content@root.borrowRefund.borrowManage.applyErr":{
                templateUrl : "root/borrowRefund/borrowManage/applyErr/list/_res/html/index.html",
                controller:'applyErrListCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.applyErr.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.applyErr":{
                templateUrl : "root/borrowRefund/borrowManage/applyErr/edit/_res/html/index.html",
                controller:'applyErreditCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.applyErr.auditDetail[12]",{
        url:"/auditDetail[12]?id=&page=",
        views:{
            "content@root.borrowRefund.borrowManage.applyErr":{
                templateUrl : "root/borrowRefund/borrowManage/applyErr/auditDetail/_res/html/index.html",
                controller:'DetailCtrl'
            }
        }
    })
});