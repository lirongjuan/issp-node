var app = angular.module('analyseYears', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.check.analyseYears", {
        url : "/analyseYears",
        views : {
            "content@root.check" : {
                templateUrl : "root/check/analyseYears/_res/html/index.html",
                controller:"analyseYearsCtrl"
            },"menu@root.check" : {
                templateUrl : "root/check/analyseYears/_res/html/menu.html",
                controller:"analyseYearsMenuCtrl"
            }
        }
    }).state("root.check.analyseYears.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.check.analyseYears":{
                templateUrl : "root/check/analyseYears/list/_res/html/index.html",
                controller:'analyseYearsListCtrl'
            }
        }
    }).state("root.check.analyseYears.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.check.analyseYears":{
                templateUrl : "root/check/analyseYears/add/_res/html/index.html",
                controller:'analyseYearsAddCtrl'
            }
        }
    }).state("root.check.analyseYears.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.check.analyseYears":{
                templateUrl : "root/check/analyseYears/edit/_res/html/index.html",
                controller:'analyseYearsEditCtrl'
            }
        }
    })
});