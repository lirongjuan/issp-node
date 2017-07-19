var app = angular.module('projectGroup', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.material.projectGroup", {
        url : "/projectGroup",
        views : {
            "content@root.material" : {
                templateUrl : "root/material/projectGroup/_res/html/index.html",
                controller:"projectGroupCtrl"
            },"menu@root.material" : {
                templateUrl : "root/material/projectGroup/_res/html/menu.html",
                controller:"projectGroupMenuCtrl"
            }
        }
    }).state("root.material.projectGroup.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.material.projectGroup":{
                templateUrl : "root/material/projectGroup/list/_res/html/index.html",
                controller:'projectGroupListCtrl'
            }
        }
    }).state("root.material.projectGroup.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.material.projectGroup":{
                templateUrl : "root/material/projectGroup/add/_res/html/index.html",
                controller:'projectGroupAddCtrl'
            }
        }
    }).state("root.material.projectGroup.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.material.projectGroup":{
                templateUrl : "root/material/projectGroup/edit/_res/html/index.html",
                controller:'projectGroupEditCtrl'
            }
        }
    }).state("root.material.projectGroup.restitution[12]",{
        url:"/restitution[12]?id=&page=",
        views:{
            "content@root.material.projectGroup":{
                templateUrl : "root/material/projectGroup/restitution/_res/html/index.html",
                controller:'restitutionCtrl'
            }
        }
    })
});