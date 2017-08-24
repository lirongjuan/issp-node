var app = angular.module('basicInfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.card.basicInfo", {
        url : "/basicInfo",
        views : {
            "content@root.card" : {
                templateUrl : "root/card/basicInfo/_res/html/index.html",
                controller:"basicInfoCtrl"
            },"menu@root.card" : {
                templateUrl : "root/card/basicInfo/_res/html/menu.html",
                controller:"basicInfoMenuCtrl"
            }
        }
    }).state("root.card.basicInfo.list[12]",{
        url:"/list[12]?id=&name=&page=&status=",
        views:{
            "content@root.card.basicInfo":{
                templateUrl : "root/card/basicInfo/list/_res/html/index.html",
                controller:'basicInfoListCtrl'
            }
        }
    }).state("root.card.basicInfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.card.basicInfo":{
                templateUrl : "root/card/basicInfo/add/_res/html/index.html",
                controller:'basicInfoAddCtrl'
            }
        }
    }).state("root.card.basicInfo.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.card.basicInfo":{
                templateUrl : "root/card/basicInfo/edit/_res/html/index.html",
                controller:'basicInfoEditCtrl'
            }
        }
    })
});