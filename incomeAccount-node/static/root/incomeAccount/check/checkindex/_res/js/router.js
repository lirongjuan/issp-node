var app = angular.module('checkindex', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.incomeAccount.check.checkindex", {
        url : "/checkindex",
        views : {  
            "content@root.incomeAccount.check" : {
                templateUrl : "root/incomeAccount/check/checkindex/_res/html/index.html",
                controller:"checkindexCtrl"
            },"menu@root.incomeAccount.check" : {
                templateUrl : "root/incomeAccount/check/checkindex/_res/html/menu.html",
                controller:"checkindexMenuCtrl"
            }
        }
    }).state("root.incomeAccount.check.checkindex.list[12]",{
        url:"/list[12]?id=&name&page=",
        views:{
            "content@root.incomeAccount.check.checkindex":{
                templateUrl : "root/incomeAccount/check/checkindex/list/_res/html/index.html",
                controller:'checkindexListCtrl'
            }
        }
    }).state("root.incomeAccount.check.checkindex.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.incomeAccount.check.checkindex":{
                templateUrl : "root/incomeAccount/check/checkindex/add/_res/html/index.html",
                controller:'checkindexAddCtrl'
            }
        }
    }).state("root.incomeAccount.check.checkindex.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.incomeAccount.check.checkindex":{
                templateUrl : "root/incomeAccount/check/checkindex/edit/_res/html/index.html",
                controller:'checkindexEditCtrl'
            }
        }
    })
});