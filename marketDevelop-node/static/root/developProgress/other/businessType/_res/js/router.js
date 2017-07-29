var app = angular.module('businessType', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.developProgress.other.businessType", {
        url : "/businessType",
        views : {
            "content@root.developProgress.other" : {
                templateUrl : "root/developProgress/other/businessType/_res/html/index.html",
                controller:"typeCtrl"
            },"menu@root.developProgress.other" : {
                templateUrl : "root/developProgress/other/businessType/_res/html/menu.html",
                controller:"typeMenuCtrl"
            }
        }
    }).state("root.developProgress.other.businessType.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.developProgress.other.businessType":{
                templateUrl : "root/developProgress/other/businessType/list/_res/html/index.html",
                controller:'typeListCtrl'
            }
        }
    }).state("root.developProgress.other.businessType.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.developProgress.other.businessType":{
                templateUrl : "root/developProgress/other/businessType/add/_res/html/index.html",
                controller:'typeAddCtrl'
            }
        }
    }).state("root.developProgress.other.businessType.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.developProgress.other.businessType":{
                templateUrl : "root/developProgress/other/businessType/edit/_res/html/index.html",
                controller:'typeEditCtrl'
            }
        }
    })
});