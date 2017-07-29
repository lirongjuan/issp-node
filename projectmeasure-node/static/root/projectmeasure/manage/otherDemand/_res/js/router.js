var app = angular.module('otherDemand', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.manage.otherDemand", {
        url : "/otherDemand",
        views : {  
            "content@root.projectmeasure.manage" : {
                templateUrl : "root/projectmeasure/manage/otherDemand/_res/html/index.html",
                controller:"otherDemandCtrl"
            },"menu@root.projectmeasure.manage" : {
                templateUrl : "root/projectmeasure/manage/otherDemand/_res/html/menu.html",
                controller:"otherDemandMenuCtrl"
            }
        }
    }).state("root.projectmeasure.manage.otherDemand.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.projectmeasure.manage.otherDemand":{
                templateUrl : "root/projectmeasure/manage/otherDemand/list/_res/html/index.html",
                controller:'otherDemandListCtrl'
            }
        }
    }).state("root.projectmeasure.manage.otherDemand.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectmeasure.manage.otherDemand":{
                templateUrl : "root/projectmeasure/manage/otherDemand/add/_res/html/index.html",
                controller:'otherDemandAddCtrl'
            }
        }
    }).state("root.projectmeasure.manage.otherDemand.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectmeasure.manage.otherDemand":{
                templateUrl : "root/projectmeasure/manage/otherDemand/edit/_res/html/index.html",
                controller:'otherDemandeditCtrl'
            }
        }
    })
});