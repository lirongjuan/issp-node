var app = angular.module('tax', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.Industrial.tax", {
        url : "/tax",
        views : {
            "content@root.Industrial" : {
                templateUrl : "root/Industrial/tax/_res/html/index.html",
                controller:"taxCtrl"
            },"menu@root.Industrial" : {
                templateUrl : "root/Industrial/tax/_res/html/menu.html",
                controller:"taxMenuCtrl"
            }
        }
    }).state("root.Industrial.tax.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.Industrial.tax":{
                templateUrl : "root/Industrial/tax/list/_res/html/index.html",
                controller:'taxListCtrl'
            }
        }
    }).state("root.Industrial.tax.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.Industrial.tax":{
                templateUrl : "root/Industrial/tax/add/_res/html/index.html",
                controller:'taxAddCtrl'
            }
        }
    }).state("root.Industrial.tax.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.Industrial.tax":{
                templateUrl : "root/Industrial/tax/edit/_res/html/index.html",
                controller:'taxEditCtrl'
            }
        }
    }).state("root.Industrial.tax.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.Industrial.tax":{
                templateUrl : "root/Industrial/tax/upload/_res/html/index.html",
                controller:'taxUploadCtrl'
            }
        }
    }).state("root.Industrial.tax.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.Industrial.tax":{
                templateUrl : "root/Industrial/tax/view/_res/html/index.html",
                controller:'taxViewCtrl'
            }
        }
    })
});