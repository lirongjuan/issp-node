var app = angular.module('conditions', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.rotation.conditions", {
        url : "/conditions",
        views : {
            "content@root.rotation" : {
                templateUrl : "root/rotation/conditions/_res/html/index.html",
                controller:"conditCtrl"
            },"menu@root.rotation" : {
                templateUrl : "root/rotation/conditions/_res/html/menu.html",
                controller:"conditMenuCtrl"
            }
        }
    }).state("root.rotation.conditions.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.rotation.conditions":{
                templateUrl : "root/rotation/conditions/list/_res/html/index.html",
                controller:'conditListCtrl'
            }
        }
    }).state("root.rotation.conditions.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.rotation.conditions":{
                templateUrl : "root/rotation/conditions/add/_res/html/index.html",
                controller:'conditAddCtrl'
            }
        }
    }).state("root.rotation.conditions.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.rotation.conditions":{
                templateUrl : "root/rotation/conditions/edit/_res/html/index.html",
                controller:'conditEditCtrl'
            }
        }
    })
});