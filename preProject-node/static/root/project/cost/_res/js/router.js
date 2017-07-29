var app = angular.module('cost', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.cost", {
        url : "/cost",
        views : {
            "content@root.project" : {
                templateUrl : "root/project/cost/_res/html/index.html",
                controller:"costCtrl"
            },"menu@root.project" : {
                templateUrl : "root/project/cost/_res/html/menu.html",
                controller:"costMenuCtrl"
            }
        }
    }).state("root.project.cost.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.project.cost":{
                templateUrl : "root/project/cost/add/_res/html/index.html",
                controller:'costAddCtrl'
            }
        }
    }).state("root.project.cost.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.project.cost":{
                templateUrl : "root/project/cost/edit/_res/html/index.html",
                controller:'costEditCtrl'
            }
        }
    }).state("root.project.cost.details[12]",{
        url:"/details[12]?suId=",
        views:{
            "content@root.project.cost":{
                templateUrl : "root/project/cost/details/_res/html/index.html",
                controller:'costDetailsCtrl'
            }
        }
    }).state("root.project.cost.detailName[12]",{
        url:"/detailName[12]?suId=",
        views:{
            "content@root.project.cost":{
                templateUrl : "root/project/cost/detailName/_res/html/index.html",
                controller:'costDetailNameCtrl'
            }
        }
    }).state("root.project.cost.detailGroup[12]",{
        url:"/detailGroup[12]?suId=",
        views:{
            "content@root.project.cost":{
                templateUrl : "root/project/cost/detailGroup/_res/html/index.html",
                controller:'costDetailGroupCtrl'
            }
        }
    }).state("root.project.cost.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.project.cost":{
                templateUrl : "root/project/cost/list/_res/html/index.html",
                controller:'costListCtrl'
            }
        }
    })
});