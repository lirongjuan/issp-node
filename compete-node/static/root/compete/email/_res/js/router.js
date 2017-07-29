var app = angular.module('email', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.email", {
        url : "/email",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/email/_res/html/index.html",
                controller:"emailCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/email/_res/html/menu.html",
                controller:"emailMenuCtrl"
            }
        }
    }).state("root.compete.email.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.compete.email":{
                templateUrl : "root/compete/email/list/_res/html/index.html",
                controller:'emailListCtrl'
            }
        }
    }).state("root.compete.email.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.compete.email":{
                templateUrl : "root/compete/email/add/_res/html/index.html",
                controller:'emailAddCtrl'
            }
        }
    }).state("root.compete.email.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.compete.email":{
                templateUrl : "root/compete/email/edit/_res/html/index.html",
                controller:'emailEditCtrl'
            }
        }
    }).state("root.compete.email.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.compete.email":{
                templateUrl : "root/compete/email/collect/_res/html/index.html",
                controller:'emailcollectCtrl'
            }
        }
    })
});