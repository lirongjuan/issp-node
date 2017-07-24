var app = angular.module('analyseDay', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.check.analyseDay", {
        url : "/analyseDay",
        views : {
            "content@root.check" : {
                templateUrl : "root/check/analyseDay/_res/html/index.html",
                controller:"analyseDayCtrl"
            },"menu@root.check" : {
                templateUrl : "root/check/analyseDay/_res/html/menu.html",
                controller:"analyseDayMenuCtrl"
            }
        }
    }).state("root.check.analyseDay.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.check.analyseDay":{
                templateUrl : "root/check/analyseDay/list/_res/html/index.html",
                controller:'analyseDayListCtrl'
            }
        }
    }).state("root.check.analyseDay.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.check.analyseDay":{
                templateUrl : "root/check/analyseDay/add/_res/html/index.html",
                controller:'analyseDayAddCtrl'
            }
        }
    }).state("root.check.analyseDay.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.check.analyseDay":{
                templateUrl : "root/check/analyseDay/edit/_res/html/index.html",
                controller:'analyseDayEditCtrl'
            }
        }
    })
});