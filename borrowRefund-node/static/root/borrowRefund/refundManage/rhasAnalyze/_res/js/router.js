var app = angular.module('rhasAnalyze', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.refundManage.rhasAnalyze", {
        url : "/rhasAnalyze",
        views : {  
            "content@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/rhasAnalyze/_res/html/index.html",
                controller:"rhasAnalyzeCtrl"
            },"menu@root.borrowRefund.refundManage" : {
                templateUrl : "root/borrowRefund/refundManage/rhasAnalyze/_res/html/menu.html",
                controller:"rhasAnalyzeMenuCtrl"
            }
        }
    }).state("root.borrowRefund.refundManage.rhasAnalyze.list[12]",{
        url:"/list[12]?page=&id=&reimer=&reimNumber=&startTime=&endTime=",
        views:{
            "content@root.borrowRefund.refundManage.rhasAnalyze":{
                templateUrl : "root/borrowRefund/refundManage/rhasAnalyze/list/_res/html/index.html",
                controller:'rhasAnalyzeListCtrl'
            }
        }
    })
});