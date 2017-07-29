var app = angular.module('settlement', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.settlement", {
        url : "/settlement",
        views : {
            "content@root.project" : {
                templateUrl : "root/project/settlement/_res/html/index.html",
                controller:"settlementCtrl"
            },"menu@root.project" : {
                templateUrl : "root/project/settlement/_res/html/menu.html",
                controller:"settlementMenuCtrl"
            }
        }
    }).state("root.project.settlement.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.project.settlement":{
                templateUrl : "root/project/settlement/add/_res/html/index.html",
                controller:'settlementAddCtrl'
            }
        }
    }).state("root.project.settlement.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.project.settlement":{
                templateUrl : "root/project/settlement/edit/_res/html/index.html",
                controller:'settlementEditCtrl'
            }
        }
    }).state("root.project.settlement.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.project.settlement":{
                templateUrl : "root/project/settlement/summary/_res/html/index.html",
                controller:'settlementSummaryCtrl'
            }
        }
    }).state("root.project.settlement.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.project.settlement":{
                templateUrl : "root/project/settlement/list/_res/html/index.html",
                controller:'settlementListCtrl'
            }
        }
    })
});