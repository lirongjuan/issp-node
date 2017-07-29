var app = angular.module('month', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.month", {
        url : "/month",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/month/_res/html/index.html",
                controller:"monthCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/month/_res/html/menu.html",
                controller:"monthMenuCtrl"
            }
        }
    }).state("root.file.month.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.month":{
                templateUrl : "root/file/month/list/_res/html/index.html",
                controller:'monthListCtrl'
            }
        }
    }).state("root.file.month.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.month":{
                templateUrl : "root/file/month/add/_res/html/index.html",
                controller:'monthAddCtrl'
            }
        }
    }).state("root.file.month.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.month":{
                templateUrl : "root/file/month/edit/_res/html/index.html",
                controller:'monthEditCtrl'
            }
        }
    }).state("root.file.month.standard[12]",{
        url:"/standard[12]?id=&page=",
        views:{
            "content@root.file.month":{
                templateUrl : "root/file/month/standard/_res/html/index.html",
                controller:'monthStandardCtrl'
            }
        }
    })
});