var app = angular.module('hasAnalyze', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.borrowRefund.borrowManage.hasAnalyze", {
        url : "/hasAnalyze",
        views : {  
            "content@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/hasAnalyze/_res/html/index.html",
                controller:"hasAnalyzeCtrl"
            },"menu@root.borrowRefund.borrowManage" : {
                templateUrl : "root/borrowRefund/borrowManage/hasAnalyze/_res/html/menu.html",
                controller:"hasAnalyzeMenuCtrl"
            }
        }
    }).state("root.borrowRefund.borrowManage.hasAnalyze.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.borrowRefund.borrowManage.hasAnalyze":{
                templateUrl : "root/borrowRefund/borrowManage/hasAnalyze/list/_res/html/index.html",
                controller:'hasAnalyzeListCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.hasAnalyze.lender[12]",{
        url:"/lender[12]",
        views:{
            "content@root.borrowRefund.borrowManage.hasAnalyze":{
                templateUrl : "root/borrowRefund/borrowManage/hasAnalyze/lender/_res/html/index.html",
                controller:'lenderCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.hasAnalyze.pGroup[12]",{
        url:"/pGroup[12]",
        views:{
            "content@root.borrowRefund.borrowManage.hasAnalyze":{
                templateUrl : "root/borrowRefund/borrowManage/hasAnalyze/pGroup/_res/html/index.html",
                controller:'pGroupCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.hasAnalyze.area[12]",{
        url:"/area[12]",
        views:{
            "content@root.borrowRefund.borrowManage.hasAnalyze":{
                templateUrl : "root/borrowRefund/borrowManage/hasAnalyze/area/_res/html/index.html",
                controller:'areaCtrl'
            }
        }
    }).state("root.borrowRefund.borrowManage.hasAnalyze.pName[12]",{
        url:"/pName[12]",
        views:{
            "content@root.borrowRefund.borrowManage.hasAnalyze":{
                templateUrl : "root/borrowRefund/borrowManage/hasAnalyze/pName/_res/html/index.html",
                controller:'pNameCtrl'
            }
        }
    })
});