var app = angular.module('email', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.marketActivity.email", {
        url : "/email",
        views : {
            "content@root.marketActivity" : {
                templateUrl : "root/marketActivity/email/_res/html/index.html",
                controller:"emailCtrl"
            },"menu@root.marketActivity" : {
                templateUrl : "root/marketActivity/email/_res/html/menu.html",
                controller:"emailMenuCtrl"
            }
        }
    }).state("root.marketActivity.email.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.marketActivity.email":{
                templateUrl : "root/marketActivity/email/list/_res/html/index.html",
                controller:'emailListCtrl'
            }
        }
    }).state("root.marketActivity.email.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.marketActivity.email":{
                templateUrl : "root/marketActivity/email/add/_res/html/index.html",
                controller:'emailAddCtrl'
            }
        }
    }).state("root.marketActivity.email.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.marketActivity.email":{
                templateUrl : "root/marketActivity/email/edit/_res/html/index.html",
                controller:'emailEditCtrl'
            }
        }
    }).state("root.marketActivity.email.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.marketActivity.email":{
                templateUrl : "root/marketActivity/email/collect/_res/html/index.html",
                controller:'emailCollectCtrl'
            }
        }
    })
});