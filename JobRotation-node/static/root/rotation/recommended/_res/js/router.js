var app = angular.module('recommended', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.rotation.recommended", {
        url : "/recommended",
        views : {
            "content@root.rotation" : {
                templateUrl : "root/rotation/recommended/_res/html/index.html",
                controller:"recomCtrl"
            },"menu@root.rotation" : {
                templateUrl : "root/rotation/recommended/_res/html/menu.html",
                controller:"recomMenuCtrl"
            }
        }
    }).state("root.rotation.recommended.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.rotation.recommended":{
                templateUrl : "root/rotation/recommended/list/_res/html/index.html",
                controller:'recomListCtrl'
            }
        }
    }).state("root.rotation.recommended.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.rotation.recommended":{
                templateUrl : "root/rotation/recommended/add/_res/html/index.html",
                controller:'recomAddCtrl'
            }
        }
    }).state("root.rotation.recommended.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.rotation.recommended":{
                templateUrl : "root/rotation/recommended/edit/_res/html/index.html",
                controller:'recomEditCtrl'
            }
        }
    }).state("root.rotation.recommended.ideaZ[12]",{
        url:"/ideaZ[12]?id=&page=",
        views:{
            "content@root.rotation.recommended":{
                templateUrl : "root/rotation/recommended/ideaZ/_res/html/index.html",
                controller:'recomIdeaZCtrl'
            }
        }
    })
});