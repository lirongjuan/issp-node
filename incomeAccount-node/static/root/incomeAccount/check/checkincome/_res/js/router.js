var app = angular.module('checkindex', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.incomeAccount.check.checkincome", {
        url : "/checkincome",
        views : {  
            "content@root.incomeAccount.check" : {
                templateUrl : "root/incomeAccount/check/checkincome/_res/html/index.html",
                controller:"checkincomeCtrl"
            },"menu@root.incomeAccount.check" : {
                templateUrl : "root/incomeAccount/check/checkincome/_res/html/menu.html",
                controller:"checkincomeMenuCtrl"
            }
        }
    }).state("root.incomeAccount.check.checkincome.list[12]",{
        url:"/list[12]?id=&name&page=",
        views:{
            "content@root.incomeAccount.check.checkincome":{
                templateUrl : "root/incomeAccount/check/checkincome/list/_res/html/index.html",
                controller:'checkincomeListCtrl'
            }
        }
    }).state("root.incomeAccount.check.checkincome.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.incomeAccount.check.checkincome":{
                templateUrl : "root/incomeAccount/check/checkincome/add/_res/html/index.html",
                controller:'checkincomeAddCtrl'
            }
        }
    }).state("root.incomeAccount.check.checkincome.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.incomeAccount.check.checkincome":{
                templateUrl : "root/incomeAccount/check/checkincome/edit/_res/html/index.html",
                controller:'checkincomeeditCtrl'
            }
        }
    }).state("root.incomeAccount.check.checkincome.collect[12]",{
        url:"/collect[12]?id=",
        views:{
            "content@root.incomeAccount.check.checkincome":{
                templateUrl : "root/incomeAccount/check/checkincome/collect/_res/html/index.html",
                controller:'areaCtrl'
            }
        }
    }).state("root.incomeAccount.check.checkincome.ctGroup[12]",{
        url:"/ctGroup[12]?id=",
        views:{
            "content@root.incomeAccount.check.checkincome":{
                templateUrl : "root/incomeAccount/check/checkincome/ctGroup/_res/html/index.html",
                controller:'grounpCtrl'
            }
        }
    }).state("root.incomeAccount.check.checkincome.ctName[12]",{
        url:"/ctName[12]?id=",
        views:{
            "content@root.incomeAccount.check.checkincome":{
                templateUrl : "root/incomeAccount/check/checkincome/ctName/_res/html/index.html",
                controller:'ctNameCtrl'
            }
        }
    })
});