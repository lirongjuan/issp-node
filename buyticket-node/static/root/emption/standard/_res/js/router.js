var app = angular.module('standard', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.emption.standard", {
        url : "/standard",
        views : {
            "content@root.emption" : {
                templateUrl : "root/emption/standard/_res/html/index.html",
                controller:"standardCtrl"
            },"menu@root.emption" : {
                templateUrl : "root/emption/standard/_res/html/menu.html",
                controller:"standardMenuCtrl"
            }
        }
    }).state("root.emption.standard.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.emption.standard":{
                templateUrl : "root/emption/standard/list/_res/html/index.html",
                controller:'standardListCtrl'
            }
        }
    }).state("root.emption.standard.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.emption.standard":{
                templateUrl : "root/emption/standard/add/_res/html/index.html",
                controller:'standardAddCtrl'
            }
        }
    }).state("root.emption.standard.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.emption.standard":{
                templateUrl : "root/emption/standard/edit/_res/html/index.html",
                controller:'standardEditCtrl'
            }
        }
    })
});