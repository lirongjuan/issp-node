var app = angular.module('record', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.flow.record", {
        url : "/record",
        views : {
            "content@root.flow" : {
                templateUrl : "root/flow/record/_res/html/index.html",
                controller:"recordCtrl"
            },"menu@root.flow" : {
                templateUrl : "root/flow/record/_res/html/menu.html",
                controller:"recordMenuCtrl"
            }
        }
    }).state("root.flow.record.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.flow.record":{
                templateUrl : "root/flow/record/list/_res/html/index.html",
                controller:'recordListCtrl'
            }
        }
    }).state("root.flow.record.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.flow.record":{
                templateUrl : "root/flow/record/add/_res/html/index.html",
                controller:'recordAddCtrl'
            }
        }
    }).state("root.flow.record.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.flow.record":{
                templateUrl : "root/flow/record/edit/_res/html/index.html",
                controller:'recordEditCtrl'
            }
        }
    }).state("root.flow.record.area[12]",{
        url:"/area[12]",
        views:{
            "content@root.flow.record":{
                templateUrl : "root/flow/record/area/_res/html/index.html",
                controller:'recordAreaCtrl'
            }
        }
    }).state("root.flow.record.project[12]",{
        url:"/project[12]",
        views:{
            "content@root.flow.record":{
                templateUrl : "root/flow/record/project/_res/html/index.html",
                controller:'recordProjectCtrl'
            }
        }
    }).state("root.flow.record.group[12]",{
        url:"/group[12]",
        views:{
            "content@root.flow.record":{
                templateUrl : "root/flow/record/group/_res/html/index.html",
                controller:'recordGroupCtrl'
            }
        }
    }).state("root.flow.record.monthAll[12]",{
        url:"/monthAll[12]",
        views:{
            "content@root.flow.record":{
                templateUrl : "root/flow/record/monthAll/_res/html/index.html",
                controller:'recordMonthAllCtrl'
            }
        }
    }).state("root.flow.record.conditionsAll[12]",{
        url:"/conditionsAll[12]",
        views:{
            "content@root.flow.record":{
                templateUrl : "root/flow/record/conditionsAll/_res/html/index.html",
                controller:'recordConditionsAllCtrl'
            }
        }
    }).state("root.flow.record.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.flow.record":{
                templateUrl : "root/flow/record/upload/_res/html/index.html",
                controller:'recordUploadCtrl'
            }
        }
    }).state("root.flow.record.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.flow.record":{
                templateUrl : "root/flow/record/view/_res/html/index.html",
                controller:'recordViewCtrl'
            }
        }
    })
});