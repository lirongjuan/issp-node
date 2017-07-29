var app = angular.module('competitor', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.competitor", {
        url : "/competitor",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/competitor/_res/html/index.html",
                controller:"competitorCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/competitor/_res/html/menu.html",
                controller:"competitorMenuCtrl"
            }
        }
    }).state("root.compete.competitor.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.compete.competitor":{
                templateUrl : "root/compete/competitor/list/_res/html/index.html",
                controller:'companyListCtrl'
            }
        }
    }).state("root.compete.competitor.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.compete.competitor":{
                templateUrl : "root/compete/competitor/add/_res/html/index.html",
                controller:'companyAddCtrl'
            }
        }
    }).state("root.compete.competitor.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.compete.competitor":{
                templateUrl : "root/compete/competitor/edit/_res/html/index.html",
                controller:'companyEditCtrl'
            }
        }
    }).state("root.compete.competitor.organize[12]",{
        url:"/organize[12]?id=",
        views:{
            "content@root.compete.competitor":{
                templateUrl : "root/compete/competitor/organize/_res/html/index.html",
                controller:'competitorOrganizeCtr'
            }
        }
    }).state("root.compete.competitor.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.compete.competitor":{
                templateUrl : "root/compete/competitor/view/_res/html/index.html",
                controller:'competitorViewCtr'
            }
        }
    }).state("root.compete.competitor.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.compete.competitor":{
                templateUrl : "root/compete/competitor/upload/_res/html/index.html",
                controller:'uploadCtrl'
            }
        }
    }).state("root.compete.competitor.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.compete.competitor":{
                templateUrl : "root/compete/competitor/export/_res/html/index.html",
                controller:'exportCtrl'
            }
        }
    }).state("root.compete.competitor.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.compete.competitor":{
                templateUrl : "root/compete/competitor/import/_res/html/index.html",
                controller:'importCtrl'
            }
        }
    })
});