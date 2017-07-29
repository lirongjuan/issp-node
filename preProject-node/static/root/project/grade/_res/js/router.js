var app = angular.module('grade', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.grade", {
        url : "/grade",
        views : {
            "content@root.project" : {
                templateUrl : "root/project/grade/_res/html/index.html",
                controller:"gradeCtrl"
            },"menu@root.project" : {
                templateUrl : "root/project/grade/_res/html/menu.html",
                controller:"gradeMenuCtrl"
            }
        }
    }).state("root.project.grade.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.project.grade":{
                templateUrl : "root/project/grade/add/_res/html/index.html",
                controller:'gradeAddCtrl'
            }
        }
    }).state("root.project.grade.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.project.grade":{
                templateUrl : "root/project/grade/edit/_res/html/index.html",
                controller:'gradeEditCtrl'
            }
        }
    }).state("root.project.grade.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.project.grade":{
                templateUrl : "root/project/grade/list/_res/html/index.html",
                controller:'gradeListCtrl'
            }
        }
    })
});