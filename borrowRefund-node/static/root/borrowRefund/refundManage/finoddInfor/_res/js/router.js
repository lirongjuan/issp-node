var app = angular.module('finoddInfor', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.refundManage.finoddInfor", {
        url : "/finoddInfor",
        views : {  
            "content@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/finoddInfor/_res/html/index.html",
                controller:"finoddInforCtrl"
            },"menu@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/finoddInfor/_res/html/menu.html",
                controller:"finoddInforMenuCtrl"
            }
        }
    }).state("root.borrowRefund.refundManage.finoddInfor.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.borrowRefund.refundManage.finoddInfor":{
                templateUrl : "root/borrowRefund/refundManage/finoddInfor/list/_res/html/index.html",
                controller:'finoddInforListCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.finoddInfor.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.borrowRefund.refundManage.finoddInfor":{
                templateUrl : "root/borrowRefund/refundManage/finoddInfor/add/_res/html/index.html",
                controller:'addCtrl'
            }
        }
    })
});