var app = angular.module('years', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.check.years", {
        url : "/years",
        views : {
            "content@root.check" : {
                templateUrl : "root/check/years/_res/html/index.html",
                controller:"yearsCtrl"
            },"menu@root.check" : {
                templateUrl : "root/check/years/_res/html/menu.html",
                controller:"yearsMenuCtrl"
            }
        }
    }).state("root.check.years.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.check.years":{
                templateUrl : "root/check/years/list/_res/html/index.html",
                controller:'yearsListCtrl'
            }
        }
    }).state("root.check.years.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.check.years":{
                templateUrl : "root/check/years/add/_res/html/index.html",
                controller:'yearsAddCtrl'
            }
        }
    }).state("root.check.years.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.check.years":{
                templateUrl : "root/check/years/edit/_res/html/index.html",
                controller:'yearsEditCtrl'
            }
        }
    }).state("root.check.years.confirm[12]",{
        url:"/confirm[12]?id=&page=",
        views:{
            "content@root.check.years":{
                templateUrl : "root/check/years/confirm/_res/html/index.html",
                controller:'yearsConfirmCtrl'
            }
        }
    }).state("root.check.years.verify[12]",{
        url:"/verify[12]?id=&page=",
        views:{
        "content@root.check.years":{
            templateUrl : "root/check/years/verify/_res/html/index.html",
                controller:'yearsVerifyCtrl'
        }
    }
    }).state("root.check.years.aduit[12]", {
        url : "/aduit[12]?id=&page=",
        views : {
            "content@root.check.years" : {
                templateUrl : "root/check/years/aduit/_res/html/index.html",
                controller : 'yearsAduitCtrl'
            }
        }
    })
});