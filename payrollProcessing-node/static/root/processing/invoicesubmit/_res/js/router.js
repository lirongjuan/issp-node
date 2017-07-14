var app = angular.module('invoicesubmit', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.processing.invoicesubmit", {
        url : "/invoicesubmit",
        views : {
            "content@root.processing" : {
                templateUrl : "root/processing/invoicesubmit/_res/html/index.html",
                controller:"invoicesubmitCtrl"
            },"menu@root.processing" : {
                templateUrl : "root/processing/invoicesubmit/_res/html/menu.html",
                controller:"invoicesubmitMenuCtrl"
            }
        }
    }).state("root.processing.invoicesubmit.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.processing.invoicesubmit":{
                templateUrl : "root/processing/invoicesubmit/list/_res/html/index.html",
                controller:'invoicesubmitListCtrl'
            }
        }
    }).state("root.processing.invoicesubmit.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.processing.invoicesubmit":{
                templateUrl : "root/processing/invoicesubmit/add/_res/html/index.html",
                controller:'invoicesubmitAddCtrl'
            }
        }
    }).state("root.processing.invoicesubmit.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.processing.invoicesubmit":{
                templateUrl : "root/processing/invoicesubmit/edit/_res/html/index.html",
                controller:'invoicesubmitEditCtrl'
            }
        }
    })
});