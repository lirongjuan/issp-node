var app = angular.module('plan', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.tenement.plan", {
        url : "/plan",
        views : {
            "content@root.tenement" : {
                templateUrl : "root/tenement/plan/_res/html/index.html",
                controller:"planCtrl"
            },"menu@root.tenement" : {
                templateUrl : "root/tenement/plan/_res/html/menu.html",
                controller:"planMenuCtrl"
            }
        }
    }).state("root.tenement.plan.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.tenement.plan":{
                templateUrl : "root/tenement/plan/list/_res/html/index.html",
                controller:'planListCtrl'
            }
        }
    }).state("root.tenement.plan.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.tenement.plan":{
                templateUrl : "root/tenement/plan/add/_res/html/index.html",
                controller:'planAddCtrl'
            }
        }
    }).state("root.tenement.plan.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.tenement.plan":{
                templateUrl : "root/tenement/plan/edit/_res/html/index.html",
                controller:'planEditCtrl'
            }
        }
    }).state("root.tenement.plan.finance[12]",{
        url:"/finance[12]?id=&page=",
        views:{
            "content@root.tenement.plan":{
                templateUrl : "root/tenement/plan/finance/_res/html/index.html",
                controller:'planfinanceCtrl'
            }
        }
    }).state("root.tenement.plan.business[12]",{
        url:"/business[12]?id=&page=",
        views:{
        "content@root.tenement.plan":{
            templateUrl : "root/tenement/plan/business/_res/html/index.html",
                controller:'planBusinessCtrl'
        }
    }
    }).state("root.tenement.plan.resource[12]", {
        url : "/resource[12]?id=&page=",
        views : {
            "content@root.tenement.plan" : {
                templateUrl : "root/tenement/plan/resource/_res/html/index.html",
                controller : 'planResourceCtrl'
            }
        }
    }).state("root.tenement.plan.manager[12]", {
    url : "/manager[12]?id=&page=",
        views : {
        "content@root.tenement.plan" : {
            templateUrl : "root/tenement/plan/manager/_res/html/index.html",
                controller : 'planManagerCtrl'
        }
    }
   }).state("root.tenement.plan.general[12]", {
    url : "/general[12]?id=&page=",
        views : {
        "content@root.tenement.plan" : {
            templateUrl : "root/tenement/plan/general/_res/html/index.html",
                controller : 'planGeneralCtrl'
        }
    }
})
});