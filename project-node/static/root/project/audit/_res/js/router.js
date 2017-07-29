var app = angular.module('audit', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.audit", {
        url : "/audit",
        views : {
            "content@root.project" : {
                templateUrl : "root/project/audit/_res/html/index.html",
                controller:"auditCtrl"
            },"menu@root.project" : {
                templateUrl : "root/project/audit/_res/html/menu.html",
                controller:"auditMenuCtrl"
            }
        }
    }).state("root.project.audit.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.project.audit":{
                templateUrl : "root/project/audit/add/_res/html/index.html",
                controller:'auditAddCtrl'
            }
        }
    }).state("root.project.audit.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.project.audit":{
                templateUrl : "root/project/audit/edit/_res/html/index.html",
                controller:'auditEditCtrl'
            }
        }
    }).state("root.project.audit.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.project.audit":{
                templateUrl : "root/project/audit/list/_res/html/index.html",
                controller:'auditListCtrl'
            }
        }
    })
});