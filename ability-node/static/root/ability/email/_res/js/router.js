var app = angular.module('email', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.ability.email", {
        url : "/email",
        views : {
            "content@root.ability" : {
                templateUrl : "root/ability/email/_res/html/index.html",
                controller:"emailCtrl"
            },"menu@root.ability" : {
                templateUrl : "root/ability/email/_res/html/menu.html",
                controller:"emailMenuCtrl"
            }
        }
    }).state("root.ability.email.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.ability.email":{
                templateUrl : "root/ability/email/add/_res/html/index.html",
                controller:'emailAddCtrl'
            }
        }
    }).state("root.ability.email.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.ability.email":{
                templateUrl : "root/ability/email/edit/_res/html/index.html",
                controller:'emailEditCtrl'
            }
        }
    }).state("root.ability.email.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.ability.email":{
                templateUrl : "root/ability/email/summary/_res/html/index.html",
                controller:'emailSummaryCtrl'
            }
        }
    }).state("root.ability.email.person[12]",{
        url:"/person[12]",
        views:{
            "content@root.ability.email":{
                templateUrl : "root/ability/email/person/_res/html/index.html",
                controller:'emailPersonCtrl'
            }
        }
    }).state("root.ability.email.cooperationone[12]",{
        url:"/cooperationone[12]",
        views:{
            "content@root.ability.email":{
                templateUrl : "root/ability/email/cooperationone/_res/html/index.html",
                controller:'emailCooperationOneCtrl'
            }
        }
    }).state("root.ability.email.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.ability.email":{
                templateUrl : "root/ability/email/list/_res/html/index.html",
                controller:'emailListCtrl'
            }
        }
    })
});