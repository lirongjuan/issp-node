var app = angular.module('week', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.week", {
        url : "/week",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/week/_res/html/index.html",
                controller:"weekCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/week/_res/html/menu.html",
                controller:"weekMenuCtrl"
            }
        }
    }).state("root.file.week.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.file.week":{
                templateUrl : "root/file/week/list/_res/html/index.html",
                controller:'weekListCtrl'
            }
        }
    }).state("root.file.week.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.file.week":{
                templateUrl : "root/file/week/add/_res/html/index.html",
                controller:'weekAddCtrl'
            }
        }
    }).state("root.file.week.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.file.week":{
                templateUrl : "root/file/week/edit/_res/html/index.html",
                controller:'weekEditCtrl'
            }
        }
    }).state("root.file.week.standard[12]",{
        url:"/standard[12]?id=&page=",
        views:{
            "content@root.file.week":{
                templateUrl : "root/file/week/standard/_res/html/index.html",
                controller:'weekStandardCtrl'
            }
        }
    })
});