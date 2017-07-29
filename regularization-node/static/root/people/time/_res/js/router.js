var app = angular.module('time', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.people.time", {
        url : "/time",
        views : {
            "content@root.people" : {
                templateUrl : "root/people/time/_res/html/index.html",
                controller:"timeCtrl"
            },"menu@root.people" : {
                templateUrl : "root/people/time/_res/html/menu.html",
                controller:"timeMenuCtrl"
            }
        }
    }).state("root.people.time.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.people.time":{
                templateUrl : "root/people/time/list/_res/html/index.html",
                controller:'timeListCtrl'
            }
        }
    }).state("root.people.time.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.people.time":{
                templateUrl : "root/people/time/add/_res/html/index.html",
                controller:'timeAddCtrl'
            }
        }
    }).state("root.people.time.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.people.time":{
                templateUrl : "root/people/time/edit/_res/html/index.html",
                controller:'webEditCtrl'
            }
        }
    })
});