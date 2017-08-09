var app = angular.module('conType', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.contract.conType", {
        url : "/conType",
        views : {
            "content@root.contract" : {
                templateUrl : "root/contract/conType/_res/html/index.html",
                controller:"conTypeCtrl"
            },"menu@root.contract" : {
                templateUrl : "root/contract/conType/_res/html/menu.html",
                controller:"conTypeMenuCtrl"
            }
        }
    }).state("root.contract.conType.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.contract.conType":{
                templateUrl : "root/contract/conType/list/_res/html/index.html",
                controller:'conTypeListCtrl'
            }
        }
    }).state("root.contract.conType.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.contract.conType":{
                templateUrl : "root/contract/conType/add/_res/html/index.html",
                controller:'conTypeAddCtrl'
            }
        }
    }).state("root.contract.conType.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.contract.conType":{
                templateUrl : "root/contract/conType/edit/_res/html/index.html",
                controller:'conTypeEditCtrl'
            }
        }
    })
});