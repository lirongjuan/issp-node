var app = angular.module('information', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.Industrial.information", {
        url : "/information",
        views : {
            "content@root.Industrial" : {
                templateUrl : "root/Industrial/information/_res/html/index.html",
                controller:"informationCtrl"
            },"menu@root.Industrial" : {
                templateUrl : "root/Industrial/information/_res/html/menu.html",
                controller:"informationMenuCtrl"
            }
        }
    }).state("root.Industrial.information.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.Industrial.information":{
                templateUrl : "root/Industrial/information/list/_res/html/index.html",
                controller:'informationListCtrl'
            }
        }
    }).state("root.Industrial.information.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.Industrial.information":{
                templateUrl : "root/Industrial/information/add/_res/html/index.html",
                controller:'informationAddCtrl'
            }
        }
    }).state("root.Industrial.information.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.Industrial.information":{
                templateUrl : "root/Industrial/information/edit/_res/html/index.html",
                controller:'informationEditCtrl'
            }
        }
    }).state("root.Industrial.information.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.Industrial.information":{
                templateUrl : "root/Industrial/information/upload/_res/html/index.html",
                controller:'informationUploadCtrl'
            }
        }
    }).state("root.Industrial.information.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.Industrial.information":{
                templateUrl : "root/Industrial/information/view/_res/html/index.html",
                controller:'informationViewCtrl'
            }
        }
    })
});