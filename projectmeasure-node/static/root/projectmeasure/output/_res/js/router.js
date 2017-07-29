var app = angular.module('apple', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.output", {
        url : "/output",
        views : {  
            "content@root.projectmeasure" : {
                templateUrl : "root/projectmeasure/output/_res/html/index.html",
                controllerAs:"appleCtrl"
            },"nav@root.projectmeasure" : {
                templateUrl : "root/projectmeasure/output/_res/html/menu.html",
                controllerAs:"appleMenuCtrl"
            }
        }
    }).state("root.projectmeasure.output.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.projectmeasure.output":{
                templateUrl : "root/projectmeasure/output/list/_res/html/index.html",
                controller:'outputListCtrl'
            }
        }
    })
});