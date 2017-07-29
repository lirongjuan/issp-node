var app = angular.module('projectacceptance', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.projectacceptance", {
        url : "/projectacceptance",
        views : {
            "content@root.project" : {
                templateUrl : "root/project/projectacceptance/_res/html/index.html",
                controller:"projectacceptanceCtrl"
            },"menu@root.project" : {
                templateUrl : "root/project/projectacceptance/_res/html/menu.html",
                controller:"projectacceptanceMenuCtrl"
            }
        }
    }).state("root.project.projectacceptance.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.project.projectacceptance":{
                templateUrl : "root/project/projectacceptance/add/_res/html/index.html",
                controller:'projectacceptanceAddCtrl'
            }
        }
    }).state("root.project.projectacceptance.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.project.projectacceptance":{
                templateUrl : "root/project/projectacceptance/edit/_res/html/index.html",
                controller:'projectacceptanceEditCtrl'
            }
        }
    }).state("root.project.projectacceptance.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.project.projectacceptance":{
                templateUrl : "root/project/projectacceptance/list/_res/html/index.html",
                controller:'projectacceptanceListCtrl'
            }
        }
    })
});