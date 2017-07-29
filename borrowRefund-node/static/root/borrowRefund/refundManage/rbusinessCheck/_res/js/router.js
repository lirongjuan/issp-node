var app = angular.module('rbusinessCheck', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.refundManage.rbusinessCheck", {
        url : "/rbusinessCheck",
        views : {  
            "content@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/rbusinessCheck/_res/html/index.html",
                controller:"rbusinessCheckCtrl"
            },"menu@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/rbusinessCheck/_res/html/menu.html",
                controller:"rbusinessCheckMenuCtrl"
            }
        }
    }).state("root.borrowRefund.refundManage.rbusinessCheck.list[12]",{
        url:"/list[12]?id=&name=&page=&reimer=&reimNumber=&startTime=&endTime=",
        views:{
            "content@root.borrowRefund.refundManage.rbusinessCheck":{
                templateUrl : "root/borrowRefund/refundManage/rbusinessCheck/list/_res/html/index.html",
                controller:'rbusinessCheckListCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.rbusinessCheck.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.borrowRefund.refundManage.rbusinessCheck":{
                templateUrl : "root/borrowRefund/refundManage/rbusinessCheck/edit/_res/html/index.html",
                controller:'rbusinessCheckeditCtrl'
            }
        }
    })
});