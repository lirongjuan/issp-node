var app = angular.module('occupational', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.personal.occupational", {
        url : "/occupational",
        views : {
            "content@root.personal" : {
                templateUrl : "root/personal/occupational/_res/html/index.html",
                controller:"occupationalCtrl"
            },"menu@root.personal" : {
                templateUrl : "root/personal/occupational/_res/html/menu.html",
                controller:"occupationalMenuCtrl"
            }
        }
    }).state("root.personal.occupational.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.personal.occupational":{
                templateUrl : "root/personal/occupational/list/_res/html/index.html",
                controller:'occupationalListCtrl'
            }
        }
    }).state("root.personal.occupational.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.personal.occupational":{
                templateUrl : "root/personal/occupational/add/_res/html/index.html",
                controller:'occupationalAddCtrl'
            }
        }
    }).state("root.personal.occupational.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.personal.occupational":{
                templateUrl : "root/personal/occupational/edit/_res/html/index.html",
                controller:'occupationalEditCtrl'
            }
        }
    }).state("root.personal.occupational.aduit[12]", {
        url : "/aduit[12]?id=&page=",
        views : {
            "content@root.personal.occupational" : {
                templateUrl : "root/personal/occupational/aduit/_res/html/index.html",
                controller : 'occupationalAduitCtrl'
            }
        }
    })
});