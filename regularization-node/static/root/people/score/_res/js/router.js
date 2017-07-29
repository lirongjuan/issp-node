var app = angular.module('score', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.people.score", {
        url : "/score",
        views : {
            "content@root.people" : {
                templateUrl : "root/people/score/_res/html/index.html",
                controller:"scoreCtrl"
            },"menu@root.people" : {
                templateUrl : "root/people/score/_res/html/menu.html",
                controller:"scoreMenuCtrl"
            }
        }
    }).state("root.people.score.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.people.score":{
                templateUrl : "root/people/score/list/_res/html/index.html",
                controller:'scoreListCtrl'
            }
        }
    }).state("root.people.score.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.people.score":{
                templateUrl : "root/people/score/add/_res/html/index.html",
                controller:'scoreAddCtrl'
            }
        }
    }).state("root.people.score.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.people.score":{
                templateUrl : "root/people/score/edit/_res/html/index.html",
                controller:'webEditCtrl'
            }
        }
    })
});