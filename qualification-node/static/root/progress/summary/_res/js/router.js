var app = angular.module('summary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.progress.summary", {
        url : "/summary",
        views : {
            "content@root.progress" : {
                templateUrl : "root/progress/summary/_res/html/index.html",
                controller:"summaryCtrl"
            },"menu@root.progress.summary" : {
                templateUrl : "root/progress/summary/_res/html/menu.html",
                controller:"summaryMenuCtrl"
            }
        }
    }).state("root.progress.summary.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.progress.summary":{
                templateUrl : "root/progress/summary/list/_res/html/index.html",
                controller:'listCtrl'
            }
        }
    }).state("root.progress.summary.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.progress.summary":{
                templateUrl : "root/progress/summary/add/_res/html/index.html",
                controller:'addCtrl'
            }
        }
    }).state("root.progress.summary.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.progress.summary":{
                templateUrl : "root/progress/summary/edit/_res/html/index.html",
                controller:'editCtrl'
            }
        }
    }).state("root.progress.summary.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.progress.summary":{
                templateUrl : "root/progress/summary/upload/_res/html/index.html",
                controller:'summaryUploadCtrl'
            }
        }
    }).state("root.progress.summary.view[12]",{
        url:"/view[12]?id=&page=",
        views:{
            "content@root.progress.summary":{
                templateUrl : "root/progress/summary/view/_res/html/index.html",
                controller:'summaryViewCtrl'
            }
        }
    }).state("root.progress.summary.select[12]",{
        url:"/select[12]",
        views:{
            "content@root.progress.summary":{
                templateUrl : "root/progress/summary/select/_res/html/index.html",
                controller:'summarySelectCtrl'
            }
        }
    })
});