var app = angular.module('analyze', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.refundManage.analyze", {
        url : "/analyze",
        views : {  
            "content@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/analyze/_res/html/index.html",
                controller:"analyzeCtrl"
            },"menu@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/analyze/_res/html/menu.html",
                controller:"analyzeMenuCtrl"
            }
        }
    }).state("root.borrowRefund.refundManage.analyze.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.borrowRefund.refundManage.analyze":{
                templateUrl : "root/borrowRefund/refundManage/analyze/add/_res/html/index.html",
                controller:'analyzeAddCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.analyze.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.borrowRefund.refundManage.analyze":{
                templateUrl : "root/borrowRefund/refundManage/analyze/list/_res/html/index.html",
                controller:'analyzeListCtrl'
            }
        }
    }).state("root.borrowRefund.refundManage.analyze.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.borrowRefund.refundManage.analyze":{
                templateUrl : "root/borrowRefund/refundManage/analyze/edit/_res/html/index.html",
                controller:'analyzeEditCtrl'
            }
        }
    })
});