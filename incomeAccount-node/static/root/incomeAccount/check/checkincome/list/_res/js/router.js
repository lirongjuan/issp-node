var app = angular.module('checkincomeList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.incomeAccount.check.checkincome.list",{
        url:"/list",
        views:{
            "content@root.incomeAccount.check.checkincome":{
                templateUrl : "root/incomeAccount/check/checkincome/list/_res/html/index.html",
                controller:'checkincomeListCtrl'
            }
        }
    }).state("root.incomeAccount.check.checkincome.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.incomeAccount.check.checkincome.list":{
                templateUrl : "root/incomeAccount/check/checkincome/list/delete/_res/html/index.html",
                controller:'checkincomeDeleteCtrl'
            }
        }
    })
});