var app = angular.module('collar', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.material.collar", {
        url : "/collar",
        views : {
            "content@root.material" : {
                templateUrl : "root/material/collar/_res/html/index.html",
                controller:"collarCtrl"
            },"menu@root.material" : {
                templateUrl : "root/material/collar/_res/html/menu.html",
                controller:"collarMenuCtrl"
            }
        }
    }).state("root.material.collar.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.material.collar":{
                templateUrl : "root/material/collar/list/_res/html/index.html",
                controller:'collarListCtrl'
            }
        }
    }).state("root.material.collar.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.material.collar":{
                templateUrl : "root/material/collar/add/_res/html/index.html",
                controller:'collarAddCtrl'
            }
        }
    }).state("root.material.collar.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.material.collar":{
                templateUrl : "root/material/collar/edit/_res/html/index.html",
                controller:'collarEditCtrl'
            }
        }
    }).state("root.material.collar.Leadcompletion[12]",{
        url:"/Leadcompletion[12]?id=&page=",
        views:{
            "content@root.material.collar":{
                templateUrl : "root/material/collar/Leadcompletion/_res/html/index.html",
                controller:'LeadcompletionCtrl'
            }
        }
    }).state("root.material.collar.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.material.collar":{
                templateUrl : "root/material/collar/audit/_res/html/index.html",
                controller:'collarAuditCtrl'
            }
        }
    }).state("root.material.collar.restitution[12]",{
        url:"/restitution[12]?id=&page=",
        views:{
            "content@root.material.collar":{
                templateUrl : "root/material/collar/restitution/_res/html/index.html",
                controller:'restitutionCtrl'
            }
        }
    })
});