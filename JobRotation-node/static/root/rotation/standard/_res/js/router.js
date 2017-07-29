var app = angular.module('standard', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.rotation.standard", {
        url : "/standard",
        views : {
            "content@root.rotation" : {
                templateUrl : "root/rotation/standard/_res/html/index.html",
                controller:"standardCtrl"
            },"menu@root.rotation" : {
                templateUrl : "root/rotation/standard/_res/html/menu.html",
                controller:"standardMenuCtrl"
            }
        }
    }).state("root.rotation.standard.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.rotation.standard":{
                templateUrl : "root/rotation/standard/list/_res/html/index.html",
                controller:'standardListCtrl'
            }
        }
    }).state("root.rotation.standard.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.rotation.standard":{
                templateUrl : "root/rotation/standard/add/_res/html/index.html",
                controller:'standardAddCtrl'
            }
        }
    }).state("root.rotation.standard.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.rotation.standard":{
                templateUrl : "root/rotation/standard/edit/_res/html/index.html",
                controller:'standardEditCtrl'
            }
        }
    })
});