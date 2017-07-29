var app = angular.module('date', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.date", {
        url : "/date",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/date/_res/html/index.html",
                controller:"dateCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/date/_res/html/menu.html",
                controller:"dateMenuCtrl"
            }
        }
    }).state("root.file.date.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.date":{
                templateUrl : "root/file/date/list/_res/html/index.html",
                controller:'dateListCtrl'
            }
        }
    }).state("root.file.date.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.date":{
                templateUrl : "root/file/date/add/_res/html/index.html",
                controller:'dateAddCtrl'
            }
        }
    }).state("root.file.date.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.date":{
                templateUrl : "root/file/date/edit/_res/html/index.html",
                controller:'dateEditCtrl'
            }
        }
    }).state("root.file.date.standard[12]",{
        url:"/standard[12]?id=&page=",
        views:{
            "content@root.file.date":{
                templateUrl : "root/file/date/standard/_res/html/index.html",
                controller:'dateStandardCtrl'
            }
        }
    })
});