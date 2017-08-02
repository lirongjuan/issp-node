var app = angular.module('application', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.emption.application", {
        url : "/application",
        views : {
            "content@root.emption" : {
                templateUrl : "root/emption/application/_res/html/index.html",
                controller:"applicationCtrl"
            },"menu@root.emption" : {
                templateUrl : "root/emption/application/_res/html/menu.html",
                controller:"applicationMenuCtrl"
            }
        }
    }).state("root.emption.application.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.emption.application":{
                templateUrl : "root/emption/application/list/_res/html/index.html",
                controller:'applicationListCtrl'
            }
        }
    }).state("root.emption.application.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.emption.application":{
                templateUrl : "root/emption/application/add/_res/html/index.html",
                controller:'applicationAddCtrl'
            }
        }
    }).state("root.emption.application.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.emption.application":{
                templateUrl : "root/emption/application/edit/_res/html/index.html",
                controller:'applicationEditCtrl'
            }
        }
    }).state("root.emption.application.planaudit[12]",{
        url:"/planaudit[12]?id=&page=",
        views:{
            "content@root.emption.application":{
                templateUrl : "root/emption/application/planaudit/_res/html/index.html",
                controller:'appPlanauditCtrl'
            }
        }
    }).state("root.emption.application.welfaudit[12]",{
    url:"/welfaudit[12]?id=&page=",
        views:{
        "content@root.emption.application":{
            templateUrl : "root/emption/application/welfaudit/_res/html/index.html",
                controller:'appwelfauditCtrl'
        }
    }
})
});