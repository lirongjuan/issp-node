var app = angular.module('analyseWeek', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.check.analyseWeek", {
        url : "/analyseWeek",
        views : {
            "content@root.check" : {
                templateUrl : "root/check/analyseWeek/_res/html/index.html",
                controller:"analyseWeekCtrl"
            },"menu@root.check" : {
                templateUrl : "root/check/analyseWeek/_res/html/menu.html",
                controller:"analyseWeekMenuCtrl"
            }
        }
    }).state("root.check.analyseWeek.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.check.analyseWeek":{
                templateUrl : "root/check/analyseWeek/list/_res/html/index.html",
                controller:'analyseWeekListCtrl'
            }
        }
    }).state("root.check.analyseWeek.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.check.analyseWeek":{
                templateUrl : "root/check/analyseWeek/add/_res/html/index.html",
                controller:'analyseWeekAddCtrl'
            }
        }
    }).state("root.check.analyseWeek.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.check.analyseWeek":{
                templateUrl : "root/check/analyseWeek/edit/_res/html/index.html",
                controller:'analyseWeekEditCtrl'
            }
        }
    })
});