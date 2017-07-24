var app = angular.module('week', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.check.week", {
        url : "/week",
        views : {
            "content@root.check" : {
                templateUrl : "root/check/week/_res/html/index.html",
                controller:"weekCtrl"
            },"menu@root.check" : {
                templateUrl : "root/check/week/_res/html/menu.html",
                controller:"weekMenuCtrl"
            }
        }
    }).state("root.check.week.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.check.week":{
                templateUrl : "root/check/week/list/_res/html/index.html",
                controller:'weekListCtrl'
            }
        }
    }).state("root.check.week.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.check.week":{
                templateUrl : "root/check/week/add/_res/html/index.html",
                controller:'weekAddCtrl'
            }
        }
    }).state("root.check.week.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.check.week":{
                templateUrl : "root/check/week/edit/_res/html/index.html",
                controller:'weekEditCtrl'
            }
        }
    }).state("root.check.week.confirm[12]",{
        url:"/confirm[12]?id=&page=",
        views:{
            "content@root.check.week":{
                templateUrl : "root/check/week/confirm/_res/html/index.html",
                controller:'weekconfirmCtrl'
            }
        }
    }).state("root.check.week.verify[12]",{
        url:"/verify[12]?id=&page=",
        views:{
        "content@root.check.week":{
            templateUrl : "root/check/week/verify/_res/html/index.html",
                controller:'weekverifyCtrl'
        }
    }
    }).state("root.check.week.aduit[12]", {
        url : "/aduit[12]?id=&page=",
        views : {
            "content@root.check.week" : {
                templateUrl : "root/check/week/aduit/_res/html/index.html",
                controller : 'weekaduitCtrl'
            }
        }
    })
});