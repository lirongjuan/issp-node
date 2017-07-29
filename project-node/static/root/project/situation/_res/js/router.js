var app = angular.module('situation', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.situation", {
        url : "/situation",
        views : {
            "content@root.project" : {
                templateUrl : "root/project/situation/_res/html/index.html",
                controller:"situationCtrl"
            },"menu@root.project" : {
                templateUrl : "root/project/situation/_res/html/menu.html",
                controller:"situationMenuCtrl"
            }
        }
    }).state("root.project.situation.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.project.situation":{
                templateUrl : "root/project/situation/add/_res/html/index.html",
                controller:'projectAddCtrl'
            }
        }
    }).state("root.project.situation.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.project.situation":{
                templateUrl : "root/project/situation/edit/_res/html/index.html",
                controller:'projectEditCtrl'
            }
        }
    }).state("root.project.situation.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.project.situation":{
                templateUrl : "root/project/situation/list/_res/html/index.html",
                controller:'situationListCtrl'
            }
        }
    })
});