var app = angular.module('apply', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.tenement.apply", {
        url : "/apply",
        views : {
            "content@root.tenement" : {
                templateUrl : "root/tenement/apply/_res/html/index.html",
                controller:"applyCtrl"
            },"menu@root.tenement" : {
                templateUrl : "root/tenement/apply/_res/html/menu.html",
                controller:"applyMenuCtrl"
            }
        }
    }).state("root.tenement.apply.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.tenement.apply":{
                templateUrl : "root/tenement/apply/list/_res/html/index.html",
                controller:'applyListCtrl'
            }
        }
    }).state("root.tenement.apply.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.tenement.apply":{
                templateUrl : "root/tenement/apply/add/_res/html/index.html",
                controller:'applyAddCtrl'
            }
        }
    }).state("root.tenement.apply.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.tenement.apply":{
                templateUrl : "root/tenement/apply/edit/_res/html/index.html",
                controller:'applyEditCtrl'
            }
        }
    }).state("root.tenement.apply.finance[12]",{
        url:"/finance[12]?id=&page=",
        views:{
            "content@root.tenement.apply":{
                templateUrl : "root/tenement/apply/finance/_res/html/index.html",
                controller:'applyfinanceCtrl'
            }
        }
    }).state("root.tenement.apply.business[12]",{
        url:"/business[12]?id=&page=",
        views:{
        "content@root.tenement.apply":{
            templateUrl : "root/tenement/apply/business/_res/html/index.html",
                controller:'applyBusinessCtrl'
        }
    }
    }).state("root.tenement.apply.resource[12]", {
        url : "/resource[12]?id=&page=",
        views : {
            "content@root.tenement.apply" : {
                templateUrl : "root/tenement/apply/resource/_res/html/index.html",
                controller : 'applyResourceCtrl'
            }
        }
    }).state("root.tenement.apply.manager[12]", {
    url : "/manager[12]?id=&page=",
        views : {
        "content@root.tenement.apply" : {
            templateUrl : "root/tenement/apply/manager/_res/html/index.html",
                controller : 'applyManagerCtrl'
        }
    }
   }).state("root.tenement.apply.info[12]",{
        url:"/info[12]?id=&page=",
        views:{
            "content@root.tenement.apply":{
                templateUrl : "root/tenement/apply/info/_res/html/index.html",
                controller:'applyInfoCtrl'
            }
        }
    }).state("root.tenement.apply.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.tenement.apply":{
                templateUrl : "root/tenement/apply/export/_res/html/index.html",
                controller:'applyExportCtrl'
            }
        }
    })
});