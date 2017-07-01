var app = angular.module('email', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectProcessed.email", {
        url : "/email",
        views : {
            "content@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/email/_res/html/index.html",
                controller:"emailCtrl"
            },"menu@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/email/_res/html/menu.html",
                controller:"emailMenuCtrl"
            }
        }
    }).state("root.projectProcessed.email.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.projectProcessed.email":{
                templateUrl : "root/projectProcessed/email/list/_res/html/index.html",
                controller:'emailListCtrl'
            }
        }
    }).state("root.projectProcessed.email.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectProcessed.email":{
                templateUrl : "root/projectProcessed/email/add/_res/html/index.html",
                controller:'emailAddCtrl'
            }
        }
    }).state("root.projectProcessed.email.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.projectProcessed.email":{
                templateUrl : "root/projectProcessed/email/summary/_res/html/index.html",
                controller:'summaryCtrl'
            }
        }
    }).state("root.projectProcessed.email.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectProcessed.email":{
                templateUrl : "root/projectProcessed/email/edit/_res/html/index.html",
                controller:'emailEditCtrl'
            }
        }
    })
});