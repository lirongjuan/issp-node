var app = angular.module('scoring', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.people.scoring", {
        url : "/scoring",
        views : {
            "content@root.people" : {
                templateUrl : "root/people/scoring/_res/html/index.html",
                controller:"scoringCtrl"
            },"menu@root.people" : {
                templateUrl : "root/people/scoring/_res/html/menu.html",
                controller:"scoringMenuCtrl"
            }
        }
    }).state("root.people.scoring.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.people.scoring":{
                templateUrl : "root/people/scoring/list/_res/html/index.html",
                controller:'scoringListCtrl'
            }
        }
    }).state("root.people.scoring.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.people.scoring":{
                templateUrl : "root/people/scoring/add/_res/html/index.html",
                controller:'scoringAddCtrl'
            }
        }
    }).state("root.people.scoring.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.people.scoring":{
                templateUrl : "root/people/scoring/edit/_res/html/index.html",
                controller:'webEditCtrl'
            }
        }
    })
});