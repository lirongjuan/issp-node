var app = angular.module('plan', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.personal.plan", {
        url : "/plan",
        views : {
            "content@root.personal" : {
                templateUrl : "root/personal/plan/_res/html/index.html",
                controller:"planCtrl"
            },"menu@root.personal" : {
                templateUrl : "root/personal/plan/_res/html/menu.html",
                controller:"planMenuCtrl"
            }
        }
    }).state("root.personal.plan.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.personal.plan":{
                templateUrl : "root/personal/plan/list/_res/html/index.html",
                controller:'planListCtrl'
            }
        }
    }).state("root.personal.plan.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.personal.plan":{
                templateUrl : "root/personal/plan/add/_res/html/index.html",
                controller:'planAddCtrl'
            }
        }
    }).state("root.personal.plan.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.personal.plan":{
                templateUrl : "root/personal/plan/edit/_res/html/index.html",
                controller:'planEditCtrl'
            }
        }
    }).state("root.personal.plan.aduit[12]", {
        url : "/aduit[12]?id=&page=",
        views : {
            "content@root.personal.plan" : {
                templateUrl : "root/personal/plan/aduit/_res/html/index.html",
                controller : 'planAduitCtrl'
            }
        }
    })
});