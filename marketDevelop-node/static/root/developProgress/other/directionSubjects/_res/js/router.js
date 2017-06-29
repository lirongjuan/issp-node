var app = angular.module('directionSubjects', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.other.directionSubjects", {
        url : "/directionSubjects",
        views : {
            "content@root.developProgress.other" : {
                templateUrl : "root/developProgress/other/directionSubjects/_res/html/index.html",
                controller:"directionCtrl"
            },"menu@root.developProgress.other" : {
                templateUrl : "root/developProgress/other/directionSubjects/_res/html/menu.html",
                controller:"directionMenuCtrl"
            }
        }
    }).state("root.developProgress.other.directionSubjects.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.developProgress.other.directionSubjects":{
                templateUrl : "root/developProgress/other/directionSubjects/list/_res/html/index.html",
                controller:'subjectsListCtrl'
            }
        }
    }).state("root.developProgress.other.directionSubjects.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.developProgress.other.directionSubjects":{
                templateUrl : "root/developProgress/other/directionSubjects/add/_res/html/index.html",
                controller:'directionAddCtrl'
            }
        }
    }).state("root.developProgress.other.directionSubjects.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.developProgress.other.directionSubjects":{
                templateUrl : "root/developProgress/other/directionSubjects/edit/_res/html/index.html",
                controller:'directionEditCtrl'
            }
        }
    })
});