var app = angular.module('detail', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.payment.detail", {
        url : "/detail",
        views : {
            "content@root.payment" : {
                templateUrl : "root/payment/detail/_res/html/index.html",
                controller:"detailCtrl"
            },"menu@root.payment" : {
                templateUrl : "root/payment/detail/_res/html/menu.html",
                controller:"detailMenuCtrl"
            }
        }
    }).state("root.payment.detail.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.payment.detail":{
                templateUrl : "root/payment/detail/add/_res/html/index.html",
                controller:'detailAddCtrl'
            }
        }
    }).state("root.payment.detail.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.payment.detail":{
                templateUrl : "root/payment/detail/edit/_res/html/index.html",
                controller:'detailEditCtrl'
            }
        }
    }).state("root.payment.detail.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.payment.detail":{
                templateUrl : "root/payment/detail/summary/_res/html/index.html",
                controller:'detailSummaryCtrl'
            }
        }
    }).state("root.payment.detail.prosummary[12]",{
        url:"/prosummary[12]",
        views:{
            "content@root.payment.detail":{
                templateUrl : "root/payment/detail/prosummary/_res/html/index.html",
                controller:'detailProSummaryCtrl'
            }
        }
    }).state("root.payment.detail.genSummary[12]",{
        url:"/genSummary[12]",
        views:{
            "content@root.payment.detail":{
                templateUrl : "root/payment/detail/genSummary/_res/html/index.html",
                controller:'detailProSummaryCtrl'
            }
        }
    }).state("root.payment.detail.settlement[12]",{
        url:"/settlement[12]?id=&page=",
        views:{
            "content@root.payment.detail":{
                templateUrl : "root/payment/detail/settlement/_res/html/index.html",
                controller:'settlementCtrl'
            }
        }
    }).state("root.payment.detail.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.payment.detail":{
                templateUrl : "root/payment/detail/list/_res/html/index.html",
                controller:'detailListCtrl'
            }
        }
    }).state("root.payment.detail.time[12]",{
        url:"/time[12]?id=&page=",
        views:{
            "content@root.payment.detail":{
                templateUrl : "root/payment/detail/time/_res/html/index.html",
                controller:'timeCtrl'
            }
        }
    }).state("root.payment.detail.collect[12]",{
        url:"/collect[12]?suId=&name=",
        views:{
            "content@root.payment.detail":{
                templateUrl : "root/payment/detail/collect/_res/html/index.html",
                controller:'detailCollectCtrl'
            }
        }
    }).state("root.payment.detail.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.payment.detail":{
                templateUrl : "root/payment/detail/import/_res/html/index.html",
                controller:'detailImportCtrl'
            }
        }
    }).state("root.payment.detail.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.payment.detail":{
                templateUrl : "root/payment/detail/export/_res/html/index.html",
                controller:'detailExportCtrl'
            }
        }
    }).state("root.payment.detail.contrast[12]",{
        url:"/contrast[12]",
        views:{
            "content@root.payment.detail":{
                templateUrl : "root/payment/detail/contrast/_res/html/index.html",
                controller:'detailContrastCtrl'
            }
        }
    })
});