var app = angular.module('coststatus', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.manage.coststatus", {
        url : "/coststatus",
        views : {// projectmeasure  
            "content@root.projectmeasure.manage" : {
                templateUrl : "root/projectmeasure/manage/coststatus/_res/html/index.html",
                controller:"coststatusCtrl"
            },"menu@root.projectmeasure.manage" : {
                templateUrl : "root/projectmeasure/manage/coststatus/_res/html/menu.html",
                controller:"coststatusMenuCtrl"
            }
        }
    }).state("root.projectmeasure.manage.coststatus.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.projectmeasure.manage.coststatus":{
                templateUrl : "root/projectmeasure/manage/coststatus/list/_res/html/index.html",
                controller:'coststatusListCtrl'
            }
        }
    }).state("root.projectmeasure.manage.coststatus.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectmeasure.manage.coststatus":{
                templateUrl : "root/projectmeasure/manage/coststatus/add/_res/html/index.html",
                controller:'coststatusAddCtrl'
            }
        }
    }).state("root.projectmeasure.manage.coststatus.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectmeasure.manage.coststatus":{
                templateUrl : "root/projectmeasure/manage/coststatus/edit/_res/html/index.html",
                controller:'companyEditCtrl'
            }
        }
    }).state("root.projectmeasure.manage.coststatus.view[12]",{
        url:"/view[12]?id=&page=",
        views:{
            "content@root.projectmeasure.manage.coststatus":{
                templateUrl : "root/projectmeasure/manage/coststatus/view/_res/html/index.html",
                controller:'viewCtrl'
            }
        }
    })
});