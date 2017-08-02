var app = angular.module('basicInfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.emption.basicInfo", {
        url : "/basicInfo",
        views : {
            "content@root.emption" : {
                templateUrl : "root/emption/basicInfo/_res/html/index.html",
                controller:"basicInfoCtrl"
            },"menu@root.emption" : {
                templateUrl : "root/emption/basicInfo/_res/html/menu.html",
                controller:"basicInfoMenuCtrl"
            }
        }
    }).state("root.emption.basicInfo.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.emption.basicInfo":{
                templateUrl : "root/emption/basicInfo/list/_res/html/index.html",
                controller:'basicInfoListCtrl'
            }
        }
    }).state("root.emption.basicInfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.emption.basicInfo":{
                templateUrl : "root/emption/basicInfo/add/_res/html/index.html",
                controller:'basicInfoAddCtrl'
            }
        }
    }).state("root.emption.basicInfo.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.emption.basicInfo":{
                templateUrl : "root/emption/basicInfo/edit/_res/html/index.html",
                controller:'basicInfoEditCtrl'
            }
        }
    })
});