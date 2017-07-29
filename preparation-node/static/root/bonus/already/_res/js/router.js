var app = angular.module('already', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.bonus.already", {
        url : "/already",
        views : {
            "content@root.bonus" : {
                templateUrl : "root/bonus/already/_res/html/index.html",
                controller:"alreadyCtrl"
            },"menu@root.bonus" : {
                templateUrl : "root/bonus/already/_res/html/menu.html",
                controller:"alreadyMenuCtrl"
            }
        }
    }).state("root.bonus.already.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.bonus.already":{
                templateUrl : "root/bonus/already/list/_res/html/index.html",
                controller:'alreadyListCtrl'
            }
        }
    }).state("root.bonus.already.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.bonus.already":{
                templateUrl : "root/bonus/already/export/_res/html/index.html",
                controller:'alreadyExportCtrl'
            }
        }
    }).state("root.bonus.already.project[12]",{
        url:"/project[12]",
        views:{
            "content@root.bonus.already":{
                templateUrl : "root/bonus/already/project/_res/html/index.html",
                controller:'alreadyProjectCtrl'
            }
        }
    }).state("root.bonus.already.month[12]",{
        url:"/month[12]",
        views:{
            "content@root.bonus.already":{
                templateUrl : "root/bonus/already/month/_res/html/index.html",
                controller:'alreadyMonthCtrl'
            }
        }
    }).state("root.bonus.already.year[12]",{
        url:"/year[12]",
        views:{
            "content@root.bonus.already":{
                templateUrl : "root/bonus/already/year/_res/html/index.html",
                controller:'alreadyYearCtrl'
            }
        }
    }).state("root.bonus.already.difference[12]",{
        url:"/difference[12]",
        views:{
            "content@root.bonus.already":{
                templateUrl : "root/bonus/already/difference/_res/html/index.html",
                controller:'alreadyDiffCtrl'
            }
        }
    })
});