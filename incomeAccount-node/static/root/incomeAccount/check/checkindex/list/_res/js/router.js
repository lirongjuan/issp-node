var app = angular.module('checkindexList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.incomeAccount.check.checkindex.list",{
        url:"/list",
        views:{
            "content@root.incomeAccount.check.checkindex":{
                templateUrl : "root/incomeAccount/check/checkindex/list/_res/html/index.html",
                controller:'checkindexListCtrl'
            }
        }
    }).state("root.incomeAccount.check.checkindex.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.incomeAccount.check.checkindex.list":{
                templateUrl : "root/incomeAccount/check/checkindex/list/delete/_res/html/index.html",
                controller:'checkindexDeleteCtrl'
            }
        }
    })
});