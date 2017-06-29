var app = angular.module('email', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.biddingManagement.email", {
        url : "/email",
        views : {
            "content@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/email/_res/html/index.html",
                controller:"emailCtrl"
            },"menu@root.biddingManagement" : {
                templateUrl : "root/biddingManagement/email/_res/html/menu.html",
                controller:"emailMenuCtrl"
            }
        }
    }).state("root.biddingManagement.email.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.biddingManagement.email":{
                templateUrl : "root/biddingManagement/email/list/_res/html/index.html",
                controller:'emailListCtrl'
            }
        }
    }).state("root.biddingManagement.email.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.biddingManagement.email":{
                templateUrl : "root/biddingManagement/email/add/_res/html/index.html",
                controller:'emailAddCtrl'
            }
        }
    }).state("root.biddingManagement.email.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.biddingManagement.email":{
                templateUrl : "root/biddingManagement/email/edit/_res/html/index.html",
                controller:'emailEditCtrl'
            }
        }
    })
});