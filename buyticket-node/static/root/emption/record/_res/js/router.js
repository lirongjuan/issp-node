var app = angular.module('record', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.emption.record", {
        url : "/record",
        views : {
            "content@root.emption" : {
                templateUrl : "root/emption/record/_res/html/index.html",
                controller:"recordCtrl"
            },"menu@root.emption" : {
                templateUrl : "root/emption/record/_res/html/menu.html",
                controller:"recordMenuCtrl"
            }
        }
    }).state("root.emption.record.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.emption.record":{
                templateUrl : "root/emption/record/list/_res/html/index.html",
                controller:'recordListCtrl'
            }
        }
    }).state("root.emption.record.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.emption.record":{
                templateUrl : "root/emption/record/add/_res/html/index.html",
                controller:'recordAddCtrl'
            }
        }
    }).state("root.emption.record.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.emption.record":{
                templateUrl : "root/emption/record/edit/_res/html/index.html",
                controller:'recordEditCtrl'
            }
        }
    })
});