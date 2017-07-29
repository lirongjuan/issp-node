var app = angular.module('contractor', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.payment.contractor", {
        url : "/contractor",
        views : {
            "content@root.payment" : {
                templateUrl : "root/payment/contractor/_res/html/index.html",
                controller:"contractorCtrl"
            },"menu@root.payment" : {
                templateUrl : "root/payment/contractor/_res/html/menu.html",
                controller:"contractorMenuCtrl"
            }
        }
    }).state("root.payment.contractor.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.payment.contractor":{
                templateUrl : "root/payment/contractor/add/_res/html/index.html",
                controller:'contractorAddCtrl'
            }
        }
    }).state("root.payment.contractor.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.payment.contractor":{
                templateUrl : "root/payment/contractor/edit/_res/html/index.html",
                controller:'contractorEditCtrl'
            }
        }
    }).state("root.payment.contractor.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.payment.contractor":{
                templateUrl : "root/payment/contractor/list/_res/html/index.html",
                controller:'contractorListCtrl'
            }
        }
    })
});